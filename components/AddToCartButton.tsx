// "use client";
// import { Product } from "@/sanity.types";
// import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";
// import { ShoppingBag } from "lucide-react";
// import useStore from "@/store";
// import toast from "react-hot-toast";
// import PriceFormatter from "./PriceFormatter";
// import QuantityButtons from "./QuantityButtons";
// import { useState } from "react";

// interface Props {
//   product: Product;
//   className?: string;
// }

// const AddToCartButton = ({ product, className }: Props) => {
//   const { addItem, getItemCount } = useStore();
//   const itemCount = getItemCount(product?._id);
//   const isOutOfStock = product?.stock === 0;
//   const [isAdding, setIsAdding] = useState(false);

//   const getStep = () => {
//     if (product?.allowFractional) return 0.1;
//     const su = (product?.sellingUnit || product?.unit || "").toString();
//     if (su === "kg" || su === "liter") return 0.1;
//     return 1;
//   };
//   const step = getStep();
//   const [quantityToAdd, setQuantityToAdd] = useState<number>(step);

//   // const handleAddToCart = () => {
//   //   if ((product?.stock as number) >= itemCount + quantityToAdd) {
//   //     addItem(product, quantityToAdd);
//   //     toast.success(
//   //       `${product?.name?.substring(0, 12)}... added successfully!`
//   //     );
//   //   } else {
//   //     toast.error("Can not add more than available stock");
//   //   }
//   // };

//   // If user already has item, show "Go to Cart" instead of standard quantity UI 
//   // until they are actually in the cart page
//   const handleAddToCart = () => {
//     setIsAdding(true);
//     addItem(product, 1);
//     toast.success("Batch reserved in cart!");
//     setTimeout(() => setIsAdding(false), 500);
//   };

//   if (product.stock === 0 || (product as any).batchStatus === "soldout") {
//     return (
//       <Button disabled className={cn("w-full bg-gray-200 text-gray-500", className)}>
//         SOLD OUT
//       </Button>
//     );
//   }
//   return (
//     <div className="w-full h-12 flex items-center">
//       {itemCount ? (
//         <div className="text-sm w-full">
//           <div className="flex items-center justify-between">
//             <span className="text-xs text-darkColor/80">Quantity</span>
//             <QuantityButtons product={product} />
//           </div>
//           <div className="flex items-center justify-between border-t pt-1">
//             <span className="text-xs font-semibold">Subtotal</span>
//             <div className="flex items-baseline gap-2">
//               <PriceFormatter
//                 amount={product?.price ? product?.price * itemCount : 0}
//               />
//               <span className="text-xs text-gray-500">/ {(product?.sellingUnit === "other" ? product?.otherSellingUnit : product?.sellingUnit) || product?.unit}</span>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="flex gap-2 w-full">
//             <Button
//               onClick={handleAddToCart}
//               disabled={isOutOfStock}
//               className={cn(
//                 "flex-1 bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
//                 className
//               )}
//             >
//               <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
//             </Button>
//           </div>
//       )}
//     </div>
//   );
// };

// export default AddToCartButton;
















"use client";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag, ArrowRight } from "lucide-react";
import useStore from "@/store";
import toast from "react-hot-toast";
import PriceFormatter from "./PriceFormatter";
import QuantityButtons from "./QuantityButtons";
import { useState } from "react";
import Link from "next/link";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0 || (product as any).batchStatus === "soldout";
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, 1);
    toast.success(`${product?.name?.substring(0, 12)} added to cart!`);
    setTimeout(() => setIsAdding(false), 500);
  };

  if (isOutOfStock) {
    return (
      <Button disabled className={cn("w-full bg-gray-200 text-gray-500 h-12 rounded-2xl", className)}>
        SOLD OUT
      </Button>
    );
  }

  return (
    <div className="w-full space-y-4">
      {itemCount > 0 ? (
        <div className="space-y-4 w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Quantity and Subtotal UI */}
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Adjust Quantity</span>
              <QuantityButtons product={product} />
            </div>
            <Separator className="mb-3" />
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">Subtotal</span>
              <div className="flex items-baseline gap-1">
                <PriceFormatter
                  amount={product?.price ? product?.price * itemCount : 0}
                  className="text-xl font-black text-shop_dark_green"
                />
                <span className="text-[10px] text-gray-400 font-bold uppercase">
                  / {product?.unit || "unit"}
                </span>
              </div>
            </div>
          </div>

          {/* New "GO TO CART" Button */}
          <Button
            asChild
            className={cn(
              "w-full h-16 bg-blue-600 text-white hover:bg-blue-700 shadow-xl rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3",
              className
            )}
          >
            <Link href="/cart">
              Go to Cart <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      ) : (
        /* Initial "Add to Cart" Button */
        <Button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={cn(
            "w-full h-16 bg-shop_dark_green text-white hover:bg-green-700 shadow-xl rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3",
            className
          )}
        >
          <ShoppingBag size={20} /> 
          {isAdding ? "RESERVING BATCH..." : "ADD TO CART"}
        </Button>
      )}
    </div>
  );
};

// Small helper if Separator is not imported
const Separator = ({ className }: { className?: string }) => (
  <div className={cn("h-[1px] w-full bg-gray-200", className)} />
);

export default AddToCartButton;