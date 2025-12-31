import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Title from "@/components/Title";
import { TagIcon } from "lucide-react";
import Container from "@/components/Container";

interface Props {
  categories: any[];
}

const HomeBlogCategories = ({ categories }: Props) => {
  if (!categories || categories.length === 0) return null;

  return (
    <Container className="py-10">
      <Title className="mb-8 text-center text-3xl font-bold uppercase">
        Explore Blog Topics
      </Title>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat._id}
            href={`/blog/category/${cat?.slug}`}
            className="group block relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-shop_dark_green"
          >
            {/* Category Image */}
            <div className="relative h-40 w-full bg-shop_light_green/10">
              {cat.promoImage ? (
                <Image
                unoptimized
                  src={urlFor(cat.promoImage).url()}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-shop_dark_green/40">
                  <TagIcon size={40} />
                </div>
              )}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              
              {/* Text Content */}
              <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wider drop-shadow-md group-hover:scale-110 transition-transform">
                  {cat.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default HomeBlogCategories;