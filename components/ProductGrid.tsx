"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import Container from "./Container";
import { productType } from "@/constants/data";
import { Product } from "@/sanity.types"; // Keep this import
import NoProductAvailable from "./NoProductAvailable";

// 1️⃣ DEFINITION: Create a type that matches the *Expanded* data
// We take the base Product, remove the original 'categories', and add our own version
interface ProductProps extends Omit<Product, "categories"> {
  categories?: { title: string }[];
}

const ProductGrid = () => {
  // 2️⃣ STATE: Use the new interface here
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [selectedTab, setSelectedTab] = useState(productType[0]?.value || "seeds");

  // 3️⃣ QUERY: Update projection to return Objects {title: "Val"}, not just Strings "Val"
  // Changed `categories[]->title` to `categories[]->{title}`
  const query = `*[_type == "product" && productVariant == $variant] | order(name asc){
    ...,
    "slug": slug.current,
    "categories": categories[]->{title}
  }`;

  const params = { variant: selectedTab };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (error) {
        console.error("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <Container className="flex flex-col lg:px-0 my-10">
      
      {/* Tab Bar */}
      <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
        {productType.map((item) => (
            <button
                key={item.value}
                onClick={() => setSelectedTab(item.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedTab === item.value
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-green-600"
                }`}
            >
                {item.title}
            </button>
        ))}
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 min-h-80 bg-gray-50 rounded-lg w-full">
            <Loader2 className="w-6 h-6 animate-spin text-green-600" />
            <p className="mt-2 text-sm text-gray-500">Loading products...</p>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <AnimatePresence key={product._id}>
              <motion.div
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* 4️⃣ PRODUCT CARD: 
                   Now TypeScript knows 'product' matches what ProductCard expects 
                */}
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </Container>
  );
};

export default ProductGrid;