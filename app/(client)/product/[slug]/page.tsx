import { getProductBySlug } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import React from "react";
import { 
  StarIcon, 
  Truck, 
  CornerDownLeft, 
  ShieldCheck, 
  Share2, 
  BarChart2, 
  HelpCircle,
  AlertCircle,
  CheckCircle2
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

// Types
import { Product } from "@/sanity.types"; 
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

const SingleProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  
  // ✅ FIX 1: Type Assertion
  // We treat the query result as 'Product' to satisfy downstream components.
  // This bypasses the mismatch between "Document Type" and "Query Result Type".
  const product = (await getProductBySlug(slug)) as unknown as Product | null;

  // 2. Handle "Product Not Found"
  if (!product) {
    return (
      <Container className="py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Not Found</h1>
        <p className="text-gray-500">The item you are looking for does not exist or has been moved.</p>
        <Button className="mt-6" asChild>
            <Link href="/">Back to Home</Link>
        </Button>
      </Container>
    );
  }

  const isOutOfStock = product.stock === 0;

  return (
    <Container className="py-10 bg-gray-50/50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* ================= LEFT COLUMN: IMAGES ================= */}
        <div className="w-full">
            <div className="sticky top-24 space-y-4">
                 {product.images && (
                    <ImageView images={product.images} isStock={product.stock} />
                 )}
                 
                 <div className="grid grid-cols-3 gap-2 mt-6">
                    <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                        <ShieldCheck className="text-green-600 mb-1" size={20} />
                        <span className="text-[10px] uppercase font-bold text-gray-500">100% Original</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                        <Truck className="text-blue-600 mb-1" size={20} />
                        <span className="text-[10px] uppercase font-bold text-gray-500">Fast Shipping</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                        <CornerDownLeft className="text-orange-600 mb-1" size={20} />
                        <span className="text-[10px] uppercase font-bold text-gray-500">Easy Returns</span>
                    </div>
                 </div>
            </div>
        </div>

        {/* ================= RIGHT COLUMN: DETAILS ================= */}
        <div className="flex flex-col gap-6">
          
          {/* Header Section */}
          <div>
             <div className="flex items-center gap-2 mb-2">
                {product.categories && product.categories.length > 0 && (
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {/* TypeScript safe check for expanded category objects */}
                        {/* @ts-expect-error - categories expanded in GROQ query */}
                        {product.categories[0]?.title || "Product"} 
                    </span>
                )}
                     {product.nursery && (
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {/* @ts-expect-error - nursery expanded in GROQ query */}
                                {product.nursery?.title || "Nursery"}
                            </span>
                     )}
             </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} size={16} fill="currentColor" />
                        ))}
                    </div>
                    <span className="text-sm font-medium text-gray-500">(120 Reviews)</span>
                </div>
                
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    isOutOfStock 
                    ? "bg-red-100 text-red-700 border border-red-200" 
                    : "bg-green-100 text-green-700 border border-green-200"
                }`}>
                    {isOutOfStock ? <AlertCircle size={14}/> : <CheckCircle2 size={14}/>}
                    {isOutOfStock ? "Out of Stock" : "In Stock"}
                </span>
            </div>
          </div>

          <Separator className="bg-gray-200" />

          {/* Price & Actions Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
             <div className="flex flex-col">
                <div className="flex items-end gap-3">
                    <PriceView
                        price={product.price}
                        discount={product.discount}
                        unitLabel={(product?.sellingUnit === "other" ? product?.otherSellingUnit : product?.sellingUnit) || product?.unit}
                        className="text-3xl font-bold text-gray-900"
                    />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    Inclusive of all taxes. 
                    {product.stock && product.stock < 10 && product.stock > 0 && (
                        <span className="text-orange-600 font-medium ml-1">
                            Only {product.stock} left!
                        </span>
                    )}
                </p>
             </div>

             <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                     <AddToCartButton product={product} />
                </div>
                
                {product.whatsappNumber && (
                    <div className="flex-1">
                        <InquiryDrawer product={product} whatsappNumber={product.whatsappNumber}>
                        <Button
                            variant="outline"
                            className="w-full h-11 text-base font-semibold border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
                        >
                            <FaWhatsapp className="mr-2 h-5 w-5" />
                            Inquire
                        </Button>
                        </InquiryDrawer>
                    </div>
                )}
                
                <div className="sm:w-auto">
                     <FavoriteButton showProduct={true} product={product} />
                </div>
            </div>
          </div>

          {/* Dynamic Characteristics */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
             <ProductCharacteristics product={product} />
          </div>

          {/* Description */}
          <div className="space-y-4">
             <h3 className="text-lg font-bold text-gray-900 border-l-4 border-shop_orange pl-3">
                Description
             </h3>
             <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-gray-600">
                 {/* ✅ FIX 2: Removed 'product.description' as it no longer exists in your schema */}
                 {product.detailedDescription ? (
                      <PortableText value={product.detailedDescription} />
                 ) : (
                      <p>{product.shortDescription || "No detailed description available."}</p>
                 )}
             </div>
          </div>

          <Separator className="bg-gray-200" />

          {/* Meta Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <button className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
                <BarChart2 size={18} />
                Compare
            </button>
            <button className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
                <HelpCircle size={18} />
                Ask Question
            </button>
            <button className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
                <Truck size={18} />
                Delivery Info
            </button>
            <button className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md">
                <Share2 size={18} />
                Share
            </button>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;