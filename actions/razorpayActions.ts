"use server";

import Razorpay from "razorpay";
import { backendClient } from "@/sanity/lib/backendClient";
import { CartItem } from "@/store";
import crypto from "crypto";
import { Address } from "@/sanity.types";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export interface Metadata {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string | undefined;
  address: Address | null;
}

export interface GroupedCartItems {
  product: CartItem["product"];
  quantity: number;
}

export async function createRazorpayOrder(
  items: GroupedCartItems[],
  metadata: Metadata
) {
  try {
    const totalAmount = items.reduce((acc, item) => {
      return acc + (item.product?.price || 0) * item.quantity;
    }, 0);

    const amountInPaise = Math.round(totalAmount * 100);

    // Prepare address for notes
    const addressString = metadata.address
      ? `${metadata.address.name}, ${metadata.address.address}, ${metadata.address.city}, ${metadata.address.zip}`
      : "No Address";

    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: metadata.orderNumber,
      payment_capture: 1,
      notes: {
        customerName: metadata.customerName,
        customerEmail: metadata.customerEmail,
        clerkUserId: metadata.clerkUserId ?? "",
        address: addressString.substring(0, 250),
      },
    };

    const order = await razorpay.orders.create(options);
    return order.id;
  } catch (error) {
    console.error("Error creating Razorpay Order:", error);
    throw new Error("Failed to create Razorpay order");
  }
}

export async function verifyAndFulfillOrder(
  response: any,
  items: GroupedCartItems[],
  metadata: Metadata
) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    throw new Error("Invalid Signature");
  }

  // Idempotency Check
  const existingOrder = await backendClient.fetch(
    `*[_type == "order" && razorpayPaymentId == $paymentId][0]`,
    { paymentId: razorpay_payment_id }
  );

  if (existingOrder) {
    return { success: true, orderId: existingOrder._id };
  }

  console.log("Creating new order in Sanity...");

  try {
    const totalPrice = items.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0);

    const sanityProducts = items.map((item) => ({
      _key: crypto.randomUUID(),
      product: {
        _type: "reference",
        _ref: item.product?._id,
      },
      quantity: item.quantity,
      sellingUnit: item.product?.sellingUnit ?? item.product?.unit ?? null,
      otherSellingUnit: item.product?.otherSellingUnit ?? null,
      unitsPerSell: item.product?.unitsPerSell ?? null,
      priceAtPurchase: item.product?.price ?? 0,
    }));

    // ✅ GENERATE CUSTOM INVOICE DATA
    // We create a readable invoice number like: AGRI-7382...
    const shortId = metadata.orderNumber.split("-")[0].toUpperCase();
    const invoiceNumber = `INV-${shortId}`; 

    const order = await backendClient.create({
      _type: "order",
      orderNumber: metadata.orderNumber,
      
      // Razorpay Fields
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
      
      clerkUserId: metadata.clerkUserId ?? "Unknown",
      customerName: metadata.customerName,
      email: metadata.customerEmail,
      
      currency: "INR",
      amountDiscount: 0,
      totalPrice: totalPrice,
      products: sanityProducts,
      status: "paid",
      orderDate: new Date().toISOString(),
      
      address: metadata.address
        ? {
            state: metadata.address.state,
            zip: metadata.address.zip,
            city: metadata.address.city,
            address: metadata.address.address,
            name: metadata.address.name,
          }
        : null,

      // ✅ FIX: POPULATING THE INVOICE OBJECT
      invoice: {
        id: invoiceNumber,       // The internal ID
        number: invoiceNumber,   // The display number (e.g. INV-A23F...)
        hosted_invoice_url: null // Razorpay doesn't give a URL, so we keep this null
      }
    });

    // Update Stock
    const stockPromises = items.map((item) => {
      const unitsPerSell = item.product?.unitsPerSell ?? 1;
      const decAmount = (item.quantity ?? 0) * unitsPerSell;
      return backendClient.patch(item.product?._id!).dec({ stock: decAmount }).commit();
    });
    await Promise.all(stockPromises);

    return { success: true, orderId: order._id };
  } catch (error) {
    console.error("Error creating order in sanity:", error);
    throw error;
  }
}