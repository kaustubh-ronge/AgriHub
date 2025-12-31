// "use client";

// import { Product } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image";
// import { Flame, StarIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Title } from "./ui/text";
// import PriceView from "./PriceView";
// import AddToCartButton from "./AddToCartButton";
// import { InquiryDrawer } from "./InquiryDrawer";
// import { Button } from "./ui/button";
// import { FaWhatsapp } from "react-icons/fa";
// import AddToWishlistButton from "./AddToWishlistButton";

// // Local type definition to handle expanded categories and custom fields
// type ProductProps = Omit<Product, 'categories'> & {
//   status?: string;
//   shortDescription?: string;
//   whatsappNumber?: string;
//   categories?: Array<{ title: string }>;
// };

// const ProductCard = ({ product }: { product: ProductProps }) => {
//   return (
//     <div className="text-sm border-[1px] border-dark_blue/20 rounded-md bg-white group flex flex-col h-full">
//       <div className="relative group overflow-hidden bg-shop_light_bg">
//         {product?.images && product.images[0] && (
//           <Link href={`/product/${product?.slug?.current}`}>
//             <Image
//               src={urlFor(product.images[0]).url()}
//               alt="ProductImage"
//               loading="lazy"
//               width={700}
//               height={700}
//               className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect ${
//                 product?.stock !== 0
//                   ? "group-hover:scale-105"
//                   : "opacity-50"
//               }`}
//             />
//           </Link>
//         )}

//         {product?.status === "sale" && (
//           <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green hoverEffect group-hover:text-shop_light_green">
//             Sale!
//           </p>
//         )}

//         {product?.status === "new" && (
//           <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green hoverEffect group-hover:text-shop_light_green">
//             New
//           </p>
//         )}

//         {product?.status === "hot" && (
//           <Link
//             href={"/deal"}
//             className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
//           >
//             <Flame
//               size={18}
//               fill="#fb6c08"
//               className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
//             />
//           </Link>
//         )}

//         {/* ✅ FIX: Use 'as unknown as Product' to bypass strict type check WITHOUT using 'any' */}
//         <AddToWishlistButton product={product as unknown as Product} />
//       </div>

//       <div className="p-3 flex flex-col gap-2 flex-grow">
//         {/* product details */}
//         {product?.categories && (
//           <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
//             {/* ✅ FIX: Typescript knows 'cat' has a title because of ProductProps */}
//             {product.categories
//               .map((cat) => cat.title)
//               .join(", ")}
//           </p>
//         )}
//         <Title className="text-sm line-clamp-1 font-bold">{product?.name}</Title>

//         {product.shortDescription ? (
//           <p className="text-xs text-gray-500 line-clamp-2 mt-1 min-h-[2.5em]">
//             {product.shortDescription}
//           </p>
//         ) : (
//           <div className="min-h-[2.5em]" /> 
//         )}

//         <div className="flex items-center gap-0.5">
//           <div className="flex items-center">
//             {[...Array(5)].map((_, index) => (
//               <StarIcon
//                 size={12}
//                 key={index}
//                 className={
//                   index < 4 ? "text-shop_lighter_green" : "text-shop_light_text"
//                 }
//                 fill={index < 4 ? "#93D991" : "#ababab"}
//               />
//             ))}
//           </div>
//           <p className="text-shop_light_text text-xs tracking-wide">5 Reviews</p>
//         </div>

//         <div className="flex items-center gap-2.5">
//           <p className="font-medium">In Stock</p>
//           <p
//             className={`${
//               product?.stock === 0
//                 ? "text-red-600"
//                 : "text-shop_light_green/80 font-semibold "
//             }`}
//           >
//             {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
//           </p>
//         </div>

//         <PriceView
//           price={product?.price}
//           discount={product?.discount}
//           unitLabel={
//             (product?.sellingUnit === "other" ? product?.otherSellingUnit : product?.sellingUnit) || product?.unit
//           }
//           className="text-sm"
//         />

//         <div className="mt-auto pt-2 flex flex-col gap-2">
//           {/* ✅ FIX: Use 'as unknown as Product' here too */}
//           <AddToCartButton
//             product={product as unknown as Product}
//             className="rounded-full flex-1"
//           />
//           {product.whatsappNumber && (
//             <InquiryDrawer
//               product={product as unknown as Product}
//               whatsappNumber={product.whatsappNumber}
//             >
//               <Button
//                 variant="outline"
//                 className="rounded-full flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
//               >
//                 <FaWhatsapp className="mr-2 h-4 w-4" />
//                 Inquire
//               </Button>
//             </InquiryDrawer>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;







// "use client";

// import { Product } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Title } from "./ui/text";
// import PriceView from "./PriceView";
// import AddToCartButton from "./AddToCartButton";
// import AddToWishlistButton from "./AddToWishlistButton";
// import { InquiryDrawer } from "@/components/InquiryDrawer"; // Import this
// import { Leaf, Droplets, Sprout, MessageSquare } from "lucide-react";
// import { Button } from "./ui/button";

// const ProductCard = ({ product }: { product: any }) => {
//   const isForSale = product.isForSale !== false;

//   return (
//     // Increased padding and min-height for a larger card
//     <div className="text-base border border-gray-200 rounded-xl bg-white group flex flex-col h-full overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      
//       {/* --- IMAGE SECTION (Fixed Aspect Ratio) --- */}
//       <div className="relative h-64 w-full bg-gray-50 overflow-hidden">
//         {product?.images && product.images[0] && (
//           <Link href={`/product/${product?.slug?.current}`}>
//             <Image
//               src={urlFor(product.images[0]).url()}
//               alt={product.name || "Product"}
//               fill
//               className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
//             />
//           </Link>
//         )}
//         <div className="absolute top-3 right-3 scale-110">
//            <AddToWishlistButton product={product} />
//         </div>
//       </div>

//       {/* --- CONTENT SECTION --- */}
//       <div className="p-5 flex flex-col gap-3 flex-grow">
//         <Link href={`/product/${product?.slug?.current}`}>
//           <Title className="text-xl font-extrabold text-gray-900 line-clamp-1 hover:text-green-700 transition-colors">
//             {product?.name}
//           </Title>
//         </Link>

//         {/* Breed/Formula Badge (Dynamic Information) */}
//         {(product.plantBreedData?.breedName || product.fertilizerFormulaData?.formulaName) && (
//            <div className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md self-start uppercase">
//              {product.plantBreedData?.breedName || product.fertilizerFormulaData?.formulaName}
//            </div>
//         )}

//         <p className="text-sm text-gray-600 line-clamp-2 min-h-[3em]">
//           {product.shortDescription || "No description available."}
//         </p>

//         {/* --- PRICE & ACTIONS --- */}
//         <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
//           <div className="flex items-center justify-between">
//             <div className="flex flex-col">
//                <span className="text-xs text-gray-500">Price per {product.unit}</span>
//                <PriceView price={product?.price} discount={product?.discount} className="text-2xl font-black text-green-700" />
//             </div>
            
//             {/* Stock Status Badge */}
//             <span className={`text-xs font-bold px-2 py-1 rounded ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//               {product.stock > 0 ? `In Stock` : 'Out of Stock'}
//             </span>
//           </div>

//           <div className="grid grid-cols-1 gap-2">
//             {/* Add to Cart */}
//             {isForSale && product.stock > 0 && (
//               <AddToCartButton product={product} className="w-full py-6 text-sm font-bold uppercase tracking-wider" />
//             )}

//             {/* ✅ NEW: Inquiry Button on Home Card */}
//             {product.whatsappNumber && (
//               <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                 <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 font-bold">
//                   <MessageSquare size={16} className="mr-2" />
//                   Inquire on WhatsApp
//                 </Button>
//               </InquiryDrawer>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



















// "use client";

// import { Product } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Title } from "./ui/text";
// import PriceView from "./PriceView";
// import AddToCartButton from "./AddToCartButton";
// import AddToWishlistButton from "./AddToWishlistButton";
// import { InquiryDrawer } from "@/components/InquiryDrawer"; 
// import { MessageSquare, BadgeCheck } from "lucide-react";
// import { Button } from "./ui/button";

// // ✅ UPDATED INTERFACE
// interface ProductCardProps {
//   product: any;
//   isRecommended?: boolean;
// }

// const ProductCard = ({ product, isRecommended = false }: ProductCardProps) => {
//   const isForSale = product.isForSale !== false;

//   // ✅ 1. SIMPLE BANNER VERSION (Fixes your requirement)
//   if (isRecommended) {
//     return (
//       <Link 
//         href={`/product/${product?.slug?.current}`} 
//         className="group relative block w-full h-48 rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all hover:shadow-md"
//       >
//         {product.images?.[0] && (
//           <Image 
//             src={urlFor(product.images[0]).url()} 
//             alt={product.name || "Recommended"} 
//             fill 
//             className="object-cover transition-transform duration-500 group-hover:scale-105" 
//           />
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
//           <p className="text-white font-black text-xl line-clamp-1">{product.name}</p>
//           <p className="text-green-400 text-xs font-black uppercase tracking-[0.2em] mt-1">
//             Consultant's Recommended Variety
//           </p>
//         </div>
//       </Link>
//     );
//   }

//   // ✅ 2. FULL CARD VERSION (Home Grid)
//   return (
//     <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500 group">
      
//       {/* IMAGE AREA (LARGE) */}
//       <div className="relative h-96 w-full bg-gray-50/50">
//         {product?.images && product.images[0] && (
//           <Link href={`/product/${product?.slug?.current}`} className="block h-full w-full">
//             <Image
//               src={urlFor(product.images[0]).url()}
//               alt={product.name || "Product"}
//               fill
//               className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
//             />
//           </Link>
//         )}
//         <div className="absolute top-8 right-8 scale-150 z-10">
//            <AddToWishlistButton product={product} />
//         </div>
//       </div>

//       {/* CONTENT AREA (INCREASED FONT SIZES) */}
//       <div className="p-10 flex flex-col flex-grow gap-5">
//         <div className="flex items-center gap-3">
//            <BadgeCheck className="text-blue-600" size={24} />
//            <span className="text-sm font-black uppercase text-blue-600 tracking-widest">Premium Consultancy Choice</span>
//         </div>

//         <Link href={`/product/${product?.slug?.current}`}>
//           <Title className="text-4xl font-black text-gray-900 leading-tight line-clamp-2 group-hover:text-green-700 transition-colors tracking-tighter">
//             {product?.name}
//           </Title>
//         </Link>

//         <p className="text-xl text-gray-500 font-medium line-clamp-2 mb-4 leading-relaxed">
//           {product.shortDescription || "High-quality batch verified by Bajbalkar Consultancy."}
//         </p>

//         {/* PRICE & ACTION SECTION */}
//         <div className="mt-auto pt-8 border-t-2 border-gray-50 space-y-8">
//           <div className="flex items-end justify-between">
//             <div className="flex flex-col">
//                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Standard Pricing</span>
//                <PriceView 
//                  price={product?.price} 
//                  discount={product?.discount} 
//                  className="text-5xl font-black text-green-700 tracking-tighter" 
//                />
//             </div>
//             <div className="flex flex-col items-end">
//                 <span className={`text-xs font-black px-4 py-2 rounded-full tracking-widest ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                 {product.stock > 0 ? 'READY BATCH' : 'OUT OF STOCK'}
//                 </span>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-4">
//             {isForSale && product.stock > 0 && (
//               <AddToCartButton 
//                 product={product} 
//                 className="w-full py-10 text-xl font-black uppercase tracking-[0.2em] rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform" 
//               />
//             )}
//             {product.whatsappNumber && (
//               <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                 <Button variant="outline" className="w-full h-20 border-4 border-green-600 text-green-700 hover:bg-green-50 rounded-3xl font-black text-xl tracking-wide">
//                   <MessageSquare size={28} className="mr-4" />
//                   CONSULT ON WHATSAPP
//                 </Button>
//               </InquiryDrawer>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
















// "use client";

// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Title } from "./ui/text";
// import PriceView from "./PriceView";
// import AddToCartButton from "./AddToCartButton";
// import AddToWishlistButton from "./AddToWishlistButton";
// import { InquiryDrawer } from "@/components/InquiryDrawer"; 
// import { MessageSquare, BadgeCheck, Leaf } from "lucide-react";
// import { Button } from "./ui/button";

// interface ProductCardProps {
//   product: any;
//   isRecommended?: boolean;
// }

// const ProductCard = ({ product, isRecommended = false }: ProductCardProps) => {
//   const isForSale = product.isForSale !== false;

//   if (isRecommended) {
//     return (
//       <Link 
//         href={`/product/${product?.slug?.current}`} 
//         className="group relative block w-full h-44 rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
//       >
//         {product.images?.[0] && (
//           <Image 
//             src={urlFor(product.images[0]).url()} 
//             alt={product.name || "Recommended"} 
//             fill 
//             className="object-cover transition-transform duration-500 group-hover:scale-110" 
//           />
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
//           <p className="text-white font-black text-lg line-clamp-1 group-hover:text-green-400 transition-colors">{product.name}</p>
//           <p className="text-green-400 text-[10px] font-black uppercase tracking-widest mt-1">Recommended Choice</p>
//         </div>
//       </Link>
//     );
//   }

//   return (
//     <div className="bg-white border-2 border-gray-100 rounded-[2rem] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl hover:border-green-100 transition-all duration-500 group relative">
      
//       {/* IMAGE AREA - Standardized Height */}
//       <div className="relative h-64 w-full bg-gray-50/50 overflow-hidden">
//         {product?.images && product.images[0] && (
//           <Link href={`/product/${product?.slug?.current}`} className="block h-full w-full">
//             <Image
//               src={urlFor(product.images[0]).url()}
//               alt={product.name || "Product"}
//               fill
//               className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
//             />
//           </Link>
//         )}
//         <div className="absolute top-4 right-4 z-10 transition-transform group-hover:scale-110">
//            <AddToWishlistButton product={product} />
//         </div>
//       </div>

//       {/* CONTENT AREA - Fixed padding and spacing */}
//       <div className="p-6 flex flex-col flex-grow gap-3">
//         <div className="flex items-center gap-2">
//            <BadgeCheck className="text-blue-600" size={18} />
//            <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Premium Choice</span>
//         </div>

//         <Link href={`/product/${product?.slug?.current}`}>
//           <Title className="text-2xl font-black text-gray-900 leading-tight line-clamp-1 group-hover:text-green-700 transition-colors">
//             {product?.name}
//           </Title>
//         </Link>

//         <p className="text-sm text-gray-500 font-medium line-clamp-2 h-10">
//           {product.shortDescription || "Batch verified by Bajbalkar Consultancy."}
//         </p>

//         {/* PRICE & ACTIONS */}
//         <div className="mt-auto pt-4 border-t-2 border-gray-50 space-y-4">
//           <div className="flex items-center justify-between">
//             <div className="flex flex-col">
//                <span className="text-[10px] font-bold text-gray-400 uppercase">Price per {product.unit}</span>
//                <PriceView price={product?.price} discount={product?.discount} className="text-3xl font-black text-green-700" />
//             </div>
//             <span className={`text-[10px] font-black px-3 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//               {product.stock > 0 ? 'READY' : 'SOLD'}
//             </span>
//           </div>

//           <div className="flex flex-col gap-2">
//             {isForSale && product.stock > 0 && (
//               <AddToCartButton product={product} className="w-full py-6 text-sm font-black uppercase tracking-widest rounded-xl shadow-md hover:shadow-green-200" />
//             )}
//             {product.whatsappNumber && (
//               <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                 <Button variant="outline" className="w-full h-12 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-xl font-black text-xs transition-all duration-300">
//                   <MessageSquare size={18} className="mr-2" />
//                   WHATSAPP CONSULT
//                 </Button>
//               </InquiryDrawer>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;














"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";
import { InquiryDrawer } from "@/components/InquiryDrawer"; 
import { MessageSquare, BadgeCheck, Sprout, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: any;
  isRecommended?: boolean;
}

const ProductCard = ({ product, isRecommended = false }: ProductCardProps) => {
  const isForSale = product.isForSale !== false;
  
  // Logic: Product is available if it's a booking OR if it's ready with stock > 0
  const isAvailable = product.batchStatus === "booking" || (product.batchStatus === "ready" && product.stock > 0);

  if (isRecommended) {
    return (
      <Link 
        href={`/product/${product?.slug?.current}`} 
        className="group relative block w-full h-44 rounded-3xl overflow-hidden border-2 border-transparent hover:border-green-400 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      >
        {product.images?.[0] && (
          <Image 
          unoptimized
            src={urlFor(product.images[0]).url()} 
            alt={product.name || "Recommended"} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
          <p className="text-white font-black text-xl line-clamp-1 group-hover:text-green-400 transition-colors">{product.name}</p>
          <p className="text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Consultant's Choice</p>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl hover:border-green-100 transition-all duration-500 group relative">
      
      {/* IMAGE AREA */}
      <div className="relative h-72 w-full bg-gray-50/50 overflow-hidden">
        {product?.images && product.images[0] && (
          <Link href={`/product/${product?.slug?.current}`} className="block h-full w-full">
            <Image
            unoptimized
              src={urlFor(product.images[0]).url()}
              alt={product.name || "Product"}
              fill
              className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
            />
          </Link>
        )}
        <div className="absolute top-6 right-6 scale-125 z-10 transition-transform duration-300 group-hover:scale-150">
           <AddToWishlistButton product={product} />
        </div>
        
        {/* Status Overlay */}
        <div className="absolute bottom-4 left-6">
            {product.batchStatus === "booking" ? (
                <span className="flex items-center gap-1.5 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">
                    <Sprout size={12} /> Fresh Batch Booking
                </span>
            ) : product.stock > 0 ? (
                <span className="flex items-center gap-1.5 bg-green-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">
                    <ShoppingCart size={12} /> Ready Stock
                </span>
            ) : (
                <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">
                    Sold Out
                </span>
            )}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-8 flex flex-col flex-grow gap-4">
        <div className="flex items-center gap-2">
           <BadgeCheck className="text-blue-600" size={20} />
           <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Premium Choice</span>
        </div>

        <Link href={`/product/${product?.slug?.current}`}>
          <Title className="text-2xl font-black text-gray-900 leading-tight line-clamp-1 group-hover:text-green-700 transition-colors tracking-tighter">
            {product?.name}
          </Title>
        </Link>

        <p className="text-sm text-gray-500 font-medium line-clamp-2 h-10 leading-relaxed">
          {product.shortDescription || "Batch verified by Bajbalkar Consultancy experts."}
        </p>

        <div className="mt-auto pt-6 border-t-2 border-gray-50 space-y-6">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price per {product.unit}</span>
               <PriceView price={product?.price} discount={product?.discount} className="text-3xl font-black text-green-700 tracking-tighter" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {isForSale && isAvailable && (
              <AddToCartButton product={product} className="w-full py-7 text-sm font-black uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 transition-all" />
            )}
            
            {product.whatsappNumber && (
              <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
                <Button variant="outline" className="w-full h-16 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-2xl font-black text-xs tracking-widest transition-all duration-300">
                  <MessageSquare size={20} className="mr-3" />
                  WHATSAPP CONSULT
                </Button>
              </InquiryDrawer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;