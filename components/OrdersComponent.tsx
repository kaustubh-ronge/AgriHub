// "use client";

// import { MY_ORDERS_QUERYResult } from "@/sanity.types";
// import { TableBody, TableCell, TableRow } from "./ui/table";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip";
// import PriceFormatter from "./PriceFormatter";
// import { format } from "date-fns";
// import { X } from "lucide-react";
// import { useState } from "react";
// import OrderDetailDialog from "./OrderDetailDialog";
// import toast from "react-hot-toast";

// const OrdersComponent = ({ orders }: { orders: MY_ORDERS_QUERYResult }) => {
//   const [selectedOrder, setSelectedOrder] = useState<
//     MY_ORDERS_QUERYResult[number] | null
//   >(null);
//   const handleDelete = () => {
//     toast.error("Delete method applied for Admin");
//   };
//   // Inside OrderDetailDialog.tsx and OrdersComponent.tsx
// // Replace the problematic lines with this type-safe bypass:

// // const orderInvoice = (order as any)?.invoice;
//   return (
//     <>
//       <TableBody>
//         <TooltipProvider>
//           {orders.map((order) => (
//             <Tooltip key={order?.orderNumber}>
//               <TooltipTrigger asChild>
//                 <TableRow
//                   className="cursor-pointer hover:bg-gray-100 h-12"
//                   onClick={() => setSelectedOrder(order)}
//                 >
//                   <TableCell className="font-medium">
//                     {order.orderNumber?.slice(-10) ?? "N/A"}...
//                   </TableCell>
//                   <TableCell className="hidden md:table-cell">
//                     {order?.orderDate &&
//                       format(new Date(order.orderDate), "dd/MM/yyyy")}
//                   </TableCell>
//                   <TableCell>{order.customerName}</TableCell>
//                   <TableCell className="hidden sm:table-cell">
//                     {order.email}
//                   </TableCell>
//                   <TableCell>
//                     <PriceFormatter
//                       amount={order?.totalPrice}
//                       className="text-black font-medium"
//                     />
//                   </TableCell>
//                   <TableCell>
//                     {order?.status && (
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                           order.status === "paid"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {order?.status.charAt(0).toUpperCase() +
//                           order?.status.slice(1)}
//                       </span>
//                     )}
//                   </TableCell>

//                   <TableCell className="hidden sm:table-cell">
//                     {order?.invoice && (
//                       <p className="font-medium line-clamp-1">
//                         {order?.invoice ? order?.invoice?.number : "----"}
//                       </p>
//                     )}
//                   </TableCell>
//                   <TableCell
//                     onClick={(event) => {
//                       event.stopPropagation();
//                       handleDelete();
//                     }}
//                     className="flex items-center justify-center group"
//                   >
//                     <X
//                       size={20}
//                       className="group-hover:text-shop_dark_green hoverEffect"
//                     />
//                   </TableCell>
//                 </TableRow>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Click to see order details</p>
//               </TooltipContent>
//             </Tooltip>
//           ))}
//         </TooltipProvider>
//       </TableBody>
//       <OrderDetailDialog
//         order={selectedOrder}
//         isOpen={!!selectedOrder}
//         onClose={() => setSelectedOrder(null)}
//       />
//     </>
//   );
// };

// export default OrdersComponent;




















"use client";

import { TableBody, TableCell, TableRow } from "./ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import PriceFormatter from "./PriceFormatter";
import { format } from "date-fns";
import { X, Eye } from "lucide-react";
import { useState } from "react";
import OrderDetailDialog from "./OrderDetailDialog";
import toast from "react-hot-toast";

const OrdersComponent = ({ orders }: { orders: any[] }) => {
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const handleDelete = () => {
    toast.error("Contact admin to cancel/delete orders.");
  };

  return (
    <>
      <TableBody>
        <TooltipProvider>
          {orders.map((order) => (
            <Tooltip key={order?.orderNumber}>
              <TooltipTrigger asChild>
                <TableRow
                  className="cursor-pointer hover:bg-gray-50 transition-colors group"
                  onClick={() => setSelectedOrder(order)}
                >
                  <TableCell className="font-bold text-xs">
                    #{order.orderNumber?.slice(-8).toUpperCase()}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-500">
                    {order?.orderDate && format(new Date(order.orderDate), "dd MMM yyyy")}
                  </TableCell>
                  <TableCell className="font-medium">{order.customerName}</TableCell>
                  <TableCell className="hidden sm:table-cell text-gray-500">{order.email}</TableCell>
                  <TableCell>
                    <PriceFormatter amount={order?.totalPrice} className="font-black text-green-700" />
                  </TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        order.status === "paid" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {order?.status}
                    </span>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell font-mono text-xs">
                    {/* Safe access using any casting */}
                    {(order as any).invoice?.number || "----"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-green-50 rounded-full text-green-700"><Eye size={18}/></button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); handleDelete(); }}
                            className="p-2 hover:bg-red-50 rounded-full text-gray-300 hover:text-red-600"
                        >
                            <X size={18}/>
                        </button>
                    </div>
                  </TableCell>
                </TableRow>
              </TooltipTrigger>
              <TooltipContent>Click to view full details</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </TableBody>
      <OrderDetailDialog
        order={selectedOrder}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </>
  );
};

export default OrdersComponent;