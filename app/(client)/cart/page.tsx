"use client";

import {
  createRazorpayOrder,
  verifyAndFulfillOrder,
  Metadata,
} from "@/actions/razorpayActions";
import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import NoAccess from "@/components/NoAccess";
import PriceFormatter from "@/components/PriceFormatter";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Address } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import useStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { Loader2, ShoppingBag, Trash, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useStore();
  const [loading, setLoading] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const groupedItems = useStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const query = `*[_type=="address"] | order(publishedAt desc)`;
        const data = await client.fetch(query);
        setAddresses(data);
        const defaultAddress = data.find((addr: Address) => addr.default);
        if (defaultAddress) {
          setSelectedAddress(defaultAddress);
        } else if (data.length > 0) {
          setSelectedAddress(data[0]);
        }
      } catch (error) {
        console.error("Addresses fetching error:", error);
        toast.error("Failed to load addresses");
      }
    };
    fetchAddresses();
  }, []);

  const handleResetCart = () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      resetCart();
      toast.success("Cart cleared");
    }
  };

  const handleCheckout = async () => {
    if (!isRazorpayLoaded) {
      toast.error("Payment SDK not loaded. Please refresh.");
      return;
    }
    if (!selectedAddress) {
      toast.error("Please select a delivery address.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Initializing secure checkout...");

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
        clerkUserId: user?.id,
        address: selectedAddress,
      };

      const orderId = await createRazorpayOrder(groupedItems, metadata);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Math.round(getTotalPrice() * 100),
        currency: "INR",

        // ✅ STYLING FOR AGRI HUB
        name: "Bajbalkar Ropvatika & Consultancy", // The main title in the popup
        description: `Order #${metadata.orderNumber.slice(0, 8).toUpperCase()}`,
        image: "https://your-logo-url.com/logo.png", // 🔴 REPLACE THIS WITH YOUR LOGO URL
        order_id: orderId,

        handler: async function (response: any) {
          toast.loading("Verifying payment...", { id: toastId });
          try {
            const result = await verifyAndFulfillOrder(
              response,
              groupedItems,
              metadata
            );
            if (result.success) {
              toast.success("Payment Successful!", { id: toastId });
              resetCart();
              router.push(
                `/success?session_id=${response.razorpay_payment_id}&orderNumber=${metadata.orderNumber}`
              );
            }
          } catch (err) {
            console.error("Verification Error:", err);
            toast.error("Payment verification failed.", { id: toastId });
          }
        },
        prefill: {
          name: metadata.customerName,
          email: metadata.customerEmail,
        },
        // ✅ AGRI HUB THEME COLOR
        theme: {
          color: "#166534", // A beautiful deep green (Tailwind green-800)
        },
        // Hiding extra payment methods
        config: {
          display: {
            blocks: {
              banks: {
                name: 'Pay via UPI, Cards or Netbanking',
                instruments: [
                  { method: 'upi' },
                  { method: 'card' },
                  { method: 'netbanking' },
                ],
              },
            },
            sequence: ['block.banks'],
            preferences: {
              show_default_blocks: false,
            },
          },
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

      rzp1.on('payment.failed', function () {
        setLoading(false);
        toast.dismiss(toastId);
        toast.error("Payment Failed");
      });

    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error("Failed to initialize checkout", { id: toastId });
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 pb-52 md:pb-10 min-h-screen">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setIsRazorpayLoaded(true)}
      />

      {isSignedIn ? (
        <Container>
          {groupedItems?.length ? (
            <>
              <div className="flex items-center gap-3 py-8">
                <ShoppingBag className="w-8 h-8 text-primary" />
                <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Product List */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {groupedItems?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="border-b last:border-b-0 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                        >
                          <div className="flex flex-1 items-start gap-4 w-full">
                            {product?.images && (
                              <Link
                                href={`/product/${product?.slug?.current}`}
                                className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200"
                              >
                                <Image
                                unoptimized
                                  src={urlFor(product?.images[0]).url()}
                                  alt="productImage"
                                  fill
                                  className="object-cover"
                                />
                              </Link>
                            )}
                            <div className="flex-1 space-y-2">
                              <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                                {product?.name}
                              </h2>
                              <p className="text-sm text-gray-500">
                                Variant: <span className="font-medium text-gray-900">{product?.productVariant}</span>
                                <br />
                                <span className="text-xs text-gray-500">Unit: <span className="font-medium text-gray-900">{(product?.sellingUnit === "other" ? product?.otherSellingUnit : product?.sellingUnit) || product?.unit}{product?.unitsPerSell ? ` (${product.unitsPerSell} per)` : ''}</span></span>
                              </p>

                              <div className="pt-2 flex items-center gap-4">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button
                                        onClick={() => {
                                          deleteCartProduct(product?._id);
                                          toast.success("Removed from cart");
                                        }}
                                        className="text-gray-400 hover:text-red-600 transition-colors flex items-center gap-1 text-sm font-medium"
                                      >
                                        <Trash className="w-4 h-4" /> Remove
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-red-600 text-white border-0">
                                      Remove Item
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4">
                            <div className="flex items-baseline gap-2">
                              <PriceFormatter
                                amount={(product?.price as number) * itemCount}
                                className="font-bold text-xl text-gray-900"
                              />
                              <span className="text-sm text-gray-500">/ {(product?.sellingUnit === "other" ? product?.otherSellingUnit : product?.sellingUnit) || product?.unit}</span>
                            </div>
                            <QuantityButtons product={product} />
                          </div>
                        </div>
                      );
                    })}

                    <div className="p-4 bg-gray-50 border-t flex justify-end">
                      <Button
                        onClick={handleResetCart}
                        variant="ghost"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-gray-600">
                          <span>Subtotal</span>
                          <PriceFormatter amount={getSubTotalPrice()} />
                        </div>
                        <div className="flex items-center justify-between text-green-600">
                          <span>Discount</span>
                          <PriceFormatter
                            amount={getSubTotalPrice() - getTotalPrice()}
                            className="text-green-600 font-medium"
                          />
                        </div>
                        <Separator className="my-2" />
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-gray-900">Total</span>
                          <PriceFormatter
                            amount={getTotalPrice()}
                            className="text-xl font-bold text-black"
                          />
                        </div>

                        <Button
                          className="w-full h-12 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all mt-4"
                          size="lg"
                          disabled={loading || !selectedAddress || !isRazorpayLoaded}
                          onClick={handleCheckout}
                          style={{ backgroundColor: '#166534' }} // Matching the Pay Button to Agri Theme
                        >
                          {loading ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-5 w-5 animate-spin" />
                              Processing...
                            </div>
                          ) : (
                            "Secure Checkout"
                          )}
                        </Button>

                        <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          SSL Encrypted Transaction
                        </p>
                      </div>
                    </div>

                    {/* Address Selection */}
                    {addresses && (
                      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-4 border-b bg-gray-50">
                          <h3 className="font-semibold flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Delivery Address
                          </h3>
                        </div>
                        <div className="p-4">
                          <RadioGroup
                            value={selectedAddress?._id.toString()}
                            onValueChange={(value) => {
                              const addr = addresses.find(a => a._id.toString() === value);
                              if (addr) setSelectedAddress(addr);
                            }}
                            className="space-y-3"
                          >
                            {addresses?.map((address) => (
                              <div
                                key={address?._id}
                                onClick={() => setSelectedAddress(address)}
                                className={`
                                    relative flex items-start space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all
                                    ${selectedAddress?._id === address?._id
                                    ? "border-green-800 bg-green-50" // Highlighting Address with Green
                                    : "hover:bg-gray-50 border-gray-100"}
                                  `}
                              >
                                <RadioGroupItem
                                  value={address?._id.toString()}
                                  className="mt-1"
                                  id={`addr-${address._id}`}
                                />
                                <div className="flex-1">
                                  <Label
                                    htmlFor={`addr-${address._id}`}
                                    className="font-semibold text-gray-900 cursor-pointer block"
                                  >
                                    {address?.name}
                                  </Label>
                                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                    {address.address}, {address.city}, {address.state} - {address.pinCode}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </RadioGroup>
                          <Button variant="outline" className="w-full mt-4 border-dashed border-2">
                            + Add New Address
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccess />
      )}
    </div>
  );
};

export default CartPage;