// import { Product } from "@/sanity.types";
// import useStore from "@/store";
// import React from "react";
// import { Button } from "./ui/button";
// import { Minus, Plus } from "lucide-react";
// import { cn } from "@/lib/utils";
// import toast from "react-hot-toast";

// interface Props {
//   product: Product;
//   className?: string;
// }
// const QuantityButtons = ({ product, className }: Props) => {
//   const { addItem, removeItem, getItemCount } = useStore();
//   const itemCount = getItemCount(product?._id);
//   const isOutOfStock = product?.stock === 0;
//   const getStep = () => {
//     if (product?.allowFractional) return 0.1;
//     const su = (product?.sellingUnit || product?.unit || "").toString();
//     if (su === "kg" || su === "liter") return 0.1;
//     return 1;
//   };
//   const step = getStep();

//   const handleRemoveProduct = () => {
//     removeItem(product?._id, step);
//     if (itemCount > 1) {
//       toast.success("Quantity Decreased successfully!");
//     } else {
//       toast.success(`${product?.name?.substring(0, 12)} removed successfully!`);
//     }
//   };

//   const handleAddToCart = () => {
//     if ((product?.stock as number) > itemCount) {
//       addItem(product, step);
//       toast.success("Quantity Increased successfully!");
//     } else {
//       toast.error("Can not add more than available stock");
//     }
//   };

//   return (
//     <div className={cn("flex items-center gap-1 pb-1 text-base", className)}>
//       <Button
//         onClick={handleRemoveProduct}
//         variant="outline"
//         size="icon"
//         disabled={itemCount === 0 || isOutOfStock}
//         className="w-6 h-6 border-[1px] hover:bg-shop_dark_green/20 hoverEffect"
//       >
//         <Minus />
//       </Button>
//       <span className="font-semibold text-sm w-10 text-center text-darkColor">
//         {step < 1 ? itemCount.toFixed(1) : itemCount}
//       </span>
//       <Button
//         onClick={handleAddToCart}
//         variant="outline"
//         size="icon"
//         disabled={isOutOfStock}
//         className="w-6 h-6 border-[1px] hover:bg-shop_dark_green/20 hoverEffect"
//       >
//         <Plus />
//       </Button>
//     </div>
//   );
// };

// export default QuantityButtons;

















"use client";

import React from "react";
import useStore from "@/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Minus, Plus, Zap } from "lucide-react";
import toast from "react-hot-toast";

const QuantityButtons = ({ product }: { product: any }) => {
  const { addItem, removeItem, setItemQuantity, getItemCount } = useStore();
  const currentQuantity = getItemCount(product?._id);

  // Logic: Only "ready" status enforces physical stock limits
  const isReady = product.batchStatus === "ready";
  const maxStock = isReady ? (product.stock || 0) : 999999; 
  const presets = [50, 100, 200, 500];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (isNaN(val)) {
        setItemQuantity(product._id, 0);
        return;
    }
    const finalVal = Math.min(Math.max(0, val), maxStock);
    setItemQuantity(product._id, finalVal);
    
    if (isReady && val > maxStock) {
        toast.error(`Only ${maxStock} units available in current ready stock.`);
    }
  };

  const addBulk = (amount: number) => {
    const newVal = Math.min(currentQuantity + amount, maxStock);
    setItemQuantity(product._id, newVal);
    toast.success(`Added ${amount} to booking`);
  };

  return (
    <div className="flex flex-col gap-3 w-full sm:w-auto">
      {/* Standard Counter with Direct Input */}
      <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-2xl border-2 border-gray-200 w-fit">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl hover:bg-white hover:text-red-600 transition-colors"
          onClick={() => removeItem(product._id)}
          disabled={currentQuantity === 0}
        >
          <Minus size={18} />
        </Button>

        <Input
          type="number"
          value={currentQuantity === 0 ? "" : currentQuantity}
          placeholder="0"
          onChange={handleInputChange}
          className="w-20 h-10 border-none bg-transparent text-center font-black text-lg focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl hover:bg-white hover:text-green-700 transition-colors"
          onClick={() => addItem(product)}
          disabled={isReady && currentQuantity >= maxStock}
        >
          <Plus size={18} />
        </Button>
      </div>

      {/* Bulk Presets for Farmers (Shown for Fresh Batch/Booking) */}
      {!isReady && (
        <div className="flex flex-wrap gap-2">
          {presets.map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => addBulk(num)}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-black hover:border-green-600 hover:text-green-700 transition-all flex items-center gap-1 shadow-sm active:scale-95"
            >
              <Zap size={10} className="fill-current" /> +{num}
            </button>
          ))}
        </div>
      )}
      
      {/* Error state for Ready Stock */}
      {isReady && currentQuantity >= maxStock && maxStock > 0 && (
        <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter animate-pulse">
          Maximum Available Stock Reached
        </p>
      )}
    </div>
  );
};

export default QuantityButtons;