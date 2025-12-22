// "use client";

// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import { motion, AnimatePresence } from "motion/react";
// import { client } from "@/sanity/lib/client";
// import { Loader2 } from "lucide-react";
// import Container from "./Container";
// import { productType } from "@/constants/data";
// import { Product } from "@/sanity.types"; // Keep this import
// import NoProductAvailable from "./NoProductAvailable";

// // 1️⃣ DEFINITION: Create a type that matches the *Expanded* data
// // We take the base Product, remove the original 'categories', and add our own version
// interface ProductProps extends Omit<Product, "categories"> {
//   categories?: { title: string }[];
// }

// const ProductGrid = () => {
//   // 2️⃣ STATE: Use the new interface here
//   const [products, setProducts] = useState<ProductProps[]>([]);
//   const [loading, setLoading] = useState(false);
  
//   const [selectedTab, setSelectedTab] = useState(productType[0]?.value || "seeds");

//   // 3️⃣ QUERY: Update projection to return Objects {title: "Val"}, not just Strings "Val"
//   // Changed `categories[]->title` to `categories[]->{title}`
//   const query = `*[_type == "product" && productVariant == $variant] | order(name asc){
//     ...,
//     "slug": slug,
//     "categories": categories[]->{title}
//   }`;

//   const params = { variant: selectedTab };

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await client.fetch(query, params);
//         setProducts(response);
//       } catch (error) {
//         console.error("Product fetching Error", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [selectedTab]);

//   return (
//     <Container className="flex flex-col lg:px-0 my-10">
      
//       {/* Tab Bar */}
//       <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
//         {productType.map((item) => (
//             <button
//                 key={item.value}
//                 onClick={() => setSelectedTab(item.value)}
//                 className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
//                     selectedTab === item.value
//                     ? "bg-green-600 text-white"
//                     : "bg-white text-gray-600 border border-gray-200 hover:border-green-600"
//                 }`}
//             >
//                 {item.title}
//             </button>
//         ))}
//       </div>

//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-20 min-h-80 bg-gray-50 rounded-lg w-full">
//             <Loader2 className="w-6 h-6 animate-spin text-green-600" />
//             <p className="mt-2 text-sm text-gray-500">Loading products...</p>
//         </div>
//       ) : products?.length ? (
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products?.map((product) => (
//             <AnimatePresence key={product._id}>
//               <motion.div
//                 layout
//                 initial={{ opacity: 0.2 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               >
//                 {/* 4️⃣ PRODUCT CARD: 
//                    Now TypeScript knows 'product' matches what ProductCard expects 
//                 */}
//                 <ProductCard product={product} />
//               </motion.div>
//             </AnimatePresence>
//           ))}
//         </div>
//       ) : (
//         <NoProductAvailable selectedTab={selectedTab} />
//       )}
//     </Container>
//   );
// };

// export default ProductGrid;
















"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { client } from "@/sanity/lib/client";
import { Loader2, Leaf, Sprout, Droplets, Hammer } from "lucide-react";
import Container from "./Container";
import NoProductAvailable from "./NoProductAvailable";

const productTabs = [
  { title: "Plants", value: "plants", icon: <Leaf size={16}/> },
  { title: "Seeds", value: "seeds", icon: <Sprout size={16}/> },
  { title: "Fertilizer", value: "fertilizer", icon: <Droplets size={16}/> },
  // { title: "Machinery", value: "machinery", icon: <Hammer size={16}/> },
];

const ProductGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("plants");

  const query = `*[_type == "product" && productVariant == $variant] | order(name asc){
    ...,
    "slug": slug,
    "nursery": nursery->{title},
    "plantBreedData": plantBreedData->,
    "fertilizerFormulaData": fertilizerFormulaData->,
    "categories": categories[]->{title}
  }`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, { variant: selectedTab });
        setProducts(response);
      } catch (error) {
        console.error("Fetch Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <Container className="py-16">
      <div className="flex flex-col items-center gap-8 mb-12">
        <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Explore Our Nursery</h2>
        
        {/* Selection Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap bg-gray-100 p-2 rounded-2xl border border-gray-200">
          {productTabs.map((item) => (
            <button
              key={item.value}
              onClick={() => setSelectedTab(item.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 ${
                selectedTab === item.value
                  ? "bg-green-700 text-white shadow-xl scale-105"
                  : "text-gray-500 hover:bg-white hover:text-green-700"
              }`}
            >
              {item.icon} {item.title}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
          <p className="mt-4 font-bold text-gray-400 uppercase tracking-widest">Loading Batch...</p>
        </div>
      ) : products?.length > 0 ? (
        // Standardized Grid with proper gaps
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div key={product._id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </Container>
  );
};

export default ProductGrid;













// "use client";

// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import { motion } from "motion/react";
// import { client } from "@/sanity/lib/client";
// import { Loader2, Leaf, Sprout, Droplets, Hammer } from "lucide-react";
// import Container from "./Container";
// import NoProductAvailable from "./NoProductAvailable";

// const productTabs = [
//   { title: "Plants", value: "plants", icon: <Leaf size={16}/> },
//   { title: "Seeds", value: "seeds", icon: <Sprout size={16}/> },
//   { title: "Fertilizer", value: "fertilizer", icon: <Droplets size={16}/> },
//   { title: "Machinery", value: "machinery", icon: <Hammer size={16}/> },
// ];

// const ProductGrid = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true); // Start as true
//   const [selectedTab, setSelectedTab] = useState("plants");
//   const [mounted, setMounted] = useState(false);

//   // Set mounted to true after initial render to ensure client-side only 
//   // features don't trigger mismatch
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const query = `*[_type == "product" && productVariant == $variant] | order(name asc){
//         ...,
//         "slug": slug,
//         "nursery": nursery->{title},
//         "plantBreedData": plantBreedData->,
//         "fertilizerFormulaData": fertilizerFormulaData->,
//         "categories": categories[]->{title}
//       }`;
//       try {
//         const response = await client.fetch(query, { variant: selectedTab });
//         setProducts(response);
//       } catch (error) {
//         console.error("Fetch Error", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (mounted) fetchData();
//   }, [selectedTab, mounted]);

//   if (!mounted) return null; // Or a skeleton loader

//   return (
//     <Container className="py-16">
//       <div className="flex flex-col items-center gap-8 mb-12">
//         <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">
//           Explore Our Nursery
//         </h2>
        
//         <div className="flex items-center justify-center gap-3 flex-wrap bg-gray-100 p-2 rounded-2xl border border-gray-200">
//           {productTabs.map((item) => (
//             <button
//               key={item.value}
//               suppressHydrationWarning // Fixes the fdprocessedid error
//               onClick={() => setSelectedTab(item.value)}
//               className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 ${
//                 selectedTab === item.value
//                   ? "bg-green-700 text-white shadow-xl scale-105"
//                   : "text-gray-500 hover:bg-white hover:text-green-700"
//               }`}
//             >
//               {item.icon} {item.title}
//             </button>
//           ))}
//         </div>
//       </div>

//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-20">
//           <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
//           <p className="mt-4 font-bold text-gray-400 uppercase tracking-widest">
//             Loading Batch...
//           </p>
//         </div>
//       ) : products?.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
//           {products.map((product) => (
//             <motion.div key={product._id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <NoProductAvailable selectedTab={selectedTab} />
//       )}
//     </Container>
//   );
// };

// export default ProductGrid;