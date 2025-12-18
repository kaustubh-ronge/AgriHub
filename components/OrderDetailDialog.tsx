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













import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceFormatter from "./PriceFormatter";
import { FileText } from "lucide-react";

interface OrderDetailsDialogProps {
  order: any | null; // Changed to any to handle expanded invoice fields
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-scroll bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black">Order Details - {order?.orderNumber}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-xl">
          <div>
            <p><strong>Customer:</strong> {order.customerName}</p>
            <p><strong>Email:</strong> {order.email}</p>
          </div>
          <div>
            <p><strong>Date:</strong> {order.orderDate && new Date(order.orderDate).toLocaleDateString()}</p>
            <p><strong>Status:</strong> <span className="capitalize text-green-600 font-bold">{order.status}</span></p>
          </div>
          {order?.invoice && (
            <div className="col-span-full pt-2 border-t">
               <p><strong>Invoice:</strong> {order.invoice.number}</p>
               <Button className="bg-green-700 text-white mt-2 hover:bg-green-800" asChild>
                  <Link href={order.invoice.hosted_invoice_url} target="_blank">
                    <FileText className="w-4 h-4 mr-2" /> Download Invoice
                  </Link>
               </Button>
            </div>
          )}
        </div>

        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Product</TableHead>
              <TableHead className="font-bold">Quantity</TableHead>
              <TableHead className="font-bold">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.products?.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-3">
                  {item?.product?.images && (
                    <Image
                      src={urlFor(item.product.images[0]).url()}
                      alt="product"
                      width={50}
                      height={50}
                      className="rounded-md border object-contain"
                    />
                  )}
                  <span className="font-medium">{item?.product?.name}</span>
                </TableCell>
                <TableCell className="font-bold text-gray-600">{item?.quantity}</TableCell>
                <TableCell>
                  <PriceFormatter amount={item?.product?.price} className="font-bold text-black" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6 border-t pt-4 flex flex-col items-end gap-2">
            <div className="flex justify-between w-48 text-sm">
                <span>Subtotal:</span>
                <PriceFormatter amount={(order.totalPrice || 0) + (order.amountDiscount || 0)} />
            </div>
            {order.amountDiscount > 0 && (
                <div className="flex justify-between w-48 text-sm text-green-600 font-bold">
                    <span>Discount:</span>
                    <span>- <PriceFormatter amount={order.amountDiscount} /></span>
                </div>
            )}
            <div className="flex justify-between w-48 text-lg font-black border-t pt-2">
                <span>Total:</span>
                <PriceFormatter amount={order.totalPrice} className="text-green-700" />
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;