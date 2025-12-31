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



















// "use client";

// import useStore from "@/store";
// import { useSearchParams } from "next/navigation";
// import { Suspense, useEffect } from "react";
// import { motion } from "motion/react";
// import { Check, Home, Package, ShoppingBag, MessageCircle, FileText } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const SuccessPageContent = () => {
//   const { resetCart } = useStore();
//   const searchParams = useSearchParams();
//   const orderNumber = searchParams.get("orderNumber");

//   useEffect(() => {
//     if (orderNumber) {
//       resetCart();
//     }
//   }, [orderNumber, resetCart]);

//   const handleNotifyOwner = () => {
//     const ownerPhone = "917875747159"; // Registered owner number
//     const message = encodeURIComponent(
//       `*New Order Confirmed!* 🌾\n\n` +
//       `*Order ID:* #${orderNumber?.slice(0,8)}\n` +
//       `*Status:* Payment Successful\n\n` +
//       `Please check the Bajbalkar Ropvatika dashboard for details.`
//     );
//     window.open(`https://wa.me/${ownerPhone}?text=${message}`, "_blank");
//   };

//   return (
//     <div className="py-12 bg-gray-50 flex items-center justify-center px-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-[2.5rem] flex flex-col gap-8 shadow-2xl p-10 max-w-2xl w-full text-center border-t-8 border-green-700"
//       >
//         <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
//           <Check className="text-green-700 w-12 h-12" strokeWidth={3} />
//         </div>

//         <div className="space-y-2">
//             <h1 className="text-4xl font-black text-gray-900 tracking-tighter">ORDER CONFIRMED!</h1>
//             <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Order ID: {orderNumber}</p>
//         </div>

//         <p className="text-gray-600 text-lg leading-relaxed">
//           Thank you for choosing **Bajbalkar Ropvatika**. Your payment was secure and processed successfully. We are now preparing your quality batch for shipment.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <Button 
//                 variant="outline" 
//                 className="h-14 rounded-2xl border-2 font-bold text-base"
//                 onClick={() => window.print()}
//             >
//                 <FileText className="w-5 h-5 mr-2 text-blue-600" /> Print Receipt
//             </Button>
//             <Button 
//                 className="h-14 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-base"
//                 onClick={handleNotifyOwner}
//             >
//                 <MessageCircle className="w-5 h-5 mr-2" /> Notify Owner on WhatsApp
//             </Button>
//         </div>

//         <div className="grid grid-cols-3 gap-4 pt-6 border-t">
//           <Link href="/" className="flex flex-col items-center gap-1 group">
//             <div className="p-3 bg-gray-100 rounded-full group-hover:bg-green-100 transition-colors">
//                 <Home className="w-5 h-5 text-gray-600 group-hover:text-green-700" />
//             </div>
//             <span className="text-[10px] font-bold uppercase">Home</span>
//           </Link>
//           <Link href="/orders" className="flex flex-col items-center gap-1 group">
//             <div className="p-3 bg-gray-100 rounded-full group-hover:bg-blue-100 transition-colors">
//                 <Package className="w-5 h-5 text-gray-600 group-hover:text-blue-700" />
//             </div>
//             <span className="text-[10px] font-bold uppercase">My Orders</span>
//           </Link>
//           <Link href="/shop" className="flex flex-col items-center gap-1 group">
//             <div className="p-3 bg-gray-100 rounded-full group-hover:bg-orange-100 transition-colors">
//                 <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-orange-700" />
//             </div>
//             <span className="text-[10px] font-bold uppercase">Shop</span>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default function SuccessPage() {
//   return (
//     <Suspense fallback={<div className="h-screen flex items-center justify-center font-black">VALIDATING PAYMENT...</div>}>
//       <SuccessPageContent />
//     </Suspense>
//   );
// }

















// "use client";

// import useStore from "@/store";
// import { useSearchParams } from "next/navigation";
// import { Suspense, useEffect, useState } from "react";
// import { motion } from "motion/react";
// import { Check, Home, Package, ShoppingBag, MessageCircle, Printer, Loader2 } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import PriceFormatter from "@/components/PriceFormatter";

// const SuccessPageContent = () => {
//   const { resetCart } = useStore();
//   const searchParams = useSearchParams();
//   const orderNumber = searchParams.get("orderNumber");
  
//   const [orderData, setOrderData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       if (!orderNumber) return;
//       try {
//         // Fetch full details including the deliveryLocation and customer info
//         const query = `*[_type == "order" && orderNumber == $orderNumber][0]{
//           ...,
//           products[]{
//             ...,
//             product->{ name, plantBreedData->{ breedName } }
//           }
//         }`;
//         const data = await client.fetch(query, { orderNumber });
//         setOrderData(data);
//         if (data) resetCart();
//       } catch (err) {
//         console.error("Error fetching order:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrder();
//   }, [orderNumber, resetCart]);

//   const handleNotifyOwner = () => {
//     if (!orderData) return;
//     const ownerPhone = "919765797782"; 
    
//     const productSummary = orderData.products.map(
//       (p: any) => `• ${p.product?.name} [${p.product?.plantBreedData?.breedName || 'Standard'}] (x${p.quantity})`
//     ).join('\n');

//     const message = encodeURIComponent(
//       `*NEW BRC ORDER CONFIRMED!* 🌾\n` +
//       `---------------------------\n` +
//       `*Customer:* ${orderData.customerName}\n` +
//       `*Phone:* ${orderData.customerPhone}\n` +
//       `*Location:* ${orderData.deliveryLocation?.city}, ${orderData.deliveryLocation?.district}\n` +
//       `*Landmark:* ${orderData.deliveryLocation?.landmark}\n` +
//       `*Google Map:* ${orderData.deliveryLocation?.googleMapsLink || 'Not Provided'}\n` +
//       `---------------------------\n` +
//       `*Order ID:* #${orderData.orderNumber.slice(-8).toUpperCase()}\n` +
//       `*Total:* ₹${orderData.totalPrice}\n\n` +
//       `*Products:* \n${productSummary}`
//     );
//     window.open(`https://wa.me/${ownerPhone}?text=${message}`, "_blank");
//   };

//   if (loading) return (
//     <div className="h-screen flex flex-col items-center justify-center gap-4">
//       <Loader2 className="animate-spin text-green-700" size={40} />
//       <p className="font-black uppercase tracking-widest text-gray-500">Validating Order Details...</p>
//     </div>
//   );

//   return (
//     <div className="py-12 bg-gray-50 min-h-screen flex flex-col items-center px-4">
//       {/* 1. SUCCESS CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 max-w-3xl w-full text-center border-t-8 border-green-700 print:hidden"
//       >
//         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//           <Check className="text-green-700 w-10 h-10" strokeWidth={3} />
//         </div>
//         <h1 className="text-3xl font-black text-gray-900 tracking-tighter mb-2">THANK YOU, {orderData?.customerName?.toUpperCase()}!</h1>
//         <p className="text-gray-500 font-bold text-sm mb-8">Your order has been saved and shared with our nursery team.</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//           <Button 
//             variant="outline" 
//             className="h-16 rounded-2xl border-2 font-black uppercase tracking-widest text-blue-600 border-blue-100 hover:bg-blue-50"
//             onClick={() => window.print()}
//           >
//             <Printer className="w-5 h-5 mr-2" /> Print Receipt
//           </Button>
//           <Button 
//             className="h-16 rounded-2xl bg-green-700 hover:bg-green-800 text-white font-black uppercase tracking-widest"
//             onClick={handleNotifyOwner}
//           >
//             <MessageCircle className="w-5 h-5 mr-2" /> Share on WhatsApp
//           </Button>
//         </div>

//         <div className="flex justify-center gap-8 pt-6 border-t">
//           <Link href="/" className="text-xs font-black text-gray-400 hover:text-green-700 uppercase tracking-widest transition-colors">Home</Link>
//           <Link href="/orders" className="text-xs font-black text-gray-400 hover:text-green-700 uppercase tracking-widest transition-colors">My Orders</Link>
//         </div>
//       </motion.div>

//       {/* 2. OFFICIAL RECEIPT (Hidden on Screen, Visible on Print) */}
//       <div className="hidden print:block w-full max-w-4xl p-10 bg-white text-black font-sans">
//         <div className="flex justify-between items-start border-b-4 border-green-700 pb-6 mb-8">
//           <div>
//             <h1 className="text-3xl font-black text-green-800">BAJBALKAR ROPVATIKA & Consultancy</h1>
//             <p className="font-bold">Hi-Tech Nursery & Consultancy</p>
//             <p className="text-sm">Chikmahud, Sangola, Solapur, Maharashtra</p>
//             <p className="text-sm font-bold mt-1">📞 +91 9673747158 | +91 9765797782</p>
//           </div>
//           <div className="text-right">
//             <h2 className="text-xl font-bold uppercase tracking-widest">Official Receipt</h2>
//             <p className="text-sm font-mono mt-1">ID: #{orderData?.orderNumber?.slice(-12).toUpperCase()}</p>
//             <p className="text-sm">Date: {new Date(orderData?.orderDate).toLocaleDateString()}</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-10 mb-10 text-sm">
//           <div>
//             <h3 className="font-black uppercase border-b mb-2">Customer Details</h3>
//             <p className="font-bold text-lg">{orderData?.customerName}</p>
//             <p>{orderData?.email}</p>
//             <p>Phone: {orderData?.customerPhone}</p>
//           </div>
//           <div>
//             <h3 className="font-black uppercase border-b mb-2">Delivery Location</h3>
//             <p className="leading-relaxed">
//               {orderData?.deliveryLocation?.fullAddress}<br/>
//               Landmark: {orderData?.deliveryLocation?.landmark}<br/>
//               {orderData?.deliveryLocation?.city}, {orderData?.deliveryLocation?.district}<br/>
//               {orderData?.deliveryLocation?.state} - {orderData?.deliveryLocation?.pincode}
//             </p>
//           </div>
//         </div>

//         <table className="w-full text-sm mb-10">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-3 border">Product Name</th>
//               <th className="p-3 border">Quantity</th>
//               <th className="p-3 border">Unit Price</th>
//               <th className="p-3 border">Subtotal</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderData?.products.map((p: any, i: number) => (
//               <tr key={i}>
//                 <td className="p-3 border font-bold">{p.product?.name}</td>
//                 <td className="p-3 border">{p.quantity}</td>
//                 <td className="p-3 border">₹{p.priceAtPurchase}</td>
//                 <td className="p-3 border font-bold text-right">₹{p.priceAtPurchase * p.quantity}</td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//              <tr className="text-right">
//                 <td colSpan={3} className="p-3 font-bold">Discount:</td>
//                 <td className="p-3 border font-bold text-red-600">- ₹{orderData?.amountDiscount}</td>
//              </tr>
//              <tr className="text-right text-lg font-black bg-green-50">
//                 <td colSpan={3} className="p-3">TOTAL PAID:</td>
//                 <td className="p-3 border border-green-700 text-green-800">₹{orderData?.totalPrice}</td>
//              </tr>
//           </tfoot>
//         </table>

//         <div className="mt-20 text-center border-t pt-6">
//           <p className="text-xs text-gray-400">This is a computer-generated receipt. No signature required.</p>
//           <p className="text-sm font-bold text-green-800 mt-2 italic">Result-Oriented High-Tech Agricultural Technology</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function SuccessPage() {
//   return (
//     <Suspense fallback={null}>
//       <SuccessPageContent />
//     </Suspense>
//   );
// }




















"use client";

import useStore from "@/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Check, Home, Package, ShoppingBag, MessageCircle, Printer, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PriceFormatter from "@/components/PriceFormatter";

const SuccessPageContent = () => {
  const { resetCart } = useStore();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderNumber) return;
      try {
        const query = `*[_type == "order" && orderNumber == $orderNumber][0]{
          ...,
          products[]{
            ...,
            product->{ name, plantBreedData->{ breedName } }
          }
        }`;
        const data = await client.fetch(query, { orderNumber });
        setOrderData(data);
        if (data) resetCart();
      } catch (err) {
        console.error("Error fetching order:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderNumber, resetCart]);

  const handleNotifyOwner = () => {
    if (!orderData) return;
    const ownerPhone = "919765797782"; 
    
    const productSummary = orderData.products.map(
      (p: any) => `• ${p.product?.name} (x${p.quantity})`
    ).join('\n');

    const message = encodeURIComponent(
      `*NEW BRC ORDER CONFIRMED!* 🌾\n` +
      `---------------------------\n` +
      `*Customer:* ${orderData.customerName}\n` +
      `*Phone:* ${orderData.customerPhone}\n` +
      `*Location:* ${orderData.deliveryLocation?.city}, ${orderData.deliveryLocation?.district}\n` +
      `*Landmark:* ${orderData.deliveryLocation?.landmark || "Not Specified"}\n` +
      `*Google Map:* ${orderData.deliveryLocation?.googleMapsLink || "Check Admin"}\n` +
      `---------------------------\n` +
      `*Order ID:* #${orderData.orderNumber.slice(-8).toUpperCase()}\n` +
      `*Total:* ₹${orderData.totalPrice}\n\n` +
      `*Products:* \n${productSummary}`
    );
    window.open(`https://wa.me/${ownerPhone}?text=${message}`, "_blank");
  };

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <Loader2 className="animate-spin text-green-700" size={40} />
      <p className="font-black uppercase tracking-widest text-gray-500">Generating Official Receipt...</p>
    </div>
  );

  return (
    <div className="py-12 bg-gray-50 min-h-screen flex flex-col items-center px-4">
      {/* WEB VIEW CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 max-w-3xl w-full text-center border-t-8 border-green-700 print:hidden"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="text-green-700 w-10 h-10" strokeWidth={3} />
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter mb-2 uppercase">Order Verified!</h1>
        <p className="text-gray-600 mb-8 font-medium">Namaskar {orderData?.customerName}, your seedlings are reserved.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Button variant="outline" className="h-16 rounded-2xl border-2 font-black text-blue-600 border-blue-100 hover:bg-blue-50" onClick={() => window.print()}>
            <Printer className="w-5 h-5 mr-2" /> Print Official Receipt
          </Button>
          <Button className="h-16 rounded-2xl bg-green-700 hover:bg-green-800 text-white font-black" onClick={handleNotifyOwner}>
            <MessageCircle className="w-5 h-5 mr-2" /> Share with Owner
          </Button>
        </div>

        <div className="flex justify-center gap-8 pt-6 border-t font-bold text-xs uppercase text-gray-400">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <Link href="/orders" className="hover:text-green-700">Track Orders</Link>
        </div>
      </motion.div>

      {/* OFFICIAL PRINT RECEIPT (Hidden on Screen) */}
      <div className="hidden print:block w-full max-w-5xl p-12 bg-white text-black font-sans">
        <div className="flex justify-between items-start border-b-8 border-green-800 pb-8 mb-10">
          <div>
            <h1 className="text-4xl font-black text-green-900">BAJBALKAR ROPVATIKA</h1>
            <p className="font-black uppercase text-xs">Hi-Tech Nursery & Agricultural Consultancy</p>
            <p className="text-sm mt-2">Chikmahud, Sangola, Solapur, Maharashtra</p>
            <p className="text-sm font-black">📞 +91 9673747158 | +91 9765797782</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-black uppercase">Order Receipt</h2>
            <p className="text-sm font-mono mt-1">ID: #{orderData?.orderNumber?.slice(-12).toUpperCase()}</p>
            <p className="text-sm">Date: {new Date(orderData?.orderDate).toLocaleString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 mb-12">
          <div>
            <h3 className="font-black uppercase border-b-2 mb-4 text-xs">Farmer Details</h3>
            <p className="font-black text-xl">{orderData?.customerName}</p>
            <p className="font-bold text-green-700">{orderData?.customerPhone}</p>
            <p>{orderData?.email}</p>
          </div>
          <div>
            <h3 className="font-black uppercase border-b-2 mb-4 text-xs">Dispatch Location</h3>
            <p className="font-medium leading-relaxed">
              {orderData?.deliveryLocation?.fullAddress}<br/>
              Landmark: <span className="font-black">{orderData?.deliveryLocation?.landmark}</span><br/>
              {orderData?.deliveryLocation?.city}, {orderData?.deliveryLocation?.district}<br/>
              {orderData?.deliveryLocation?.state} - {orderData?.deliveryLocation?.pincode}
            </p>
          </div>
        </div>

        <table className="w-full text-left border-collapse mb-12">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border font-black text-xs uppercase">Item Variety</th>
              <th className="p-4 border font-black text-xs uppercase">Quantity</th>
              <th className="p-4 border font-black text-xs uppercase text-right">Rate</th>
              <th className="p-4 border font-black text-xs uppercase text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {orderData?.products.map((p: any, i: number) => (
              <tr key={i}>
                <td className="p-4 border font-bold">{p.product?.name}</td>
                <td className="p-4 border font-black">{p.quantity}</td>
                <td className="p-4 border text-right">₹{p.priceAtPurchase}</td>
                <td className="p-4 border font-black text-right">₹{p.priceAtPurchase * p.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
             <tr className="text-right">
                <td colSpan={3} className="p-4 font-bold border">Discount Applied:</td>
                <td className="p-4 border font-black text-red-600">- ₹{orderData?.amountDiscount}</td>
             </tr>
             <tr className="text-right text-2xl font-black bg-green-50">
                <td colSpan={3} className="p-4 border">TOTAL INVESTMENT:</td>
                <td className="p-4 border border-green-800 text-green-900">₹{orderData?.totalPrice}</td>
             </tr>
          </tfoot>
        </table>
        <p className="text-[10px] text-center text-gray-400 mt-20 uppercase font-black tracking-widest border-t pt-8">
            Result-Oriented Agriculture Technology | computer generated receipt
        </p>
      </div>
    </div>
  );
};

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessPageContent />
    </Suspense>
  );
}