// "use client";

// import useStore from "@/store";
// import { useSearchParams } from "next/navigation";
// import { Suspense, useEffect } from "react";
// import { motion } from "motion/react";
// import { Check, Home, Package, ShoppingBag } from "lucide-react";
// import Link from "next/link";

// const SuccessPageContent = () => {
//   const { resetCart } = useStore();
//   const searchParams = useSearchParams();
//   const orderNumber = searchParams.get("orderNumber");

//   useEffect(() => {
//     if (orderNumber) {
//       resetCart();
//     }
//   }, [orderNumber, resetCart]);
//   return (
//     <div className="py-5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mx-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white rounded-2xl flex flex-col gap-8 shadow-2xl p-6 max-w-xl w-full text-center"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//           className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
//         >
//           <Check className="text-white w-10 h-10" />
//         </motion.div>

//         <h1 className="text-3xl font-bold text-gray-900 mb-4">
//           Order Confirmed!
//         </h1>
//         <div className="space-y-4 mb-4 text-left">
//           <p className="text-gray-700">
//             Thank you for your purchase. We&apos;re processing your order and
//             will ship it soon. A confirmation email with your order details will
//             be sent to your inbox shortly.
//           </p>
//           <p className="text-gray-700">
//             Order Number:{" "}
//             <span className="text-black font-semibold">{orderNumber}</span>
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <Link
//             href="/"
//             className="flex items-center justify-center px-4 py-3 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
//           >
//             <Home className="w-5 h-5 mr-2" />
//             Home
//           </Link>
//           <Link
//             href="/orders"
//             className="flex items-center justify-center px-4 py-3 font-semibold bg-lightGreen text-black border border-lightGreen rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
//           >
//             <Package className="w-5 h-5 mr-2" />
//             Orders
//           </Link>
//           <Link
//             href="/"
//             className="flex items-center justify-center px-4 py-3 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
//           >
//             <ShoppingBag className="w-5 h-5 mr-2" />
//             Shop
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const SuccessPage = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <SuccessPageContent />
//     </Suspense>
//   );
// };

// export default SuccessPage;



















"use client";

import useStore from "@/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { motion } from "motion/react";
import { Check, Home, Package, ShoppingBag, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SuccessPageContent = () => {
  const { resetCart } = useStore();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  useEffect(() => {
    if (orderNumber) {
      resetCart();
    }
  }, [orderNumber, resetCart]);

  const handleNotifyOwner = () => {
    const ownerPhone = "917875747159"; // Registered owner number
    const message = encodeURIComponent(
      `*New Order Confirmed!* 🌾\n\n` +
      `*Order ID:* #${orderNumber?.slice(0,8)}\n` +
      `*Status:* Payment Successful\n\n` +
      `Please check the Bajbalkar Ropvatika dashboard for details.`
    );
    window.open(`https://wa.me/${ownerPhone}?text=${message}`, "_blank");
  };

  return (
    <div className="py-12 bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] flex flex-col gap-8 shadow-2xl p-10 max-w-2xl w-full text-center border-t-8 border-green-700"
      >
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <Check className="text-green-700 w-12 h-12" strokeWidth={3} />
        </div>

        <div className="space-y-2">
            <h1 className="text-4xl font-black text-gray-900 tracking-tighter">ORDER CONFIRMED!</h1>
            <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Order ID: {orderNumber}</p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          Thank you for choosing **Bajbalkar Ropvatika**. Your payment was secure and processed successfully. We are now preparing your quality batch for shipment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button 
                variant="outline" 
                className="h-14 rounded-2xl border-2 font-bold text-base"
                onClick={() => window.print()}
            >
                <FileText className="w-5 h-5 mr-2 text-blue-600" /> Print Receipt
            </Button>
            <Button 
                className="h-14 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-base"
                onClick={handleNotifyOwner}
            >
                <MessageCircle className="w-5 h-5 mr-2" /> Notify Owner on WhatsApp
            </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t">
          <Link href="/" className="flex flex-col items-center gap-1 group">
            <div className="p-3 bg-gray-100 rounded-full group-hover:bg-green-100 transition-colors">
                <Home className="w-5 h-5 text-gray-600 group-hover:text-green-700" />
            </div>
            <span className="text-[10px] font-bold uppercase">Home</span>
          </Link>
          <Link href="/orders" className="flex flex-col items-center gap-1 group">
            <div className="p-3 bg-gray-100 rounded-full group-hover:bg-blue-100 transition-colors">
                <Package className="w-5 h-5 text-gray-600 group-hover:text-blue-700" />
            </div>
            <span className="text-[10px] font-bold uppercase">My Orders</span>
          </Link>
          <Link href="/shop" className="flex flex-col items-center gap-1 group">
            <div className="p-3 bg-gray-100 rounded-full group-hover:bg-orange-100 transition-colors">
                <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-orange-700" />
            </div>
            <span className="text-[10px] font-bold uppercase">Shop</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center font-black">VALIDATING PAYMENT...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
}