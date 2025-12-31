// "use client";

// import React, { useEffect, useState } from "react";
// import Container from "@/components/Container";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Trash2 } from "lucide-react";
// import PriceView from "@/components/PriceView";
// import Link from "next/link";
// import { Product } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image"; // ✅ Import urlFor

// const ComparePage = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   // Load compare products from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem("compare");
//     if (stored) {
//       setProducts(JSON.parse(stored));
//     }
//   }, []);

//   const removeProduct = (id: string) => {
//     const updated = products.filter((p) => p._id !== id);
//     setProducts(updated);
//     localStorage.setItem("compare", JSON.stringify(updated));
//   };

//   const clearAll = () => {
//     setProducts([]);
//     localStorage.removeItem("compare");
//   };

//   if (products.length === 0) {
//     return (
//       <Container className="py-20 text-center">
//         <h1 className="text-3xl font-bold mb-3">Compare Products</h1>
//         <p className="text-gray-500 mb-6">
//           No products added for comparison.
//         </p>
//         <Button asChild>
//           <Link href="/">Browse Products</Link>
//         </Button>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-10">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-3xl font-bold">Compare Products</h1>
//         <Button variant="destructive" onClick={clearAll}>
//           Clear All
//         </Button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-4 text-left font-semibold text-gray-700 w-1/4">Feature</th>
//               {products.map((product) => (
//                 <th key={product._id} className="p-4 text-center min-w-[200px]">
//                   <div className="flex flex-col items-center gap-3">
//                     <div className="relative h-24 w-24 bg-gray-50 rounded-md overflow-hidden">
//                        {/* ✅ FIX: Use urlFor() for the image */}
//                        {product.images?.[0] ? (
//                           <Image
//                             src={urlFor(product.images[0]).url()}
//                             alt={product.name}
//                             fill
//                             className="object-contain"
//                           />
//                        ) : (
//                           <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
//                        )}
//                     </div>
                    
//                     <Link
//                       href={`/product/${product.slug?.current}`}
//                       className="text-sm font-bold hover:text-green-600 line-clamp-2"
//                     >
//                       {product.name}
//                     </Link>
//                     <button
//                       onClick={() => removeProduct(product._id)}
//                       className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1"
//                     >
//                       <Trash2 size={14} /> Remove
//                     </button>
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100">
//             {/* Price */}
//             <tr>
//               <td className="p-4 font-semibold text-gray-600">Price</td>
//               {products.map((product) => (
//                 <td key={product._id} className="p-4 text-center">
//                   <div className="flex justify-center">
//                      <PriceView
//                         price={product.price}
//                         discount={product.discount}
//                      />
//                   </div>
//                 </td>
//               ))}
//             </tr>

//             {/* Stock */}
//             <tr>
//               <td className="p-4 font-semibold text-gray-600">Availability</td>
//               {products.map((product) => (
//                 <td key={product._id} className="p-4 text-center">
//                   {product.stock && product.stock > 0 ? (
//                     <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
//                       In Stock
//                     </span>
//                   ) : (
//                     <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
//                       Out of Stock
//                     </span>
//                   )}
//                 </td>
//               ))}
//             </tr>

//             {/* Category */}
//             <tr>
//               <td className="p-4 font-semibold text-gray-600">Category</td>
//               {products.map((product) => (
//                 <td key={product._id} className="p-4 text-center text-sm">
//                   {/* @ts-expect-error expanded */}
//                   {product.categories?.[0]?.title || "-"}
//                 </td>
//               ))}
//             </tr>

//             {/* Nursery */}
//             <tr>
//               <td className="p-4 font-semibold text-gray-600">Nursery</td>
//               {products.map((product) => (
//                 <td key={product._id} className="p-4 text-center text-sm">
//                   {/* @ts-expect-error expanded */}
//                   {product.nursery?.title || "-"}
//                 </td>
//               ))}
//             </tr>

//             {/* Unit */}
//             <tr>
//               <td className="p-4 font-semibold text-gray-600">Selling Unit</td>
//               {products.map((product) => (
//                 <td key={product._id} className="p-4 text-center text-sm capitalize">
//                   {product.sellingUnit === "other"
//                     ? product.otherSellingUnit
//                     : product.sellingUnit || product.unit}
//                 </td>
//               ))}
//             </tr>
            
//             {/* Action */}
//             <tr>
//                 <td className="p-4 font-semibold text-gray-600">Action</td>
//                 {products.map((product) => (
//                 <td key={product._id} className="p-4 text-center text-sm">
//                     <Button asChild size="sm" variant="outline" className="w-full">
//                         <Link href={`/product/${product.slug?.current}`}>View Details</Link>
//                     </Button>
//                 </td>
//                 ))}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </Container>
//   );
// };

// export default ComparePage;















"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2, AlertCircle } from "lucide-react";
import PriceView from "@/components/PriceView";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity.types";
import AddToCartButton from "@/components/AddToCartButton";
// ✅ Import from your new types file (adjust path if needed)
import { ExpandedProduct } from "@/app/types"; 

const ComparePage = () => {
  // ✅ State is explicitly typed with ExpandedProduct
  const [products, setProducts] = useState<ExpandedProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompareData = async () => {
      const stored = localStorage.getItem("compare");
      if (!stored) {
        setLoading(false);
        return;
      }

      const storedProducts: Product[] = JSON.parse(stored);
      const ids = storedProducts.map((p) => p._id);

      if (ids.length === 0) {
        setProducts([]);
        setLoading(false);
        return;
      }

      // Query fetches expanded data
      const query = `*[_type == "product" && _id in $ids] {
        ...,
        "categories": categories[]->title,
        "nursery": nursery->title,
        plantBreedData->{
          plantName, breedName, varietyType, seedUsed
        },
        fertilizerFormulaData->{
          formulaName, npk, fertilizerForm, isOrganic
        }
      }`;

      try {
        const fetchedProducts = await client.fetch(query, { ids });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch compare data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompareData();
  }, []);

  const removeProduct = (id: string) => {
    const updated = products.filter((p) => p._id !== id);
    setProducts(updated);
    localStorage.setItem("compare", JSON.stringify(updated));
  };

  const clearAll = () => {
    setProducts([]);
    localStorage.removeItem("compare");
  };

  // Helper function for rows
  const renderRow = (label: string, getValue: (p: ExpandedProduct) => string | number | React.ReactNode) => (
    <tr>
      <td className="p-4 font-semibold text-gray-600 bg-gray-50/50 w-1/4 min-w-[150px] border-b">{label}</td>
      {products.map((product) => (
        <td key={product._id} className="p-4 text-center border-b min-w-[200px]">
          {getValue(product) || <span className="text-gray-300">-</span>}
        </td>
      ))}
    </tr>
  );

  const renderSectionHeader = (title: string) => (
    <tr>
      <td colSpan={products.length + 1} className="p-3 bg-gray-100 font-bold text-gray-800 uppercase text-xs tracking-wider">
        {title}
      </td>
    </tr>
  );

  if (loading) {
    return (
      <Container className="py-20 flex justify-center">
        <Loader2 className="animate-spin text-green-600 h-10 w-10" />
      </Container>
    );
  }

  if (products.length === 0) {
    return (
      <Container className="py-20 text-center flex flex-col items-center">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
            <AlertCircle className="h-10 w-10 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold mb-3 text-gray-800">Compare List is Empty</h1>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/">Browse Products</Link>
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Compare Products</h1>
        <Button variant="outline" onClick={clearAll} className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
          <Trash2 className="mr-2 h-4 w-4" /> Clear List
        </Button>
      </div>

      <div className="overflow-x-auto border rounded-xl shadow-sm bg-white">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left bg-white border-b z-10 sticky left-0 w-1/4"></th>
              {products.map((product) => (
                <th key={product._id} className="p-4 text-center border-b min-w-[220px] bg-white align-top">
                  <div className="relative group">
                    <button 
                        onClick={() => removeProduct(product._id)}
                        className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full p-1 shadow-md border border-gray-100 hover:bg-red-50 transition-colors z-10"
                    >
                        <Trash2 size={16} />
                    </button>
                    
                    <div className="relative h-40 w-full mb-3 bg-gray-50 rounded-lg overflow-hidden">
                       {/* ✅ FIX: Ensuring alt is always a string */}
                       {product.images && product.images[0] ? (
                          <Image
                          unoptimized
                            src={urlFor(product.images[0]).url()}
                            alt={product.name || "Product Image"} 
                            fill
                            className="object-contain p-2"
                          />
                       ) : (
                           <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                       )}
                    </div>
                    
                    <Link href={`/product/${product.slug?.current}`} className="block">
                        <h3 className="font-bold text-gray-800 hover:text-green-600 transition-colors line-clamp-2 min-h-[3rem]">
                        {product.name}
                        </h3>
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {renderRow("Price", (p) => (
                <div className="flex justify-center">
                    <PriceView price={p.price} discount={p.discount} className="text-lg font-bold" />
                </div>
            ))}
            
            {renderRow("Availability", (p) => (
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                    (p.stock ?? 0) > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}>
                    {(p.stock ?? 0) > 0 ? "In Stock" : "Out of Stock"}
                </span>
            ))}

            {renderRow("Action", (p) => (
               (p.stock ?? 0) > 0 ? (
                   // @ts-expect-error - Product type check bypass for strict Sanity type
                   <AddToCartButton product={p} className="w-full text-xs h-9" />
               ) : (
                   <Button disabled variant="outline" className="w-full text-xs h-9">Unavailable</Button>
               )
            ))}

            {renderSectionHeader("General Information")}
            {renderRow("Type", (p) => <span className="capitalize">{p.productVariant}</span>)}
            {renderRow("Nursery", (p) => (typeof p.nursery === 'string' ? p.nursery : p.nursery?.title) || "-")}
            {renderRow("Selling Unit", (p) => p.unit || "-")}
            
            {/* ✅ FIX: trayPlantCount is now valid on ExpandedProduct */}
            {renderRow("Tray Info", (p) => 
                p.trayPlantCount ? `${p.trayPlantCount} Plants/Tray` : "-"
            )}

            {/* Dynamic Sections */}
            {products.some(p => p.productVariant === 'plants') && (
                <>
                    {renderSectionHeader("Plant Specifics")}
                    {renderRow("Breed Name", (p) => p.plantBreedData?.breedName)}
                    {renderRow("Variety Type", (p) => p.plantBreedData?.varietyType)}
                    {renderRow("Seed Source", (p) => p.plantBreedData?.seedUsed)}
                    {renderRow("Nursery Age", (p) => p.daysInNursery ? `${p.daysInNursery} Days` : "")}
                    {renderRow("Planting Deadline", (p) => p.transplantDeadline ? `Within ${p.transplantDeadline} Days` : "")}
                </>
            )}

            {products.some(p => p.productVariant === 'fertilizer') && (
                <>
                    {renderSectionHeader("Fertilizer Specifics")}
                    {renderRow("Formula / Grade", (p) => p.fertilizerFormulaData?.formulaName)}
                    {renderRow("NPK Ratio", (p) => p.fertilizerFormulaData?.npk)}
                    {renderRow("Form", (p) => p.fertilizerFormulaData?.fertilizerForm)}
                    {renderRow("Organic", (p) => 
                        p.fertilizerFormulaData?.isOrganic !== undefined 
                        ? (p.fertilizerFormulaData.isOrganic ? "Yes ✅" : "No") 
                        : ""
                    )}
                </>
            )}

             {products.some(p => p.productVariant === 'seeds') && (
                <>
                    {renderSectionHeader("Seed Specifics")}
                    {renderRow("Seed Type", (p) => p.seedType)}
                    {renderRow("Germination Rate", (p) => p.germinationRate ? `${p.germinationRate}%` : "")}
                </>
            )}

          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ComparePage;