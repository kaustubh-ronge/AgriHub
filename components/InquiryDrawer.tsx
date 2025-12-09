"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ProductInquiryForm } from "./ProductInquiryForm";
import { Product } from "@/sanity.types";

interface Props {
  product: Product;
  whatsappNumber: string;
  children: React.ReactNode;
}

export function InquiryDrawer({ product, whatsappNumber, children }: Props) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold">Inquiry for {product.name}</DialogTitle>
          <DialogDescription className="pt-1">
            Your details will be sent directly to the seller via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <div className="px-2 py-4">
          <ProductInquiryForm 
            product={product} 
            whatsappNumber={whatsappNumber} 
            onFormSubmit={closeModal} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}