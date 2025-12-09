"use client";

import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";
import { InquiryDrawer } from "./InquiryDrawer";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import AddToWishlistButton from "./AddToWishlistButton";

// ✅ LOCAL TYPE DEFINITION
// This matches what your GROQ query actually returns (expanded categories)
// vs what the schema defines (references).
type ProductProps = Omit<Product, 'categories'> & {
  status?: string;
  shortDescription?: string;
  whatsappNumber?: string;
  categories?: Array<{ title: string }>;
};

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="text-sm border-[1px] border-dark_blue/20 rounded-md bg-white group flex flex-col h-full">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && product.images[0] && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="ProductImage"
              loading="lazy"
              width={700}
              height={700}
              className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect ${
                product?.stock !== 0
                  ? "group-hover:scale-105"
                  : "opacity-50"
              }`}
            />
          </Link>
        )}

        {product?.status === "sale" && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green hoverEffect group-hover:text-shop_light_green">
            Sale!
          </p>
        )}

        {product?.status === "new" && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green hoverEffect group-hover:text-shop_light_green">
            New
          </p>
        )}

        {product?.status === "hot" && (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
            />
          </Link>
        )}

        {/* ✅ FIX: Cast to 'any' to bypass strict type mismatch on categories. 
            The Wishlist button likely doesn't need the categories field anyway. */}
        <AddToWishlistButton product={product as any} />
      </div>

      <div className="p-3 flex flex-col gap-2 flex-grow">
        {/* product details */}
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
            {product?.categories
              ?.map((cat) => cat.title)
              .join(", ")}
          </p>
        )}
        <Title className="text-sm line-clamp-1 font-bold">{product?.name}</Title>

        {product.shortDescription ? (
          <p className="text-xs text-gray-500 line-clamp-2 mt-1 min-h-[2.5em]">
            {product.shortDescription}
          </p>
        ) : (
          <div className="min-h-[2.5em]" /> 
        )}

        <div className="flex items-center gap-0.5">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                size={12}
                key={index}
                className={
                  index < 4 ? "text-shop_lighter_green" : "text-shop_light_text"
                }
                fill={index < 4 ? "#93D991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-shop_light_text text-xs tracking-wide">5 Reviews</p>
        </div>

        <div className="flex items-center gap-2.5">
          <p className="font-medium">In Stock</p>
          <p
            className={`${
              product?.stock === 0
                ? "text-red-600"
                : "text-shop_light_green/80 font-semibold "
            }`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
          </p>
        </div>

        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />

        <div className="mt-auto pt-2 flex flex-col gap-2">
          {/* Cast to any here as well if AddToCart is strict */}
          <AddToCartButton
            product={product as any}
            className="rounded-full flex-1"
          />
          {product.whatsappNumber && (
            <InquiryDrawer
              product={product as any}
              whatsappNumber={product.whatsappNumber}
            >
              <Button
                variant="outline"
                className="rounded-full flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                <FaWhatsapp className="mr-2 h-4 w-4" />
                Inquire
              </Button>
            </InquiryDrawer>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;