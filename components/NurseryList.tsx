// "use client";

// import { Nursery } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Search, ArrowRight, Leaf, MapPin } from "lucide-react";
// import { Input } from "@/components/ui/input"; // Assuming you have shadcn Input, or standard input

// interface Props {
//   nurseries: Nursery[];
// }

// const NurseryList = ({ nurseries }: Props) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter nurseries based on search
//   const filteredNurseries = nurseries.filter((nursery) =>
//     nursery.title?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col gap-10">
//       {/* --- Search Bar --- */}
//       <div className="flex justify-center -mt-8 z-10 relative">
//         <div className="relative w-full max-w-xl shadow-lg rounded-full">
//           <Input
//             placeholder="Find a nursery by name..."
//             className="w-full pl-12 pr-4 py-6 rounded-full border-2 border-green-100 focus-visible:ring-green-500 focus-visible:border-green-500 text-base"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//         </div>
//       </div>

//       {/* --- Grid Layout --- */}
//       {filteredNurseries.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredNurseries.map((nursery, index) => (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               key={nursery._id}
//               className="group h-full"
//             >
//               <Link
//                 href={`/shop?nursery=${nursery.slug?.current}`}
//                 className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300"
//               >
//                 {/* Image Section */}
//                 <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
//                   {nursery.image ? (
//                     <Image
//                       src={urlFor(nursery.image).url()}
//                       alt={nursery.title || "Nursery"}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full text-green-200">
//                       <Leaf size={48} />
//                     </div>
//                   )}
//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  
//                   {/* Floating Badge (Visual Enhancement) */}
//                   <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-green-700">
//                     <Leaf size={12} /> Verified Seller
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 flex flex-col flex-1">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-1">
//                       {nursery.title}
//                     </h3>
//                   </div>

//                   <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">
//                     {nursery.description || "Dedicated to providing high-quality agricultural products and seeds for your farming needs."}
//                   </p>

//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
//                         <MapPin size={14} /> India
//                     </span>
//                     <span className="flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:translate-x-1 transition-transform">
//                       Visit Shop <ArrowRight size={16} />
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
//           <Leaf className="w-12 h-12 text-gray-300 mx-auto mb-3" />
//           <h3 className="text-lg font-semibold text-gray-900">No nurseries found</h3>
//           <p className="text-gray-500">Try adjusting your search term.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NurseryList;


















"use client";

import { Nursery } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Leaf, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  nurseries: Nursery[];
}

const NurseryList = ({ nurseries }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter nurseries based on search
  const filteredNurseries = nurseries.filter((nursery) =>
    nursery.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-10">
      {/* --- Search Bar --- */}
      <div className="flex justify-center -mt-8 z-10 relative">
        <div className="relative w-full max-w-xl shadow-lg rounded-full">
          <Input
            placeholder="Find a nursery by name..."
            className="w-full pl-12 pr-4 py-6 rounded-full border-2 border-green-100 focus-visible:ring-green-500 focus-visible:border-green-500 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* --- Grid Layout --- */}
      {filteredNurseries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNurseries.map((nursery, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={nursery._id}
              className="group h-full"
            >
              <Link
                href={`/nurseries/${nursery.slug?.current}`}
                className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
                  {nursery.image ? (
                    <Image
                    unoptimized
                      src={urlFor(nursery.image).url()}
                      alt={nursery.title || "Nursery"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-green-200">
                      <Leaf size={48} />
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  
                  {/* Floating Badge (Visual Enhancement) */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-green-700">
                    <Leaf size={12} /> Verified Seller
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-1">
                      {nursery.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">
                    {nursery.description || "Dedicated to providing high-quality agricultural products and seeds for your farming needs."}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                        <MapPin size={14} /> India
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:translate-x-1 transition-transform">
                      Visit Shop <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <Leaf className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">No nurseries found</h3>
          <p className="text-gray-500">Try adjusting your search term.</p>
        </div>
      )}
    </div>
  );
};

export default NurseryList;