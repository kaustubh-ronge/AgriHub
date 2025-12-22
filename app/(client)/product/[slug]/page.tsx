// import { getProductBySlug } from "@/sanity/queries";
// import { PortableText } from "@portabletext/react";
// import React from "react";
// import { 
//   StarIcon, 
//   Truck, 
//   CornerDownLeft, 
//   ShieldCheck, 
//   AlertCircle,
//   CheckCircle2,
//   HelpCircle
// } from "lucide-react";

// // Components
// import Container from "@/components/Container";
// import ImageView from "@/components/ImageView";
// import PriceView from "@/components/PriceView";
// import AddToCartButton from "@/components/AddToCartButton";
// import FavoriteButton from "@/components/FavoriteButton";
// import ProductCharacteristics from "@/components/ProductCharacteristics";
// import { InquiryDrawer } from "@/components/InquiryDrawer";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator"; 
// import { FaWhatsapp } from "react-icons/fa";
// import ShareModal from "@/components/ShareModel";
// // ✅ IMPORT NEW COMPONENTS
// import AddToCompareButton from "@/components/AddToCompareButton";
// import DeliveryInfoModal from "@/components/DeliveryInfoModel";

// // Types
// import { Product } from "@/sanity.types"; 
// import Link from "next/link";

// interface Props {
//   params: { slug: string };
// }

// const SingleProductPage = async ({ params }: Props) => {
//   const { slug } = await params;
//   const product = (await getProductBySlug(slug)) as unknown as Product | null;

//   if (!product) {
//     return (
//       <Container className="py-20 flex flex-col items-center justify-center text-center">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Not Found</h1>
//         <Button className="mt-6" asChild>
//             <Link href="/">Back to Home</Link>
//         </Button>
//       </Container>
//     );
//   }

//   const isOutOfStock = product.stock === 0;

//   return (
//     <Container className="py-10 bg-gray-50/50 min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
//         {/* ================= LEFT COLUMN: IMAGES ================= */}
//         <div className="w-full">
//             <div className="sticky top-24 space-y-4">
//                  {product.images && (
//                     <ImageView images={product.images} isStock={product.stock} />
//                  )}
                 
//                  <div className="grid grid-cols-3 gap-2 mt-6">
//                     <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
//                         <ShieldCheck className="text-green-600 mb-1" size={20} />
//                         <span className="text-[10px] uppercase font-bold text-gray-500">100% Original</span>
//                     </div>
//                     <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
//                         <Truck className="text-blue-600 mb-1" size={20} />
//                         <span className="text-[10px] uppercase font-bold text-gray-500">Fast Shipping</span>
//                     </div>
//                     <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
//                         <CornerDownLeft className="text-orange-600 mb-1" size={20} />
//                         <span className="text-[10px] uppercase font-bold text-gray-500">Easy Returns</span>
//                     </div>
//                  </div>
//             </div>
//         </div>

//         {/* ================= RIGHT COLUMN: DETAILS ================= */}
//         <div className="flex flex-col gap-5 space-6">
          
//           {/* Header Section */}
//           <div>
//              <div className="flex items-center gap-2 mb-2">
//                 {product.categories && product.categories.length > 0 && (
//                     <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
//                         {/* @ts-expect-error - categories expanded in GROQ query */}
//                         {product.categories[0]?.title || "Product"} 
//                     </span>
//                 )}
//                      {product.nursery && (
//                             <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                                 {/* @ts-expect-error - nursery expanded in GROQ query */}
//                                 {product.nursery?.title || "Nursery"}
//                             </span>
//                      )}
//              </div>

//             <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
//               {product.name}
//             </h1>

//             <div className="flex items-center justify-between mt-4">
//                 <div className="flex items-center gap-2">
//                     <div className="flex text-yellow-400">
//                         {[...Array(5)].map((_, index) => (
//                         <StarIcon key={index} size={16} fill="currentColor" />
//                         ))}
//                     </div>
//                     <span className="text-sm font-medium text-gray-500">(120 Reviews)</span>
//                 </div>
                
//                 <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
//                     isOutOfStock 
//                     ? "bg-red-100 text-red-700 border border-red-200" 
//                     : "bg-green-100 text-green-700 border border-green-200"
//                 }`}>
//                     {isOutOfStock ? <AlertCircle size={14}/> : <CheckCircle2 size={14}/>}
//                     {isOutOfStock ? "Out of Stock" : "In Stock"}
//                 </span>
//             </div>
//           </div>

//           <Separator className="bg-gray-200" />

//           {/* Price & Actions Card */}
//           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
//              <div className="flex flex-col">
//                 <div className="flex items-end gap-3">
//                     <PriceView
//                         price={product.price}
//                         discount={product.discount}
//                         unitLabel={(product?.sellingUnit === "other" ? product?.otherSellingUnit : product?.sellingUnit) || product?.unit}
//                         className="text-3xl font-bold text-gray-900"
//                     />
//                 </div>
//                 <p className="text-xs text-gray-500 mt-1">
//                     Inclusive of all taxes. 
//                     {product.stock && product.stock < 10 && product.stock > 0 && (
//                         <span className="text-orange-600 font-medium ml-1">
//                             Only {product.stock} left!
//                         </span>
//                     )}
//                 </p>
//              </div>

//              <div className="flex flex-col sm:flex-row gap-3">
//                 <div className="flex-1">
//                      <AddToCartButton product={product} />
//                 </div>
                
//                 {product.whatsappNumber && (
//                     <div className="flex-1">
//                         <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                         <Button
//                             variant="outline"
//                             className="w-full h-11 text-base font-semibold border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
//                         >
//                             <FaWhatsapp className="mr-2 h-5 w-5" />
//                             Inquire
//                         </Button>
//                         </InquiryDrawer>
//                     </div>
//                 )}
                
//                 <div className="sm:w-auto">
//                      <FavoriteButton showProduct={true} product={product} />
//                 </div>
//             </div>
//           </div>

//           {/* Dynamic Characteristics */}
//           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//              <ProductCharacteristics product={product} />
//           </div>

//           {/* Description */}
//           <div className="space-y-4">
//              <h3 className="text-lg font-bold text-gray-900 border-l-4 border-shop_orange pl-3">
//                 Description
//              </h3>
//              <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-gray-600">
//                  {product.detailedDescription ? (
//                       <PortableText value={product.detailedDescription} />
//                  ) : (
//                       <p>{product.shortDescription || "No detailed description available."}</p>
//                  )}
//              </div>
//           </div>

//           <Separator className="bg-gray-200" />

//           {/* ✅ UPDATED META LINKS SECTION */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            
//             {/* 1. COMPARE BUTTON (Functional) */}
//             <AddToCompareButton product={product} />

//             {/* 2. ASK QUESTION (Reuse Inquiry Drawer) */}
//             {product.whatsappNumber ? (
//               <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                  <button className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
//                     <HelpCircle size={18} />
//                     Ask Question
//                  </button>
//               </InquiryDrawer>
//             ) : (
//                 // Fallback if no number
//                 <Link href="/contact" className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
//                     <HelpCircle size={18} />
//                     Contact Support
//                 </Link>
//             )}

//             {/* 3. DELIVERY INFO (Functional Modal) */}
//             <DeliveryInfoModal />

//             {/* 4. SHARE */}
//             <ShareModal productName={product.name} />

//           </div>

//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SingleProductPage;
























// import { getProductBySlug } from "@/sanity/queries";
// import { PortableText } from "@portabletext/react";
// import React from "react";
// import { 
//   StarIcon, 
//   Truck, 
//   CornerDownLeft, 
//   ShieldCheck, 
//   AlertCircle,
//   CheckCircle2,
//   HelpCircle,
//   Package,
//   Calendar,
//   Target
// } from "lucide-react";

// // Components
// import Container from "@/components/Container";
// import ImageView from "@/components/ImageView";
// import PriceView from "@/components/PriceView";
// import AddToCartButton from "@/components/AddToCartButton";
// import FavoriteButton from "@/components/FavoriteButton";
// import ProductCharacteristics from "@/components/ProductCharacteristics";
// import { InquiryDrawer } from "@/components/InquiryDrawer";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator"; 
// import { FaWhatsapp } from "react-icons/fa";
// import ShareModal from "@/components/ShareModel";
// import AddToCompareButton from "@/components/AddToCompareButton";
// import DeliveryInfoModal from "@/components/DeliveryInfoModel";

// import { Product } from "@/sanity.types"; 
// import Link from "next/link";

// interface Props {
//   params: { slug: string };
// }

// const SingleProductPage = async ({ params }: Props) => {
//   const { slug } = await params;
//   const product = (await getProductBySlug(slug)) as unknown as Product | null;

//   if (!product) {
//     return (
//       <Container className="py-20 flex flex-col items-center justify-center text-center">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Not Found</h1>
//         <Button className="mt-6" asChild>
//             <Link href="/">Back to Home</Link>
//         </Button>
//       </Container>
//     );
//   }

//   const isOutOfStock = product.stock === 0;

//   return (
//     <Container className="py-10 bg-gray-50/50 min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
//         {/* ================= LEFT COLUMN: IMAGES ================= */}
//         <div className="w-full lg:sticky lg:top-24 h-fit">
//             {/* <div className="sticky top-24 space-y-4"> */}
//             <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 aspect-square relative">
//                  {product.images && (
//                     /* ✅ FIX: Changed 'isStock' to 'stock' to match component definition */
//                     <ImageView images={product.images} stock={product.stock} />
//                  )}
                 
//                  <div className="grid grid-cols-3 gap-2 mt-6">
//                     <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
//                         <ShieldCheck className="text-green-600 mb-1" size={20} />
//                         <span className="text-[10px] uppercase font-bold text-gray-500">100% Original</span>
//                     </div>
//                     <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
//                         <Truck className="text-blue-600 mb-1" size={20} />
//                         <span className="text-[10px] uppercase font-bold text-gray-500">Fast Shipping</span>
//                     </div>
//                     <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
//                         <CornerDownLeft className="text-orange-600 mb-1" size={20} />
//                         <span className="text-[10px] uppercase font-bold text-gray-500">Easy Returns</span>
//                     </div>
//                  </div>
//             </div>
//         </div>

//         {/* ================= RIGHT COLUMN: DETAILS ================= */}
//         <div className="flex flex-col gap-5 space-6">
          
//           {/* Header Section */}
//           <div>
//              <div className="flex items-center gap-2 mb-2">
//                 {product.categories && product.categories.length > 0 && (
//                     <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
//                         {/* @ts-expect-error - categories expanded in GROQ query */}
//                         {product.categories[0]?.title || "Product"} 
//                     </span>
//                 )}
//                      {product.nursery && (
//                             <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                                 {/* @ts-expect-error - nursery expanded in GROQ query */}
//                                 {product.nursery?.title || "Nursery"}
//                             </span>
//                      )}
//              </div>

//             <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
//               {product.name}
//             </h1>

//             <div className="flex items-center justify-between mt-4">
//                 <div className="flex items-center gap-2">
//                     <div className="flex text-yellow-400">
//                         {[...Array(5)].map((_, index) => (
//                         <StarIcon key={index} size={16} fill="currentColor" />
//                         ))}
//                     </div>
//                     <span className="text-sm font-medium text-gray-500">(120 Reviews)</span>
//                 </div>
                
//                 <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
//                     isOutOfStock 
//                     ? "bg-red-100 text-red-700 border border-red-200" 
//                     : "bg-green-100 text-green-700 border border-green-200"
//                 }`}>
//                     {isOutOfStock ? <AlertCircle size={14}/> : <CheckCircle2 size={14}/>}
//                     {isOutOfStock ? "Out of Stock" : "In Stock"}
//                 </span>
//             </div>
//           </div>

//           <Separator className="bg-gray-200" />

//           {/* Price & Actions Card */}
//           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
//              <div className="flex flex-col">
//                 <div className="flex items-end gap-3">
//                     <PriceView
//                         price={product.price}
//                         discount={product.discount}
//                         unitLabel={(product?.sellingUnit === "other" ? product?.otherSellingUnit : product?.sellingUnit) || product?.unit}
//                         className="text-3xl font-bold text-gray-900"
//                     />
//                 </div>
//                 <p className="text-xs text-gray-500 mt-1">
//                     Inclusive of all taxes. 
//                     {product.stock && product.stock < 10 && product.stock > 0 && (
//                         <span className="text-orange-600 font-medium ml-1">
//                             Only {product.stock} left!
//                         </span>
//                     )}
//                 </p>
//              </div>

//              <div className="flex flex-col sm:flex-row gap-3">
//                 <div className="flex-1">
//                      <AddToCartButton product={product} />
//                 </div>
                
//                 {product.whatsappNumber && (
//                     <div className="flex-1">
//                         <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                         <Button
//                             variant="outline"
//                             className="w-full h-11 text-base font-semibold border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
//                         >
//                             <FaWhatsapp className="mr-2 h-5 w-5" />
//                             Inquire
//                         </Button>
//                         </InquiryDrawer>
//                     </div>
//                 )}
                
//                 <div className="sm:w-auto">
//                      <FavoriteButton showProduct={true} product={product} />
//                 </div>
//             </div>
//           </div>

//           {/* QUICK STATS FOR FARMERS */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4">
//               <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
//                   <Package size={18} className="text-green-600 mb-1" />
//                   <span className="text-[10px] text-gray-400 font-bold uppercase">Tray Size</span>
//                   {/* @ts-ignore */}
//                   <span className="text-sm font-black">{product.trayPlantCount || 'N/A'} Plants</span>
//               </div>
//               <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
//                   <Calendar size={18} className="text-blue-600 mb-1" />
//                   <span className="text-[10px] text-gray-400 font-bold uppercase">Age</span>
//                   {/* Simple manual age calc if date-fns isn't ready */}
//                   <span className="text-sm font-black">Ready Stock</span>
//               </div>
//               <div className="hidden sm:flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
//                   <Target size={18} className="text-orange-600 mb-1" />
//                   <span className="text-[10px] text-gray-400 font-bold uppercase">Soil</span>
//                   {/* @ts-ignore */}
//                   <span className="text-sm font-black">{product.plantBreedData?.soilRecommendation || 'Any'}</span>
//               </div>
//           </div>

//           {/* Dynamic Characteristics */}
//           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//              <ProductCharacteristics product={product} />
//           </div>

//           {/* Description */}
//           <div className="space-y-4">
//              <h3 className="text-lg font-bold text-gray-900 border-l-4 border-shop_orange pl-3">
//                 Description
//              </h3>
//              <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-gray-600">
//                  {product.detailedDescription ? (
//                       <PortableText value={product.detailedDescription} />
//                  ) : (
//                       <p>{product.shortDescription || "No detailed description available."}</p>
//                  )}
//              </div>
//           </div>

//           <Separator className="bg-gray-200" />

//           {/* Meta Links Section */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            
//             <AddToCompareButton product={product} />

//             {product.whatsappNumber ? (
//               <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                  <button className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
//                     <HelpCircle size={18} />
//                     Ask Question
//                  </button>
//               </InquiryDrawer>
//             ) : (
//                 <Link href="/contact" className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
//                     <HelpCircle size={18} />
//                     Contact Support
//                 </Link>
//             )}

//             <DeliveryInfoModal />

//             {/* ✅ FIX: ShareModal needs a guaranteed string */}
//             <ShareModal productName={product.name || "Product"} />

//           </div>

//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SingleProductPage;














// import { getProductBySlug } from "@/sanity/queries";
// import { PortableText } from "@portabletext/react";
// import React from "react";
// import { 
//   StarIcon, Truck, CornerDownLeft, ShieldCheck, 
//   AlertCircle, CheckCircle2, HelpCircle,
//   Award, Package, Calendar, Target, Info
// } from "lucide-react";

// // Components
// import Container from "@/components/Container";
// import ImageView from "@/components/ImageView";
// import PriceView from "@/components/PriceView";
// import AddToCartButton from "@/components/AddToCartButton";
// import FavoriteButton from "@/components/FavoriteButton";
// import ProductCharacteristics from "@/components/ProductCharacteristics";
// import { InquiryDrawer } from "@/components/InquiryDrawer";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator"; 
// import { FaWhatsapp } from "react-icons/fa";
// import ShareModal from "@/components/ShareModel";
// import AddToCompareButton from "@/components/AddToCompareButton";
// import DeliveryInfoModal from "@/components/DeliveryInfoModel";

// import { Product } from "@/sanity.types"; 
// import Link from "next/link";
// import ProductCard from "@/components/ProductCard";

// interface Props {
//   params: { slug: string };
// }

// const SingleProductPage = async ({ params }: Props) => {
//   const { slug } = await params;
//   const product = (await getProductBySlug(slug)) as any; // Using any for expanded fields

//   if (!product) {
//     return (
//       <Container className="py-20 flex flex-col items-center justify-center text-center">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Not Found</h1>
//         <Button className="mt-6" asChild>
//             <Link href="/">Back to Home</Link>
//         </Button>
//       </Container>
//     );
//   }

//   const isOutOfStock = product.stock === 0;

//   return (
//     <Container className="py-10 bg-gray-50/50 min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
// {/* ... inside SingleProductPage components ... */}

//         {/* ================= LEFT COLUMN: IMAGES & RECOMMENDATION ================= */}
//         <div className="w-full lg:sticky lg:top-24 h-fit">
//             <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 aspect-square relative shadow-sm">
//                  {product.images && (
//                     <ImageView images={product.images} stock={product.stock} />
//                  )}
//             </div>
            
//             <div className="grid grid-cols-3 gap-2 mt-6">
//                 {/* ... icons here ... */}
//             </div>

//             {/* ✅ NEW: Simple recommendation banner inside the left column layout */}
//             <div className="mt-12 space-y-4">
//                 <h4 className="text-lg font-black uppercase tracking-widest text-gray-900 border-l-4 border-green-600 pl-3">
//                    Recommended Variety
//                 </h4>
//                 {product.relatedProducts && product.relatedProducts.length > 0 ? (
//                    <ProductCard product={product.relatedProducts[0]} isRecommended={true} />
//                 ) : (
//                    <div className="p-6 bg-white rounded-2xl border border-dashed border-gray-200 text-center">
//                       <p className="text-gray-400 font-bold text-sm">New batches arriving soon...</p>
//                    </div>
//                 )}
//             </div>
//         </div>

//         {/* ================= RIGHT COLUMN: DETAILS ================= */}
//         <div className="flex flex-col gap-5">
          
//           {/* Header Section */}
//           <div>
//              <div className="flex items-center gap-2 mb-2 flex-wrap">
//                 {product.categories && product.categories.length > 0 && (
//                     <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
//                         {product.categories[0]?.title || "Product"} 
//                     </span>
//                 )}
//                 {/* CONSULTANCY BADGE */}
//                 <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-100">
//                     <Award size={12} /> Expert Consultancy Included
//                 </span>
//              </div>

//             <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-tight">
//                 {product.nursery?.title || "Bajbalkar Ropvatika"}
//             </p>
//             <h1 className="text-4xl font-black tracking-tight text-gray-900 leading-none mb-4">
//               {product.name}
//             </h1>

//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                     <div className="flex text-yellow-400">
//                         {[...Array(5)].map((_, index) => (
//                         <StarIcon key={index} size={14} fill="currentColor" />
//                         ))}
//                     </div>
//                     <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">(120 Reviews)</span>
//                 </div>
                
//                 <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 ${
//                     isOutOfStock 
//                     ? "bg-red-100 text-red-700 border border-red-200" 
//                     : "bg-green-100 text-green-700 border border-green-200"
//                 }`}>
//                     {isOutOfStock ? <AlertCircle size={14}/> : <CheckCircle2 size={14}/>}
//                     {isOutOfStock ? "Out of Stock" : "Available"}
//                 </span>
//             </div>
//           </div>

//           <Separator className="bg-gray-200" />

//           {/* Price Card */}
//           <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
//              <div className="flex flex-col mb-6">
//                 <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Pricing for {product.unit || 'unit'}</p>
//                 <div className="flex items-end gap-3">
//                     <PriceView
//                         price={product.price}
//                         discount={product.discount}
//                         className="text-4xl font-black text-gray-900"
//                     />
//                 </div>
//                 <p className="text-[10px] text-gray-400 font-medium mt-1">
//                     Inclusive of all taxes. 
//                     {product.stock && product.stock < 50 && (
//                         <span className="text-red-600 font-black ml-2 uppercase">
//                             Low Stock: {product.stock} Left!
//                         </span>
//                     )}
//                 </p>
//              </div>

//              {/* QUICK STATS FOR FARMERS */}
//              <div className="grid grid-cols-3 gap-2 pb-6">
//                 <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl border border-gray-100">
//                     <Package size={16} className="text-green-600 mb-1" />
//                     <span className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter text-center leading-none">Tray Size</span>
//                     <span className="text-xs font-black">{product.trayPlantCount || 'N/A'}</span>
//                 </div>
//                 <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl border border-gray-100">
//                     <Calendar size={16} className="text-blue-600 mb-1" />
//                     <span className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter text-center leading-none">Batch Age</span>
//                     <span className="text-xs font-black">Verified</span>
//                 </div>
//                 <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl border border-gray-100">
//                     <Target size={16} className="text-orange-600 mb-1" />
//                     <span className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter text-center leading-none">Best Soil</span>
//                     <span className="text-xs font-black truncate w-full text-center">{product.soilRecommendation || 'Any'}</span>
//                 </div>
//              </div>

//              <div className="flex flex-col gap-3">
//                 <div className="w-full">
//                      <AddToCartButton product={product} className="w-full h-14 text-base font-black uppercase tracking-widest shadow-md" />
//                 </div>
                
//                 <div className="flex gap-2">
//                     {product.whatsappNumber && (
//                         <div className="flex-1">
//                             <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                             <Button
//                                 variant="outline"
//                                 className="w-full h-12 text-sm font-black border-2 border-green-600 text-green-700 hover:bg-green-50"
//                             >
//                                 <FaWhatsapp className="mr-2 h-5 w-5" />
//                                 CONSULT EXPERT
//                             </Button>
//                             </InquiryDrawer>
//                         </div>
//                     )}
//                     <FavoriteButton showProduct={true} product={product} />
//                 </div>
//             </div>
//           </div>

//           {/* Master Characteristics Accordion */}
//           <ProductCharacteristics product={product} />

//           {/* Description Section */}
//           <div className="space-y-4 pt-4">
//              <div className="flex items-center gap-2 text-gray-900">
//                 <Info size={20} className="text-green-700" />
//                 <h3 className="text-xl font-black uppercase tracking-tighter">Description</h3>
//              </div>
//              <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-gray-600 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//                  {product.detailedDescription ? (
//                       <PortableText value={product.detailedDescription} />
//                  ) : (
//                       <p className="font-medium">{product.shortDescription || "Contact us for detailed information about this variety."}</p>
//                  )}
//              </div>
//           </div>

//           <Separator className="bg-gray-200 mt-6" />

//           {/* Meta Links Section */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
//             <AddToCompareButton product={product} />
//             <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber || ""}>
//                  <button className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-green-700 transition-colors p-3 hover:bg-white border border-transparent hover:border-gray-100 rounded-xl">
//                     <HelpCircle size={18} /> Ask Expert
//                  </button>
//             </InquiryDrawer>
//             <DeliveryInfoModal />
//             <ShareModal productName={product.name || "Product"} />
//           </div>

//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SingleProductPage;






















// import { getProductBySlug } from "@/sanity/queries";
// import { PortableText } from "@portabletext/react";
// import { Sprout } from "lucide-react";
// import React from "react";
// import { 
//   StarIcon, Truck, CornerDownLeft, ShieldCheck, 
//   AlertCircle, CheckCircle2, HelpCircle,
//   Award, Package, Calendar, Target, Info
// } from "lucide-react";

// // Components
// import Container from "@/components/Container";
// import ImageView from "@/components/ImageView";
// import PriceView from "@/components/PriceView";
// import AddToCartButton from "@/components/AddToCartButton";
// import FavoriteButton from "@/components/FavoriteButton";
// import ProductCharacteristics from "@/components/ProductCharacteristics";
// import { InquiryDrawer } from "@/components/InquiryDrawer";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator"; 
// import { FaWhatsapp } from "react-icons/fa";
// import ShareModal from "@/components/ShareModel";
// import AddToCompareButton from "@/components/AddToCompareButton";
// import DeliveryInfoModal from "@/components/DeliveryInfoModel";
// import ProductCard from "@/components/ProductCard";

// import { Product } from "@/sanity.types"; 
// import Link from "next/link";

// interface Props {
//   params: { slug: string };
// }

// const SingleProductPage = async ({ params }: Props) => {
//   const { slug } = await params;
//   const product = (await getProductBySlug(slug)) as any; 

// //   if (!product) {
// //     return (
// //       <Container className="py-20 flex flex-col items-center justify-center text-center">
// //         <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Product Not Found</h1>
// //         <Button className="mt-6 bg-green-700 hover:bg-green-800 h-12 px-8 font-bold rounded-xl" asChild>
// //             <Link href="/">Back to Home</Link>
// //         </Button>
// //       </Container>
// //     );
// //   }


// if (!product) { /* ... keep existing 404 logic ... */ }

//   const isOutOfStock = product.batchStatus === "soldout";
//   const isFreshBatch = product.batchStatus === "booking";
//   const prepDays = product.preparationTime || 15;

//   return (
//     <Container className="py-12 bg-gray-50/30 min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
//         {/* LEFT COLUMN stays same as your previous version */}
//         <div className="space-y-10 lg:sticky lg:top-24">
//            {/* ... keep existing ImageView and Recommendation ... */}
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="flex flex-col gap-8">
//           <div className="space-y-4">
//              {/* ... keep category and name logic ... */}
//              <h1 className="text-5xl font-black tracking-tighter text-gray-900 leading-[1.1]">{product.name}</h1>
//           </div>

//           {/* Pricing & Cart Action Card */}
//           <div className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm space-y-8">
//             <div className="flex flex-col">
//               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Investment Amount</p>
//               <div className="flex items-baseline gap-4">
//                   {/* SLASHED PRICE LOGIC */}
//                   {product.discount > 0 && (
//                     <span className="text-3xl text-gray-400 line-through font-bold decoration-red-500/50">
//                       ₹{product.price}
//                     </span>
//                   )}
//                   <PriceView
//                     price={product.price}
//                     discount={product.discount}
//                     className="text-6xl font-black text-gray-900 tracking-tighter"
//                   />
//               </div>
//             </div>

//             {/* TRUST BADGE: Fresh Batch Cultivation */}
//             {product.productVariant === "plants" && (
//               <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-4">
//                 <div className="bg-green-600 p-2 rounded-xl text-white">
//                   <Sprout size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm font-black text-green-900 uppercase tracking-tight">
//                     {isFreshBatch ? "Fresh Batch Booking" : "Ready for Dispatch"}
//                   </p>
//                   <p className="text-[11px] text-green-700 font-bold leading-relaxed">
//                     {isFreshBatch 
//                       ? `Seedlings will be scientifically hardened for ${prepDays} days post-booking to ensure 100% field survival.` 
//                       : "Current batch is expertly hardened and ready for immediate transplanting."}
//                   </p>
//                 </div>
//               </div>
//             )}

//             <div className="flex flex-col gap-4">
//               {/* Button logic handled inside AddToCartButton component below */}
//               <AddToCartButton product={product} className="w-full h-20 text-xl font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:scale-[1.01] transition-transform" />
              
//               <div className="flex gap-3 h-16">
//                  {/* ... keep WhatsApp and Favorite logic ... */}
//               </div>
//             </div>
//           </div>

//           <ProductCharacteristics product={product} />
//           {/* ... keep Description Section ... */}
//         </div>
//       </div>
//     </Container>
//   );
// };

//   const isOutOfStock = product.stock === 0;

//   return (
//     <Container className="py-12 bg-gray-50/30 min-h-screen">
//       {/* MAIN GRID - FIXED GAP SYSTEM */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
//         {/* ================= LEFT COLUMN: IMAGES & RECOMMENDATION ================= */}
//         <div className="space-y-10 lg:sticky lg:top-24">
//             {/* Image display with attractive rounded corners and shadow */}
//             <div className="bg-white rounded-[2.5rem] overflow-hidden border-2 border-gray-100 aspect-square relative shadow-sm group">
//                  {product.images && (
//                     <ImageView images={product.images} stock={product.stock} />
//                  )}
//             </div>
            
//             {/* Attractive Hover-Effect Icons */}
//             <div className="grid grid-cols-3 gap-4">
//                 <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-300">
//                     <ShieldCheck className="text-green-600 mb-2" size={28} />
//                     <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest leading-tight">100%<br/>Original</span>
//                 </div>
//                 <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
//                     <Truck className="text-blue-600 mb-2" size={28} />
//                     <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest leading-tight">Fast<br/>Shipping</span>
//                 </div>
//                 <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300">
//                     <CornerDownLeft className="text-orange-600 mb-2" size={28} />
//                     <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest leading-tight">Easy<br/>Returns</span>
//                 </div>
//             </div>

//             {/* Recommendation Banner - correctly integrated */}
//             <div className="pt-8 border-t border-gray-200">
//                 <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-4 ml-1">Consultant Recommendation</h4>
//                 {product.relatedProducts && product.relatedProducts.length > 0 ? (
//                    <ProductCard product={product.relatedProducts[0]} isRecommended={true} />
//                 ) : (
//                    <div className="p-8 bg-white rounded-[2rem] border border-dashed border-gray-200 text-center">
//                       <p className="text-gray-400 font-bold text-sm">New batches arriving soon...</p>
//                    </div>
//                 )}
//             </div>
//         </div>

//         {/* ================= RIGHT COLUMN: DETAILS ================= */}
//         <div className="flex flex-col gap-8">
          
//           {/* Header Section */}
//           <div className="space-y-4">
//              <div className="flex items-center gap-2 mb-2 flex-wrap">
//                 {product.categories && product.categories.length > 0 && (
//                     <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
//                         {product.categories[0]?.title || "Product"} 
//                     </span>
//                 )}
//                 <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100 shadow-sm">
//                     <Award size={14} /> Expert Consultancy
//                 </span>
//              </div>

//             <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
//                 {product.nursery?.title || "Bajbalkar Ropvatika"}
//             </p>
//             <h1 className="text-5xl font-black tracking-tighter text-gray-900 leading-[1.1]">
//               {product.name}
//             </h1>

//             <div className="flex items-center justify-between py-2">
//                 <div className="flex items-center gap-3">
//                     <div className="flex text-yellow-400">
//                         {[...Array(5)].map((_, index) => (
//                         <StarIcon key={index} size={18} fill="currentColor" />
//                         ))}
//                     </div>
//                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">(120 Reviews)</span>
//                 </div>
                
//                 <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-sm ${
//                     isOutOfStock 
//                     ? "bg-red-50 text-red-700 border border-red-100" 
//                     : "bg-green-50 text-green-700 border border-green-100"
//                 }`}>
//                     {isOutOfStock ? <AlertCircle size={14}/> : <CheckCircle2 size={14}/>}
//                     {isOutOfStock ? "Out of Stock" : "Batch Available"}
//                 </span>
//             </div>
//           </div>

//           {/* Pricing & Cart Action Card */}
//           <div className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm space-y-8">
//              <div className="flex flex-col">
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Total Investment</p>
//                 <div className="flex items-end gap-3">
//                     <PriceView
//                         price={product.price}
//                         discount={product.discount}
//                         className="text-6xl font-black text-gray-900 tracking-tighter"
//                     />
//                 </div>
//                 <p className="text-xs text-gray-400 font-medium mt-3 uppercase tracking-tighter italic">
//                    * Inclusive of all taxes. 
//                     {product.stock && product.stock < 50 && (
//                         <span className="text-red-600 font-black ml-2">
//                             Low Stock Alert: {product.stock} Left!
//                         </span>
//                     )}
//                 </p>
//              </div>

//              {/* QUICK STATS FOR FARMERS - DATA OVERVIEW */}
//              <div className="grid grid-cols-3 gap-3">
//                 <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white transition-colors duration-300">
//                     <Package size={20} className="text-green-600 mb-2" />
//                     <span className="text-[9px] text-gray-400 font-black uppercase tracking-tighter mb-1">Tray Size</span>
//                     <span className="text-sm font-black">{product.trayPlantCount || '104'} Plants</span>
//                 </div>
//                 <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white transition-colors duration-300">
//                     <Calendar size={20} className="text-blue-600 mb-2" />
//                     <span className="text-[9px] text-gray-400 font-black uppercase tracking-tighter mb-1">Batch Age</span>
//                     <span className="text-sm font-black">Ready Stock</span>
//                 </div>
//                 <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white transition-colors duration-300">
//                     <Target size={20} className="text-orange-600 mb-2" />
//                     <span className="text-[9px] text-gray-400 font-black uppercase tracking-tighter mb-1">Best Soil</span>
//                     <span className="text-sm font-black truncate w-full text-center">{product.soilRecommendation || 'Any Soil'}</span>
//                 </div>
//              </div>

//              <div className="flex flex-col gap-4">
//                 <div className="w-full">
//                      <AddToCartButton product={product} className="w-full h-16 text-lg font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:scale-[1.01] transition-transform" />
//                 </div>
                
//                 <div className="flex gap-3 h-16">
//                     {product.whatsappNumber && (
//                         <div className="flex-[4]">
//                             <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
//                             <Button
//                                 variant="outline"
//                                 className="w-full h-full text-base font-black border-4 border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-2xl transition-all duration-300"
//                             >
//                                 <FaWhatsapp className="mr-3 h-6 w-6" />
//                                 CONSULT ON WHATSAPP
//                             </Button>
//                             </InquiryDrawer>
//                         </div>
//                     )}
//                     <div className="flex-1">
//                         <FavoriteButton showProduct={true} product={product} />
//                     </div>
//                 </div>
//             </div>
//           </div>

//           {/* Master Specifications Accordion */}
//           <div className="hover:shadow-lg transition-shadow duration-300 rounded-2xl">
//              <ProductCharacteristics product={product} />
//           </div>

//           {/* Detailed Description Section */}
//           <div className="space-y-5 pt-4">
//              <div className="flex items-center gap-3 text-gray-900 ml-1">
//                 <div className="p-2 bg-green-700 rounded-lg text-white">
//                   <Info size={20} />
//                 </div>
//                 <h3 className="text-2xl font-black uppercase tracking-tighter">Varietal Details</h3>
//              </div>
//              <div className="prose prose-slate prose-lg max-w-none text-gray-600 bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm leading-relaxed">
//                  {product.detailedDescription ? (
//                       <PortableText value={product.detailedDescription} />
//                  ) : (
//                       <p className="font-bold text-gray-500 italic">
//                         {product.shortDescription || "Our experts are available to provide comprehensive data on this specific variety. Click 'Consult' for more info."}
//                       </p>
//                  )}
//              </div>
//           </div>

//           <Separator className="bg-gray-200 mt-10" />

//           {/* Action Footer Links */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 pb-12">
//             <AddToCompareButton product={product} />
            
//             <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber || ""}>
//                  <button className="w-full flex items-center justify-center gap-2 text-xs font-black text-gray-500 hover:text-green-700 transition-all p-4 hover:bg-white border-2 border-transparent hover:border-gray-100 rounded-2xl uppercase tracking-widest">
//                     <HelpCircle size={20} /> Ask Advice
//                  </button>
//             </InquiryDrawer>

//             <DeliveryInfoModal />
//             <ShareModal productName={product.name || "Product"} />
//           </div>

//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SingleProductPage;

































import { getProductBySlug } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import React from "react";
import { 
  StarIcon, Truck, CornerDownLeft, ShieldCheck, 
  AlertCircle, CheckCircle2, HelpCircle,
  Award, Package, Calendar, Target, Info, Sprout,
  Link
} from "lucide-react";

// Components
import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import AddToCartButton from "@/components/AddToCartButton";
import FavoriteButton from "@/components/FavoriteButton";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import { InquiryDrawer } from "@/components/InquiryDrawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"; 
import { FaWhatsapp } from "react-icons/fa";
import ShareModal from "@/components/ShareModel";
import AddToCompareButton from "@/components/AddToCompareButton";
import DeliveryInfoModal from "@/components/DeliveryInfoModel";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: { slug: string };
}

const SingleProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  const product = (await getProductBySlug(slug)) as any; 

  if (!product) {
    return (
      <Container className="py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Product Not Found</h1>
        <Button className="mt-6 bg-green-700 hover:bg-green-800 h-12 px-8 font-bold rounded-xl" asChild>
            <Link href="/">Back to Home</Link>
        </Button>
      </Container>
    );
  }

  const isOutOfStock = product.batchStatus === "soldout";
  const isFreshBatch = product.batchStatus === "booking";
  const prepDays = product.preparationTime || 15;

  return (
    <Container className="py-12 bg-gray-50/30 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN: IMAGES & RECOMMENDATION */}
        <div className="space-y-10 lg:sticky lg:top-24">
            <div className="bg-white rounded-[2.5rem] overflow-hidden border-2 border-gray-100 aspect-square relative shadow-sm group">
                 {product.images && (
                    <ImageView images={product.images} stock={product.stock} />
                 )}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <ShieldCheck className="text-green-600 mb-2" size={28} />
                    <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest">100% Original</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <Truck className="text-blue-600 mb-2" size={28} />
                    <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Safe Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <Sprout className="text-orange-600 mb-2" size={28} />
                    <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Expert Care</span>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Consultant Recommendation</h4>
                {product.relatedProducts?.[0] ? (
                   <ProductCard product={product.relatedProducts[0]} isRecommended={true} />
                ) : (
                   <div className="p-8 bg-white rounded-[2rem] border border-dashed border-gray-200 text-center">
                      <p className="text-gray-400 font-bold text-sm">New batches arriving soon...</p>
                   </div>
                )}
            </div>
        </div>

        {/* RIGHT COLUMN: DETAILS */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
             <div className="flex items-center gap-2 flex-wrap">
                {product.categories?.[0] && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                        {product.categories[0]?.title} 
                    </span>
                )}
                <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
                    <Award size={14} /> Expert Consultancy
                </span>
             </div>
            <h1 className="text-5xl font-black tracking-tighter text-gray-900 leading-[1.1]">{product.name}</h1>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} fill="currentColor" />)}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">(120 Reviews)</span>
                </div>
                <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${
                    isOutOfStock ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
                }`}>
                    {isOutOfStock ? <AlertCircle size={14}/> : <CheckCircle2 size={14}/>}
                    {isOutOfStock ? "Sold Out" : isFreshBatch ? "Booking Open" : "Ready Batch"}
                </span>
            </div>
          </div>

          {/* Pricing & Cart Action Card */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm space-y-8">
             <div className="flex flex-col">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Investment Amount</p>
                <div className="flex items-baseline gap-4">
                    {product.discount > 0 && (
                      <span className="text-3xl text-gray-400 line-through font-bold decoration-red-500/50">₹{product.price}</span>
                    )}
                    <PriceView price={product.price} discount={product.discount} className="text-6xl font-black text-gray-900 tracking-tighter" />
                </div>
             </div>

             {/* FRESH BATCH TRUST BADGE */}
             {product.productVariant === "plants" && (
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-4">
                  <div className="bg-green-600 p-2 rounded-xl text-white"><Sprout size={24} /></div>
                  <div>
                    <p className="text-sm font-black text-green-900 uppercase">{isFreshBatch ? "Fresh Batch Booking" : "Ready for Dispatch"}</p>
                    <p className="text-[11px] text-green-700 font-bold leading-relaxed">
                      {isFreshBatch ? `Scientifically hardened for ${prepDays} days post-booking.` : "Current batch is expertly hardened & ready."}
                    </p>
                  </div>
                </div>
             )}

             <AddToCartButton product={product} />

             <div className="flex gap-3">
                {product.whatsappNumber && (
                    <div className="flex-1">
                        <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
                            <Button variant="outline" className="w-full h-16 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-2xl font-black transition-all">
                                <FaWhatsapp className="mr-3 h-6 w-6" /> CONSULT WHATSAPP
                            </Button>
                        </InquiryDrawer>
                    </div>
                )}
                <FavoriteButton showProduct={true} product={product} />
             </div>
          </div>

          <ProductCharacteristics product={product} />

          <div className="prose prose-slate prose-lg max-w-none text-gray-600 bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm leading-relaxed">
               {product.detailedDescription ? <PortableText value={product.detailedDescription} /> : <p>{product.shortDescription}</p>}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;

