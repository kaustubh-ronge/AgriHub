// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import ProductCard from "./ProductCard";
// // // import { motion, AnimatePresence } from "motion/react";
// // // import { client } from "@/sanity/lib/client";
// // // import { Loader2 } from "lucide-react";
// // // import Container from "./Container";
// // // import { productType } from "@/constants/data";
// // // import { Product } from "@/sanity.types";
// // // import HomeTabBar from "./HomeTabBar";
// // // import NoProductAvailable from "./NoProduct";

// // // const ProductGrid = () => {
// // //   const [products, setProducts] = useState<Product[]>([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
// // //  const query = `*[_type == "product" && variant == $variant] | order(name asc){
// // //   ...,"categories": categories[]->title,
// // //   whatsappNumber
// // // }`;
// // //   const params = { variant: selectedTab.toLowerCase() };

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const response = await client.fetch(query, params);
// // //         setProducts(await response);
// // //       } catch (error) {
// // //         console.log("Product fetching Error", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchData();
// // //   }, [selectedTab]);

// // //   return (
// // //     <Container className="flex flex-col lg:px-0 my-10">
// // //       <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
// // //       {loading ? (
// // //         <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
// // //           <motion.div className="flex items-center space-x-2 text-blue-600">
// // //             <Loader2 className="w-5 h-5 animate-spin" />
// // //             <span>Product is loading...</span>
// // //           </motion.div>
// // //         </div>
// // //       ) : products?.length ? (
// // //         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
// // //           <>
// // //             {products?.map((product) => (
// // //               <AnimatePresence key={product?._id}>
// // //                 <motion.div
// // //                   layout
// // //                   initial={{ opacity: 0.2 }}
// // //                   animate={{ opacity: 1 }}
// // //                   exit={{ opacity: 0 }}
// // //                 >
// // //                   <ProductCard key={product?._id} product={product} />
// // //                 </motion.div>
// // //               </AnimatePresence>
// // //             ))}
// // //           </>
// // //         </div>
// // //       ) : (
// // //         <NoProductAvailable selectedTab={selectedTab} />
// // //       )}
// // //     </Container>
// // //   );
// // // };

// // // export default ProductGrid;

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import ProductCard from "./ProductCard";
// // import { motion, AnimatePresence } from "motion/react";
// // import { client } from "@/sanity/lib/client";
// // import { Loader2 } from "lucide-react";
// // import Container from "./Container";
// // import { productType } from "@/constants/data"; // ❗️ MAKE SURE TO UPDATE THIS CONSTANT
// // import { Product } from "@/sanity.types"; // Make sure to regenerate this type
// // import HomeTabBar from "./Tabbar";
// // import NoProductAvailable from "./NoProductAvailable";

// // const ProductGrid = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

// //   // ✅ UPDATED QUERY: 'variant' is now 'productVariant'
// //   const query = `*[_type == "product" && productVariant == $variant] | order(name asc){
// //     ..., // <-- Fetch all fields
// //     "categories": categories[]->title,
// //     "slug": slug.current
// //   }`;
// //   const params = { variant: selectedTab.toLowerCase() };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await client.fetch(query, params);
// //         setProducts(await response);
// //       } catch (error) {
// //         console.log("Product fetching Error", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, [selectedTab]);

// //   return (
// //     <Container className="flex flex-col lg:px-0 my-10">
// //       <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
// //       {loading ? (
// //         <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
// //           <motion.div className="flex items-center space-x-2 text-blue-600">
// //             <Loader2 className="w-5 h-5 animate-spin" />
// //             <span>Product is loading...</span>
// //           </motion.div>
// //         </div>
// //       ) : products?.length ? (
// //         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
// //           <>
// //             {products?.map((product) => (
// //               <AnimatePresence key={product?._id}>
// //                 <motion.div
// //                   layout
// //                   initial={{ opacity: 0.2 }}
// //                   animate={{ opacity: 1 }}
// //                   exit={{ opacity: 0 }}
// //                 >
// //                   <ProductCard key={product?._id} product={product} />
// //                 </motion.div>
// //               </AnimatePresence>
// //             ))}
// //           </>
// //         </div>
// //       ) : (
// //         <NoProductAvailable selectedTab={selectedTab} />
// //       )}
// //     </Container>
// //   );
// // };

// // export default ProductGrid;


// "use client";

// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import { motion, AnimatePresence } from "motion/react";
// import { client } from "@/sanity/lib/client";
// import { Loader2 } from "lucide-react";
// import Container from "./Container";
// import { productType } from "@/constants/data"; // ✅ Ensure this imports the list above
// import { Product } from "@/sanity.types";
// import NoProductAvailable from "./NoProductAvailable";

// const ProductGrid = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);
//   // Default to the first category's value (e.g., "seeds")
//   const [selectedTab, setSelectedTab] = useState(productType[0]?.value || "seeds");

//   // ✅ Query matches your new Schema field: productVariant
//   const query = `*[_type == "product" && productVariant == $variant] | order(name asc){
//     ...,
//     "slug": slug.current,
//     "categories": categories[]->title
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
      
//       {/* Custom Tab Bar Loop */}
//       {/* This replaces HomeTabBar to ensure it uses your new data immediately */}
//       <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
//         {productType.map((item) => (
//             <button
//                 key={item.value}
//                 onClick={() => setSelectedTab(item.value)}
//                 className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
//                     selectedTab === item.value
//                     ? "bg-shop_dark_green text-white"
//                     : "bg-white text-gray-600 border border-gray-200 hover:border-shop_dark_green"
//                 }`}
//             >
//                 {item.title}
//             </button>
//         ))}
//       </div>

//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-20 min-h-80 space-y-4 text-center bg-gray-50 rounded-lg w-full">
//           <motion.div className="flex items-center space-x-2 text-shop_dark_green">
//             <Loader2 className="w-6 h-6 animate-spin" />
//             <span className="font-medium">Loading products...</span>
//           </motion.div>
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
import { Loader2 } from "lucide-react";
import Container from "./Container";
import { productType } from "@/constants/data"; // 👈 Import the file from Step 1
import { Product } from "@/sanity.types";
import NoProductAvailable from "./NoProductAvailable";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Default to the first item in your list (e.g., "seeds")
  const [selectedTab, setSelectedTab] = useState(productType[0]?.value || "seeds");

  // ✅ THE FIX: Query for 'productVariant'
  const query = `*[_type == "product" && productVariant == $variant] | order(name asc){
    ...,
    "slug": slug.current,
    "categories": categories[]->title
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
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        // Pass the tab name so the user knows what's missing (e.g., "No Seeds found")
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </Container>
  );
};

export default ProductGrid;