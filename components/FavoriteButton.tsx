// "use client";
// import { Product } from "@/sanity.types";
// import useStore from "@/store";
// import { Heart } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const FavoriteButton = ({
//   showProduct = false,
//   product,
// }: {
//   showProduct?: boolean;
//   product?: Product | null | undefined;
// }) => {
//   const { favoriteProduct, addToFavorite } = useStore();
//   const [existingProduct, setExistingProduct] = useState<Product | null>(null);
//   useEffect(() => {
//     const availableItem = favoriteProduct.find(
//       (item) => item?._id === product?._id
//     );
//     setExistingProduct(availableItem || null);
//   }, [product, favoriteProduct]);

//   const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
//     e.preventDefault();
//     if (product?._id) {
//       addToFavorite(product).then(() => {
//         toast.success(
//           existingProduct
//             ? "Product removed successfully!"
//             : "Product added successfully!"
//         );
//       });
//     }
//   };
//   return (
//     <>
//       {!showProduct ? (
//         <Link href={"/wishlist"} className="group relative">
//           <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
//           <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
//             {favoriteProduct?.length ? favoriteProduct?.length : 0}
//           </span>
//         </Link>
//       ) : (
//         <button
//           onClick={handleFavorite}
//           className="group relative hover:text-shop_light_green hoverEffect border border-shop_light_green/80 hover:border-shop_light_green p-1.5 rounded-sm"
//         >
//           {existingProduct ? (
//             <Heart
//               fill="#3b9c3c"
//               className="text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-.5 w-5 h-5"
//             />
//           ) : (
//             <Heart className="text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-.5 w-5 h-5" />
//           )}
//         </button>
//       )}
//     </>
//   );
// };

// export default FavoriteButton;







"use client";

import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [isFavorite, setIsFavorite] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!product?._id) return;
    setIsFavorite(
      favoriteProduct.some((item) => item._id === product._id)
    );
  }, [favoriteProduct, product]);

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!product) return;

    setAnimate(true);
    addToFavorite(product).then(() => {
      toast.success(
        isFavorite
          ? "Removed from wishlist"
          : "Added to wishlist"
      );
    });

    setTimeout(() => setAnimate(false), 300);
  };

  // 🔹 Header wishlist icon
  if (!showProduct) {
    return (
      <Link href="/wishlist" className="group relative">
        <Heart className="w-5 h-5 hover:text-shop_light_green transition-colors" />
        <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          {favoriteProduct.length}
        </span>
      </Link>
    );
  }

  // 🔹 Product card button
  return (
    <button
      onClick={handleFavorite}
      className="relative p-1.5 border border-shop_light_green/70 rounded-sm hover:border-shop_light_green transition"
    >
      {/* Pulse ring */}
      {animate && (
        <span className="absolute inset-0 rounded-full animate-ping bg-shop_light_green/30"></span>
      )}

      <Heart
        className={`relative z-10 w-5 h-5 transition-all duration-300
          ${
            isFavorite
              ? "text-shop_light_green scale-110"
              : "text-shop_light_green/70 scale-100"
          }
          ${animate ? "scale-125" : ""}
        `}
        fill={isFavorite ? "#3b9c3c" : "none"}
      />
    </button>
  );
};

export default FavoriteButton;
