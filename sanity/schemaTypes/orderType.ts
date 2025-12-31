// import { BasketIcon } from "@sanity/icons";
// import { defineArrayMember, defineField, defineType } from "sanity";

// export const orderType = defineType({
//   name: "order",
//   title: "Order",
//   type: "document",
//   icon: BasketIcon,
//   fields: [
//     defineField({
//       name: "orderNumber",
//       title: "Order Number",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     // -----------------------------------------------------------------
//     // 🔴 REPLACED STRIPE FIELDS WITH RAZORPAY FIELDS
//     // -----------------------------------------------------------------
//     defineField({
//       name: "razorpayOrderId", // Was stripeCheckoutSessionId
//       title: "Razorpay Order ID",
//       type: "string",
//     }),
//     defineField({
//       name: "razorpayPaymentId", // Was stripePaymentIntentId
//       title: "Razorpay Payment ID",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "razorpaySignature", // NEW: Useful for security auditing
//       title: "Razorpay Signature",
//       type: "string",
//     }),
//     // -----------------------------------------------------------------
//     defineField({
//       name: "clerkUserId",
//       title: "Store User ID",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "customerName",
//       title: "Customer Name",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "email",
//       title: "Customer Email",
//       type: "string",
//       validation: (Rule) => Rule.required().email(),
//     }),
//     defineField({
//       name: "products",
//       title: "Products",
//       type: "array",
//       of: [
//         defineArrayMember({
//           type: "object",
//           fields: [
//             defineField({
//               name: "product",
//               title: "Product Bought",
//               type: "reference",
//               to: [{ type: "product" }],
//             }),
//             defineField({
//               name: "quantity",
//               title: "Quantity Purchased",
//               type: "number",
//             }),
//             // Snapshot fields to record selling unit info and price at purchase
//             defineField({
//               name: "sellingUnit",
//               title: "Selling Unit",
//               type: "string",
//             }),
//             defineField({
//               name: "otherSellingUnit",
//               title: "Other Selling Unit (if any)",
//               type: "string",
//             }),
//             defineField({
//               name: "unitsPerSell",
//               title: "Units per Selling Unit",
//               type: "number",
//             }),
//             defineField({
//               name: "priceAtPurchase",
//               title: "Price at Purchase",
//               type: "number",
//             }),
//           ],
//           preview: {
//             select: {
//               product: "product.name",
//               quantity: "quantity",
//               image: "product.image",
//               priceAtPurchase: "priceAtPurchase",
//               sellingUnit: "sellingUnit",
//               otherSellingUnit: "otherSellingUnit",
//             },
//             prepare(select) {
//               const unitLabel = select.sellingUnit === "other" ? select.otherSellingUnit : select.sellingUnit;
//               const price = select.priceAtPurchase ?? 0;
//               return {
//                 title: `${select.product} x ${select.quantity}`,
//                 subtitle: `${price * select.quantity} ${unitLabel ? ` / ${unitLabel}` : ""}`,
//                 media: select.image,
//               };
//             },
//           },
//         }),
//       ],
//     }),
//     defineField({
//       name: "totalPrice",
//       title: "Total Price",
//       type: "number",
//       validation: (Rule) => Rule.required().min(0),
//     }),
//     defineField({
//       name: "currency",
//       title: "Currency",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "amountDiscount",
//       title: "Amount Discount",
//       type: "number",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "address",
//       title: "Shipping Address",
//       type: "object",
//       fields: [
//         defineField({ name: "state", title: "State", type: "string" }),
//         defineField({ name: "pinCode", title: "PIN Code", type: "string" }),
//         defineField({ name: "city", title: "City", type: "string" }),
//         defineField({ name: "address", title: "Address", type: "string" }),
//         defineField({ name: "name", title: "Name", type: "string" }),
//       ],
//     }),
//     defineField({
//       name: "status",
//       title: "Order Status",
//       type: "string",
//       options: {
//         list: [
//           { title: "Pending", value: "pending" },
//           { title: "Processing", value: "processing" },
//           { title: "Paid", value: "paid" },
//           { title: "Shipped", value: "shipped" },
//           { title: "Out for Delivery", value: "out_for_delivery" },
//           { title: "Delivered", value: "delivered" },
//           { title: "Cancelled", value: "cancelled" },
//         ],
//       },
//     }),
//     defineField({
//       name: "orderDate",
//       title: "Order Date",
//       type: "datetime",
//       validation: (Rule) => Rule.required(),
//     }),
//   ],
//   preview: {
//     select: {
//       name: "customerName",
//       amount: "totalPrice",
//       currency: "currency",
//       orderId: "orderNumber",
//       email: "email",
//     },
//     prepare(select) {
//       const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
//       return {
//         title: `${select.name} (${orderIdSnippet})`,
//         subtitle: `${select.amount} ${select.currency}, ${select.email}`,
//         media: BasketIcon,
//       };
//     },
//   },
// });













// import { BasketIcon } from "@sanity/icons";
// import { defineArrayMember, defineField, defineType } from "sanity";

// export const orderType = defineType({
//   name: "order",
//   title: "Order",
//   type: "document",
//   icon: BasketIcon,
//   groups: [
//     { name: "customer", title: "Customer Information" },
//     { name: "payment", title: "Payment Details" },
//     { name: "logistics", title: "Logistics & Delivery" },
//     { name: "items", title: "Ordered Products" },
//   ],
//   fields: [
//     defineField({
//       name: "orderNumber",
//       title: "Order Number",
//       type: "string",
//       group: "payment",
//       validation: (Rule) => Rule.required(),
//     }),

//     // --- CUSTOMER INFO ---
//     defineField({
//       name: "customerName",
//       title: "Customer Name",
//       type: "string",
//       group: "customer",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "email",
//       title: "Customer Email",
//       type: "string",
//       group: "customer",
//       validation: (Rule) => Rule.required().email(),
//     }),
//     defineField({
//       name: "customerPhone",
//       title: "Customer Phone Number (WhatsApp)",
//       type: "string",
//       group: "customer",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "clerkUserId",
//       title: "Store User ID",
//       type: "string",
//       group: "customer",
//       validation: (Rule) => Rule.required(),
//     }),

//     // --- RAZORPAY PAYMENT DETAILS ---
//     defineField({
//       name: "razorpayOrderId",
//       title: "Razorpay Order ID",
//       type: "string",
//       group: "payment",
//     }),
//     defineField({
//       name: "razorpayPaymentId",
//       title: "Razorpay Payment ID",
//       type: "string",
//       group: "payment",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "razorpaySignature",
//       title: "Razorpay Signature",
//       type: "string",
//       group: "payment",
//     }),
//     defineField({
//       name: "totalPrice",
//       title: "Total Price",
//       type: "number",
//       group: "payment",
//       validation: (Rule) => Rule.required().min(0),
//     }),
//     defineField({
//       name: "currency",
//       title: "Currency",
//       type: "string",
//       group: "payment",
//       initialValue: "INR",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "amountDiscount",
//       title: "Amount Discount",
//       type: "number",
//       group: "payment",
//       validation: (Rule) => Rule.required(),
//     }),

//     // --- LOGISTICS & LOCATION ---
//     defineField({
//       name: "deliveryLocation",
//       title: "Delivery Location Details",
//       type: "object",
//       group: "logistics",
//       fields: [
//         { name: "fullAddress", type: "string", title: "Full Address" },
//         { name: "landmark", type: "string", title: "Landmark (Nearest Temple/School/Road)" },
//         { name: "city", type: "string", title: "City/Village" },
//         { name: "district", type: "string", title: "District" },
//         { name: "state", type: "string", title: "State" },
//         { name: "pincode", type: "string", title: "PIN Code" },
//         { name: "googleMapsLink", type: "url", title: "Google Maps Link (GPS)" },
//       ],
//     }),
//     defineField({
//       name: "status",
//       title: "Order Status",
//       type: "string",
//       group: "logistics",
//       options: {
//         list: [
//           { title: "Pending", value: "pending" },
//           { title: "Processing", value: "processing" },
//           { title: "Paid (Preparing Batch)", value: "paid" },
//           { title: "Shipped", value: "shipped" },
//           { title: "Out for Delivery", value: "out_for_delivery" },
//           { title: "Delivered", value: "delivered" },
//           { title: "Cancelled", value: "cancelled" },
//         ],
//       },
//     }),
//     defineField({
//       name: "orderDate",
//       title: "Order Date",
//       type: "datetime",
//       group: "payment",
//       validation: (Rule) => Rule.required(),
//     }),

//     // --- PRODUCTS ---
//     defineField({
//       name: "products",
//       title: "Products",
//       type: "array",
//       group: "items",
//       of: [
//         defineArrayMember({
//           type: "object",
//           fields: [
//             defineField({
//               name: "product",
//               title: "Product Bought",
//               type: "reference",
//               to: [{ type: "product" }],
//             }),
//             defineField({
//               name: "quantity",
//               title: "Quantity Purchased",
//               type: "number",
//             }),
//             defineField({
//               name: "sellingUnit",
//               title: "Selling Unit",
//               type: "string",
//             }),
//             defineField({
//               name: "otherSellingUnit",
//               title: "Other Selling Unit (if any)",
//               type: "string",
//             }),
//             defineField({
//               name: "unitsPerSell",
//               title: "Units per Selling Unit",
//               type: "number",
//             }),
//             defineField({
//               name: "priceAtPurchase",
//               title: "Price at Purchase",
//               type: "number",
//             }),
//           ],
//           preview: {
//             select: {
//               product: "product.name",
//               quantity: "quantity",
//               image: "product.image",
//               priceAtPurchase: "priceAtPurchase",
//               sellingUnit: "sellingUnit",
//               otherSellingUnit: "otherSellingUnit",
//             },
//             prepare(select) {
//               const unitLabel = select.sellingUnit === "other" ? select.otherSellingUnit : select.sellingUnit;
//               const price = select.priceAtPurchase ?? 0;
//               return {
//                 title: `${select.product} x ${select.quantity}`,
//                 subtitle: `${price * select.quantity} / ${unitLabel || ""}`,
//                 media: select.image,
//               };
//             },
//           },
//         }),
//       ],
//     }),
//   ],
//   preview: {
//     select: {
//       name: "customerName",
//       amount: "totalPrice",
//       currency: "currency",
//       orderId: "orderNumber",
//       email: "email",
//       status: "status",
//     },
//     prepare(select) {
//       const orderIdSnippet = `#${select.orderId.slice(-8).toUpperCase()}`;
//       return {
//         title: `${select.name} (${orderIdSnippet})`,
//         subtitle: `${select.amount} ${select.currency} | Status: ${select.status}`,
//         media: BasketIcon,
//       };
//     },
//   },
// });



















import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  groups: [
    { name: "customer", title: "Customer Information" },
    { name: "payment", title: "Payment Details" },
    { name: "logistics", title: "Logistics & Delivery" },
    { name: "items", title: "Ordered Products" },
  ],
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      group: "payment",
      validation: (Rule) => Rule.required(),
    }),

    // --- CUSTOMER INFO ---
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      group: "customer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      group: "customer",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "customerPhone",
      title: "Customer Phone Number (WhatsApp)",
      type: "string",
      group: "customer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Store User ID",
      type: "string",
      group: "customer",
      validation: (Rule) => Rule.required(),
    }),

    // --- RAZORPAY PAYMENT DETAILS ---
    defineField({
      name: "razorpayOrderId",
      title: "Razorpay Order ID",
      type: "string",
      group: "payment",
    }),
    defineField({
      name: "razorpayPaymentId",
      title: "Razorpay Payment ID",
      type: "string",
      group: "payment",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "razorpaySignature",
      title: "Razorpay Signature",
      type: "string",
      group: "payment",
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      group: "payment",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      group: "payment",
      initialValue: "INR",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amountDiscount",
      title: "Amount Discount",
      type: "number",
      group: "payment",
      validation: (Rule) => Rule.required(),
    }),

    // --- LOGISTICS & LOCATION ---
    defineField({
      name: "deliveryLocation",
      title: "Delivery Location Details",
      type: "object",
      group: "logistics",
      fields: [
        { name: "fullAddress", type: "string", title: "Full Address" },
        { name: "landmark", type: "string", title: "Landmark (Nearest Temple/School/Road)" },
        { name: "city", type: "string", title: "City/Village" },
        { name: "district", type: "string", title: "District" },
        { name: "state", type: "string", title: "State" },
        { name: "pincode", type: "string", title: "PIN Code" },
        { name: "googleMapsLink", type: "url", title: "Google Maps Link (GPS)" },
      ],
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      group: "logistics",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Paid (Preparing Batch)", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Out for Delivery", value: "out_for_delivery" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      group: "payment",
      validation: (Rule) => Rule.required(),
    }),

    // --- PRODUCTS ---
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      group: "items",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product Bought",
              type: "reference",
              to: [{ type: "product" }],
            }),
            defineField({
              name: "quantity",
              title: "Quantity Purchased",
              type: "number",
            }),
            defineField({
              name: "sellingUnit",
              title: "Selling Unit",
              type: "string",
            }),
            defineField({
              name: "otherSellingUnit",
              title: "Other Selling Unit (if any)",
              type: "string",
            }),
            defineField({
              name: "unitsPerSell",
              title: "Units per Selling Unit",
              type: "number",
            }),
            defineField({
              name: "priceAtPurchase",
              title: "Price at Purchase",
              type: "number",
            }),
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.image",
              priceAtPurchase: "priceAtPurchase",
              sellingUnit: "sellingUnit",
              otherSellingUnit: "otherSellingUnit",
            },
            prepare(select) {
              const unitLabel = select.sellingUnit === "other" ? select.otherSellingUnit : select.sellingUnit;
              const price = select.priceAtPurchase ?? 0;
              return {
                title: `${select.product} x ${select.quantity}`,
                subtitle: `${price * select.quantity} / ${unitLabel || ""}`,
                media: select.image,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderId: "orderNumber",
      email: "email",
      status: "status",
    },
    prepare(select) {
      const orderIdSnippet = `#${select.orderId.slice(-8).toUpperCase()}`;
      return {
        title: `${select.name} (${orderIdSnippet})`,
        subtitle: `${select.amount} ${select.currency} | Status: ${select.status}`,
        media: BasketIcon,
      };
    },
  },
});