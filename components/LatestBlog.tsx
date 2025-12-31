// import React from "react";
// import Title from "./Title";
// import { getLatestBlogs } from "@/sanity/queries";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import { Calendar } from "lucide-react";
// import dayjs from "dayjs";

// const LatestBlog = async () => {
//   const blogs = await getLatestBlogs();
//   return (
//     <div className="mb-10 lg:mb-20">
//       <Title>Latest Blog</Title>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
//         {blogs?.map((blog) => (
//           <div key={blog?._id} className="rounded-lg overflow-hidden">
//             {blog?.mainImage && (
//               <Link href={`/blog/${blog?.slug?.current}`}>
//                 <Image
//                 unoptimized
//                   src={urlFor(blog?.mainImage).url()}
//                   alt="blogImage"
//                   width={500}
//                   height={500}
//                   className="w-full max-h-80 object-cover"
//                 />
//               </Link>
//             )}
//             <div className="bg-shop_light_bg p-5">
//               <div className="text-xs flex items-center gap-5">
//                 <div className="flex items-center relative group cursor-pointer">
//                   {blog?.blogcategories?.map((item, index) => (
//                     <p
//                       key={index}
//                       className="font-semibold text-shop_dark_green tracking-wider"
//                     >
//                       {item?.title}
//                     </p>
//                   ))}
//                   <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hover:cursor-pointer hoverEffect" />
//                 </div>
//                 <p className="flex items-center gap-1 text-lightColor relative group hover:cursor-pointer hover:text-shop_dark_green hoverEffect">
//                   <Calendar size={15} />{" "}
//                   {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
//                   <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hoverEffect" />
//                 </p>
//               </div>
//               <Link
//                 href={`/blog/${blog?.slug?.current}`}
//                 className="text-base font-semibold tracking-wide mt-5 line-clamp-2 hover:text-shop_dark_green hoverEffect"
//               >
//                 {blog?.title}
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestBlog;


import React from "react";
import Title from "./Title";
import { getLatestBlogs } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import dayjs from "dayjs";

// 1. Define the Interface for your Blog Data
interface BlogCategory {
  title: string;
}

interface Blog {
  _id: string;
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  mainImage: any; // You can use a stricter SanityImage type if preferred
  blogcategories: BlogCategory[];
}

const LatestBlog = async () => {
  // 2. Type the data coming from the query
  const blogs: Blog[] = await getLatestBlogs();

  return (
    <div className="mb-10 lg:mb-20">
      <Title>Latest Blog</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {blogs?.map((blog: Blog) => (
          <div key={blog?._id} className="rounded-lg overflow-hidden group border border-transparent hover:border-gray-100 transition-all">
            {blog?.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`} className="block overflow-hidden">
                <Image
                  unoptimized
                  src={urlFor(blog?.mainImage).url()}
                  alt={blog.title || "Blog Image"}
                  width={500}
                  height={500}
                  className="w-full max-h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            )}
            <div className="bg-shop_light_bg p-5">
              <div className="text-xs flex items-center gap-4 mb-3">
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {blog?.blogcategories?.map((item: BlogCategory, index: number) => (
                    <span
                      key={index}
                      className="font-bold text-shop_dark_green uppercase tracking-wider text-[10px] bg-shop_dark_green/10 px-2 py-1 rounded"
                    >
                      {item?.title}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <div className="flex items-center gap-1 text-gray-500 ml-auto">
                  <Calendar size={14} />
                  <span>{dayjs(blog.publishedAt).format("MMM D, YYYY")}</span>
                </div>
              </div>

              <Link
                href={`/blog/${blog?.slug?.current}`}
                className="text-base font-bold text-gray-800 leading-snug line-clamp-2 hover:text-shop_dark_green transition-colors"
              >
                {blog?.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;