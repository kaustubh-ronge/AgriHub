// "use client";
// import { NURSERY_QUERYResult, Category, Product } from "@/sanity.types";
// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import Title from "./Title";
// import CategoryList from "./shop/CategoryList";
// import { useSearchParams } from "next/navigation";
// import NurseryList from "./shop/NurseryList";
// import PriceList from "./shop/PriceList";
// import { client } from "@/sanity/lib/client";
// import { Loader2 } from "lucide-react";
// import NoProductAvailable from "./NoProductAvailable";
// import ProductCard from "./ProductCard";

// interface Props {
//   categories: Category[];
//   nurseries: NURSERY_QUERYResult;
// }
// const Shop = ({ categories, nurseries }: Props) => {
//   const searchParams = useSearchParams();
//   const nurseryParams = searchParams?.get("nursery");
//   const categoryParams = searchParams?.get("category");
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(
//     categoryParams || null
//   );
//   const [selectedNursery, setSelectedNursery] = useState<string | null>(
//     nurseryParams || null
//   );
//   const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       let minPrice = 0;
//       let maxPrice = 10000;
//       if (selectedPrice) {
//         const [min, max] = selectedPrice.split("-").map(Number);
//         minPrice = min;
//         maxPrice = max;
//       }
//       const query = `
//       *[_type == 'product' 
//         && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
//         && (!defined($selectedNursery) || references(*[_type == "nursery" && slug.current == $selectedNursery]._id))
//         && price >= $minPrice && price <= $maxPrice
//       ] 
//       | order(name asc) {
//         ...,"categories": categories[]->title
//       }
//     `;
//         const data = await client.fetch(
//         query,
//         { selectedCategory, selectedNursery, minPrice, maxPrice },
//         { next: { revalidate: 0 } }
//       );
//       setProducts(data);
//     } catch (error) {
//       console.log("Shop product fetching Error", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [selectedCategory, selectedNursery, selectedPrice]);
//   return (
//     <div className="border-t">
//       <Container className="mt-5">
//         <div className="sticky top-0 z-10 mb-5">
//           <div className="flex items-center justify-between">
//             <Title className="text-lg uppercase tracking-wide">
//               Get the products as your needs
//             </Title>
//             {(selectedCategory !== null ||
//               selectedNursery !== null ||
//               selectedPrice !== null) && (
//               <button
//                 onClick={() => {
//                   setSelectedCategory(null);
//                   setSelectedNursery(null);
//                   setSelectedPrice(null);
//                 }}
//                 className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkRed hoverEffect"
//               >
//                 Reset Filters
//               </button>
//             )}
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
//           <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_btn_dark_green/50 scrollbar-hide">
//             <CategoryList
//               categories={categories}
//               selectedCategory={selectedCategory}
//               setSelectedCategory={setSelectedCategory}
//             />
//             <NurseryList
//               nurseries={nurseries}
//               setSelectedNursery={setSelectedNursery}
//               selectedNursery={selectedNursery}
//             />
//             <PriceList
//               setSelectedPrice={setSelectedPrice}
//               selectedPrice={selectedPrice}
//             />
//           </div>
//           <div className="flex-1 pt-5">
//             <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
//               {loading ? (
//                 <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
//                   <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin" />
//                   <p className="font-semibold tracking-wide text-base">
//                     Product is loading . . .
//                   </p>
//                 </div>
//               ) : products?.length > 0 ? (
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
//                   {products?.map((product) => (
//                     <ProductCard key={product?._id} product={product} />
//                   ))}
//                 </div>
//               ) : (
//                 <NoProductAvailable className="bg-white mt-0" />
//               )}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Shop;
























"use client";
import { NURSERY_QUERYResult, Category, Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./Title";
import CategoryList from "./shop/CategoryList";
import { useSearchParams } from "next/navigation";
import NurseryList from "./shop/NurseryList";
import PriceList from "./shop/PriceList";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";

interface Props {
  categories: Category[];
  nurseries: NURSERY_QUERYResult;
}

const Shop = ({ categories, nurseries }: Props) => {
  const searchParams = useSearchParams();
  const nurseryParams = searchParams?.get("nursery");
  const categoryParams = searchParams?.get("category");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParams || null);
  const [selectedNursery, setSelectedNursery] = useState<string | null>(nurseryParams || null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let minPrice = 0, maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min; maxPrice = max;
      }
      const query = `*[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && (!defined($selectedNursery) || references(*[_type == "nursery" && slug.current == $selectedNursery]._id))
        && price >= $minPrice && price <= $maxPrice
      ] | order(name asc) { ..., "categories": categories[]->title }`;
      
      const data = await client.fetch(query, { selectedCategory, selectedNursery, minPrice, maxPrice });
      setProducts(data);
    } catch (error) {
      console.log("Fetch error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, [selectedCategory, selectedNursery, selectedPrice]);

  return (
    <div className="bg-white">
      <Container className="py-10">
        <div className="flex flex-col md:flex-row gap-12">
          {/* SIDEBAR FILTERS - Added Proper Gap */}
          <aside className="md:w-72 space-y-10">
            <div>
               <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 border-b pb-2">Refine Search</h2>
               {(selectedCategory || selectedNursery || selectedPrice) && (
                 <button onClick={() => { setSelectedCategory(null); setSelectedNursery(null); setSelectedPrice(null); }}
                   className="text-red-600 font-bold text-xs uppercase underline mb-4 hover:text-red-800">
                   Reset All Filters
                 </button>
               )}
            </div>
            <div className="space-y-8">
              <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              <NurseryList nurseries={nurseries} setSelectedNursery={setSelectedNursery} selectedNursery={selectedNursery} />
              <PriceList setSelectedPrice={setSelectedPrice} selectedPrice={selectedPrice} />
            </div>
          </aside>

          {/* PRODUCT MAIN GRID */}
          <main className="flex-1">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-96">
                <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
                <p className="mt-4 font-black uppercase tracking-widest text-gray-400">Loading Batch...</p>
              </div>
            ) : products?.length > 0 ? (
              // ✅ FIXED GRID: Standardized 3-column layout for clean structure
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product?._id} product={product} />
                ))}
              </div>
            ) : (
              <NoProductAvailable className="mt-0" />
            )}
          </main>
        </div>
      </Container>
    </div>
  );
};

export default Shop;