// import { MY_ORDERS_QUERYResult } from "@/sanity.types";
// import React from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./ui/table";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import PriceFormatter from "./PriceFormatter";

// interface OrderDetailsDialogProps {
//   order: MY_ORDERS_QUERYResult[number] | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({
//   order,
//   isOpen,
//   onClose,
// }) => {
//   if (!order) return null;
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-scroll">
//         <DialogHeader>
//           <DialogTitle>Order Details - {order?.orderNumber}</DialogTitle>
//         </DialogHeader>
//         <div className="mt-4">
//           <p>
//             <strong>Customer:</strong> {order.customerName}
//           </p>
//           <p>
//             <strong>Email:</strong> {order.email}
//           </p>
//           <p>
//             <strong>Date:</strong>{" "}
//             {order.orderDate && new Date(order.orderDate).toLocaleDateString()}
//           </p>
//           <p>
//             <strong>Status:</strong>{" "}
//             <span className="capitalize text-green-600 font-medium">
//               {order.status}
//             </span>
//           </p>
//           <p>
//             <strong>Invoice Number:</strong> {order?.invoice?.number}
//           </p>
//           {order?.invoice && (
//             <Button className="bg-transparent border text-darkColor/80 mt-2 hover:text-darkColor hover:border-darkColor hover:bg-darkColor/10 hoverEffect ">
//               {order?.invoice?.hosted_invoice_url && (
//                 <Link href={order?.invoice?.hosted_invoice_url} target="_blank">
//                   Download Invoice
//                 </Link>
//               )}
//             </Button>
//           )}
//         </div>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Product</TableHead>
//               <TableHead>Quantity</TableHead>
//               <TableHead>Price</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {order.products?.map((product, index) => (
//               <TableRow key={index}>
//                 <TableCell className="flex items-center gap-2">
//                   {product?.product?.images && (
//                     <Image
//                       src={urlFor(product?.product?.images[0]).url()}
//                       alt="productImage"
//                       width={50}
//                       height={50}
//                       className="border rounded-sm"
//                     />
//                   )}

//                   {product?.product && product?.product?.name}
//                 </TableCell>
//                 <TableCell>{product?.quantity}</TableCell>
//                 <TableCell>
//                   <PriceFormatter
//                     amount={product?.product?.price}
//                     className="text-black font-medium"
//                   />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <div className="mt-4 text-right flex items-center justify-end">
//           <div className="w-44 flex flex-col gap-1">
//             {order?.amountDiscount !== 0 && (
//               <div className="w-full flex items-center justify-between">
//                 <strong>Discount: </strong>
//                 <PriceFormatter
//                   amount={order?.amountDiscount}
//                   className="text-black font-bold"
//                 />
//               </div>
//             )}
//             {order?.amountDiscount !== 0 && (
//               <div className="w-full flex items-center justify-between">
//                 <strong>Subtotal: </strong>
//                 <PriceFormatter
//                   amount={
//                     (order?.totalPrice as number) +
//                     (order?.amountDiscount as number)
//                   }
//                   className="text-black font-bold"
//                 />
//               </div>
//             )}
//             <div className="w-full flex items-center justify-between">
//               <strong>Total: </strong>
//               <PriceFormatter
//                 amount={order?.totalPrice}
//                 className="text-black font-bold"
//               />
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default OrderDetailDialog;













// import { MY_ORDERS_QUERYResult } from "@/sanity.types";
// import React from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./ui/table";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import PriceFormatter from "./PriceFormatter";
// import { FileText } from "lucide-react";

// interface OrderDetailsDialogProps {
//   order: any | null; // Changed to any to handle expanded invoice fields
//   isOpen: boolean;
//   onClose: () => void;
// }

// const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({
//   order,
//   isOpen,
//   onClose,
// }) => {
//   if (!order) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-scroll bg-white">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-black">Order Details - {order?.orderNumber}</DialogTitle>
//         </DialogHeader>
//         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-xl">
//           <div>
//             <p><strong>Customer:</strong> {order.customerName}</p>
//             <p><strong>Email:</strong> {order.email}</p>
//           </div>
//           <div>
//             <p><strong>Date:</strong> {order.orderDate && new Date(order.orderDate).toLocaleDateString()}</p>
//             <p><strong>Status:</strong> <span className="capitalize text-green-600 font-bold">{order.status}</span></p>
//           </div>
//           {order?.invoice && (
//             <div className="col-span-full pt-2 border-t">
//                <p><strong>Invoice:</strong> {order.invoice.number}</p>
//                <Button className="bg-green-700 text-white mt-2 hover:bg-green-800" asChild>
//                   <Link href={order.invoice.hosted_invoice_url} target="_blank">
//                     <FileText className="w-4 h-4 mr-2" /> Download Invoice
//                   </Link>
//                </Button>
//             </div>
//           )}
//         </div>

//         <Table className="mt-6">
//           <TableHeader>
//             <TableRow>
//               <TableHead className="font-bold">Product</TableHead>
//               <TableHead className="font-bold">Quantity</TableHead>
//               <TableHead className="font-bold">Price</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {order.products?.map((item: any, index: number) => (
//               <TableRow key={index}>
//                 <TableCell className="flex items-center gap-3">
//                   {item?.product?.images && (
//                     <Image
//                       src={urlFor(item.product.images[0]).url()}
//                       alt="product"
//                       width={50}
//                       height={50}
//                       className="rounded-md border object-contain"
//                     />
//                   )}
//                   <span className="font-medium">{item?.product?.name}</span>
//                 </TableCell>
//                 <TableCell className="font-bold text-gray-600">{item?.quantity}</TableCell>
//                 <TableCell>
//                   <PriceFormatter amount={item?.product?.price} className="font-bold text-black" />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         <div className="mt-6 border-t pt-4 flex flex-col items-end gap-2">
//             <div className="flex justify-between w-48 text-sm">
//                 <span>Subtotal:</span>
//                 <PriceFormatter amount={(order.totalPrice || 0) + (order.amountDiscount || 0)} />
//             </div>
//             {order.amountDiscount > 0 && (
//                 <div className="flex justify-between w-48 text-sm text-green-600 font-bold">
//                     <span>Discount:</span>
//                     <span>- <PriceFormatter amount={order.amountDiscount} /></span>
//                 </div>
//             )}
//             <div className="flex justify-between w-48 text-lg font-black border-t pt-2">
//                 <span>Total:</span>
//                 <PriceFormatter amount={order.totalPrice} className="text-green-700" />
//             </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default OrderDetailDialog;

























// "use client";

// import { MY_ORDERS_QUERYResult } from "@/sanity.types";
// import React from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./ui/table";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import PriceFormatter from "./PriceFormatter";
// import { FileText, MapPin, Phone, Printer, Info } from "lucide-react";

// interface OrderDetailsDialogProps {
//   order: any | null; 
//   isOpen: boolean;
//   onClose: () => void;
// }

// const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({
//   order,
//   isOpen,
//   onClose,
// }) => {
//   if (!order) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-scroll bg-white rounded-3xl">
//         <DialogHeader className="border-b pb-4">
//           <DialogTitle className="text-2xl font-black flex items-center justify-between">
//             <span>Order Details</span>
//             <span className="text-sm font-mono text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
//               #{order?.orderNumber?.slice(-8).toUpperCase()}
//             </span>
//           </DialogTitle>
//         </DialogHeader>

//         {/* 1. CUSTOMER & DELIVERY INFO SECTION */}
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-green-50/50 p-5 rounded-2xl border border-green-100 space-y-3">
//             <h4 className="text-xs font-black uppercase text-green-800 tracking-widest flex items-center gap-2">
//               <Info size={14} /> Customer Details
//             </h4>
//             <div className="space-y-1">
//               <p className="font-black text-lg text-gray-900">{order.customerName}</p>
//               <p className="text-gray-600 flex items-center gap-2">
//                 <Phone size={14} className="text-green-600" /> {order.customerPhone || "Not Provided"}
//               </p>
//               <p className="text-gray-500 text-xs">{order.email}</p>
//             </div>
//           </div>

//           <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 space-y-3">
//             <h4 className="text-xs font-black uppercase text-blue-800 tracking-widest flex items-center gap-2">
//               <MapPin size={14} /> Dispatch Location
//             </h4>
//             <div className="text-sm space-y-1 text-gray-700">
//               <p className="font-bold leading-tight">{order.deliveryLocation?.fullAddress}</p>
//               <p className="text-xs">
//                 <span className="font-black text-blue-900">Landmark:</span> {order.deliveryLocation?.landmark || "Near City Center"}
//               </p>
//               <p className="text-xs uppercase font-medium">
//                 {order.deliveryLocation?.city}, {order.deliveryLocation?.district}, {order.deliveryLocation?.state}
//               </p>
              
//               {order.deliveryLocation?.googleMapsLink && (
//                 <Link 
//                   href={order.deliveryLocation.googleMapsLink} 
//                   target="_blank"
//                   className="inline-flex items-center gap-1 text-[10px] font-black text-blue-600 hover:underline mt-2 bg-white px-2 py-1 rounded-md border border-blue-200"
//                 >
//                   📍 OPEN GPS LOCATION
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* 2. ORDER META INFO */}
//         <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-tighter text-gray-500">
//             <p>Date: <span className="text-black">{order.orderDate && new Date(order.orderDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span></p>
//             <p>Payment: <span className="text-green-600">Razorpay Approved</span></p>
//             <p>Status: <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">{order.status}</span></p>
//         </div>

//         {/* 3. PRODUCT TABLE */}
//         <div className="mt-6 border rounded-2xl overflow-hidden">
//             <Table>
//               <TableHeader className="bg-gray-50">
//                 <TableRow>
//                   <TableHead className="font-black uppercase text-[10px]">Variety</TableHead>
//                   <TableHead className="font-black uppercase text-[10px]">Qty</TableHead>
//                   <TableHead className="font-black uppercase text-[10px] text-right">Amount</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {order.products?.map((item: any, index: number) => (
//                   <TableRow key={index} className="hover:bg-transparent">
//                     <TableCell className="flex items-center gap-3">
//                       {item?.product?.images && (
//                         <Image
//                           src={urlFor(item.product.images[0]).url()}
//                           alt="product"
//                           width={40}
//                           height={40}
//                           className="rounded-lg border object-cover aspect-square"
//                         />
//                       )}
//                       <div>
//                         <p className="font-black text-sm text-gray-900 leading-none">{item?.product?.name}</p>
//                         <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold">Batch Verified</p>
//                       </div>
//                     </TableCell>
//                     <TableCell className="font-black text-gray-600">{item?.quantity}</TableCell>
//                     <TableCell className="text-right">
//                       <PriceFormatter amount={item?.priceAtPurchase || item?.product?.price} className="font-black text-gray-900" />
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//         </div>

//         {/* 4. TOTALS & ACTIONS */}
//         <div className="mt-6 pt-6 border-t flex flex-col md:flex-row justify-between items-start gap-6">
//             <div className="flex gap-3 w-full md:w-auto">
//                 <Button 
//                     variant="outline" 
//                     className="flex-1 md:flex-none h-12 rounded-xl border-2 font-black text-xs uppercase text-blue-600 border-blue-100 hover:bg-blue-50"
//                     onClick={() => window.print()}
//                 >
//                     <Printer className="w-4 h-4 mr-2" /> Print Receipt
//                 </Button>
//                 {order?.invoice?.hosted_invoice_url && (
//                     <Button className="flex-1 md:flex-none h-12 rounded-xl bg-gray-900 text-white font-black text-xs uppercase" asChild>
//                         <Link href={order.invoice.hosted_invoice_url} target="_blank">
//                             <FileText className="w-4 h-4 mr-2" /> GST Invoice
//                         </Link>
//                     </Button>
//                 )}
//             </div>

//             <div className="w-full md:w-64 space-y-2">
//                 <div className="flex justify-between text-sm font-medium text-gray-500">
//                     <span>Subtotal:</span>
//                     <PriceFormatter amount={(order.totalPrice || 0) + (order.amountDiscount || 0)} />
//                 </div>
//                 {order.amountDiscount > 0 && (
//                     <div className="flex justify-between text-sm text-green-600 font-bold">
//                         <span>Discount:</span>
//                         <span>- <PriceFormatter amount={order.amountDiscount} /></span>
//                     </div>
//                 )}
//                 <div className="flex justify-between text-xl font-black border-t pt-2 text-green-800">
//                     <span>Paid Total:</span>
//                     <PriceFormatter amount={order.totalPrice} />
//                 </div>
//             </div>
//         </div>

//         <p className="mt-8 text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">
//             Bajbalkar Ropvatika & Consultancy - Quality Guaranteed
//         </p>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default OrderDetailDialog;



















"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceFormatter from "./PriceFormatter";
import { FileText, MapPin, Phone, Printer, Info } from "lucide-react";

interface OrderDetailsDialogProps {
  order: any | null; 
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-scroll bg-white rounded-3xl p-0">
        <DialogHeader className="p-8 border-b bg-gray-50/50">
          <DialogTitle className="text-2xl font-black flex items-center justify-between">
            <span>Order Archive</span>
            <span className="text-xs font-mono text-gray-400 bg-white border px-3 py-1 rounded-full uppercase">
              ID: {order?.orderNumber?.slice(-8)}
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="p-8 space-y-8">
            {/* LOGISTICS & CONTACT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                    <h4 className="text-[10px] font-black uppercase text-green-800 tracking-widest mb-3 flex items-center gap-2">
                        <Info size={14} /> Farmer Information
                    </h4>
                    <p className="font-black text-xl text-gray-900">{order.customerName}</p>
                    <p className="font-bold text-green-700 flex items-center gap-2 mt-1">
                        <Phone size={14} /> {order.customerPhone}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{order.email}</p>
                </div>

                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="text-[10px] font-black uppercase text-blue-800 tracking-widest mb-3 flex items-center gap-2">
                        <MapPin size={14} /> Dispatch Location
                    </h4>
                    <p className="text-sm font-bold leading-tight">{order.deliveryLocation?.fullAddress}</p>
                    <p className="text-xs mt-2">
                        <span className="font-black text-blue-900 uppercase">Landmark:</span> {order.deliveryLocation?.landmark || "Not Specified"}
                    </p>
                    {order.deliveryLocation?.googleMapsLink && (
                        <Link href={order.deliveryLocation.googleMapsLink} target="_blank" className="inline-flex items-center gap-1 text-[10px] font-black text-blue-600 hover:underline mt-3 bg-white px-3 py-1.5 rounded-lg border border-blue-200">
                            📍 OPEN GPS TRACKING
                        </Link>
                    )}
                </div>
            </div>

            {/* PRODUCT TABLE */}
            <div className="border rounded-2xl overflow-hidden">
                <Table>
                    <TableHeader className="bg-gray-50">
                        <TableRow>
                            <TableHead className="font-black uppercase text-[10px] p-4">Variety</TableHead>
                            <TableHead className="font-black uppercase text-[10px] p-4 text-center">Qty</TableHead>
                            <TableHead className="font-black uppercase text-[10px] p-4 text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {order.products?.map((item: any, index: number) => (
                            <TableRow key={index}>
                                <TableCell className="p-4 flex items-center gap-3">
                                    {item?.product?.images && (
                                        <Image unoptimized src={urlFor(item.product.images[0]).url()} alt="p" width={40} height={40} className="rounded-lg border aspect-square object-cover" />
                                    )}
                                    <span className="font-bold text-sm">{item?.product?.name}</span>
                                </TableCell>
                                <TableCell className="p-4 font-black text-center">{item?.quantity}</TableCell>
                                <TableCell className="p-4 text-right font-black">
                                    <PriceFormatter amount={item?.priceAtPurchase || item?.product?.price} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t">
                <Button variant="outline" className="h-12 rounded-xl border-2 font-black text-xs uppercase text-blue-600 border-blue-100" onClick={() => window.print()}>
                    <Printer className="w-4 h-4 mr-2" /> Print Official Copy
                </Button>
                <div className="text-right">
                    <p className="text-xs font-bold text-gray-400 uppercase">Paid Total Investment</p>
                    <PriceFormatter amount={order.totalPrice} className="text-3xl font-black text-green-800" />
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;