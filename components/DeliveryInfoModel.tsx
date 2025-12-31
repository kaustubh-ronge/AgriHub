"use client";

import React from "react";
import { Truck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DeliveryInfoModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
          <Truck size={18} />
          Delivery Info
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Truck className="text-blue-600" /> Shipping & Delivery
          </DialogTitle>
          <DialogDescription>
            How we get your plants to you safely.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4 text-sm text-gray-600">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Delivery Areas</h4>
            <p>We currently deliver to all major districts in Maharashtra and Gujarat. Rural delivery depends on courier accessibility.</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Estimated Time</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Seeds & Fertilizers:</strong> 3-5 Working Days</li>
              <li><strong>Live Plants:</strong> 5-7 Working Days (Handled with care)</li>
             
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Packaging</h4>
            <p>Live plants are packed in ventilated, moisture-retaining gel packaging to ensure they arrive fresh.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryInfoModal;