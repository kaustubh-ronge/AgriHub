// import React from "react";
// import { Category } from "@/sanity.types";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import { Title } from "./ui/text";

// const HomeCategories = ({ categories }: { categories: Category[] }) => {
//   return (
//     <div className="bg-white border border-shop_light_green/20 my-10 md:my-20 p-5 lg:p-7 rounded-md">
//       <Title className="border-b pb-3">Popular Categories</Title>
//       <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {categories?.map((category) => (
//           <div
//             key={category?._id}
//             className="bg-shop_light_bg p-5 flex items-center gap-3 group"
//           >
//             {category?.image && (
//               <div className="overflow-hidden border border-shop_orange/30 hover:border-shop_orange hoverEffect w-20 h-20 p-1">
//                 <Link href={`/category/${category?.slug?.current}`}>
//                   <Image
//                     src={urlFor(category?.image).url()}
//                     alt="categoryImage"
//                     width={500}
//                     height={500}
//                     className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
//                   />
//                 </Link>
//               </div>
//             )}
//             <div className="space-y-1">
//               <h3 className="text-base font-semibold">{category?.title}</h3>
//               <p className="text-sm">
//                 <span className="font-bold text-shop_dark_green">{`(${category?.productCount})`}</span>{" "}
//                 items Available
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeCategories;















import React from "react";
import { Category } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Title } from "./ui/text";

interface CategoryWithCount extends Category {
  productCount?: number;
}

const HomeCategories = ({ categories }: { categories: CategoryWithCount[] }) => {
  return (
    <div className="bg-white border border-shop_light_green/20 my-8 md:my-12 p-4 lg:p-6 rounded-md shadow-sm">
      <Title className="border-b pb-3 text-2xl md:text-3xl font-black">Popular Categories</Title>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {categories?.map((category) => (
          <div
            key={category?._id}
            className="bg-shop_light_bg p-4 rounded-lg flex items-center gap-4 group border border-transparent hover:border-shop_orange/30 transition-all duration-300"
          >
            {category?.image && (
              /* REDUCED IMAGE SIZE from w-28 to w-20 */
              <div className="overflow-hidden border border-shop_orange/20 rounded-md w-20 h-20 p-1 bg-white flex-shrink-0">
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                  unoptimized
                    src={urlFor(category?.image).url()}
                    alt="categoryImage"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
              </div>
            )}
            <div className="space-y-1">
              {/* SLIGHTLY REDUCED TITLE SIZE from text-2xl to text-xl */}
              <h3 className="text-lg md:text-xl font-black text-gray-900 leading-tight">
                {category?.title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 font-bold">
                <span className="text-shop_dark_green font-black">
                  {`(${category?.productCount ?? 0})`}
                </span>{" "}
                Available
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;