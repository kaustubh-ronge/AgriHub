// import Container from "@/components/Container";
// import Title from "@/components/Title";
// import { urlFor } from "@/sanity/lib/image";
// import { getAllBlogs } from "@/sanity/queries";
// import dayjs from "dayjs";
// import { Calendar } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const BlogPage = async () => {
//   const blogs = await getAllBlogs(6);

//   return (
//     <div>
//       <Container>
//         <Title>Blog page</Title>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
//           {blogs?.map((blog) => (
//             <div key={blog?._id} className="rounded-md overflow-hidden group">
//               {blog?.mainImage && (
//                 <Image
//                   src={urlFor(blog?.mainImage).url()}
//                   alt="blogImage"
//                   width={500}
//                   height={500}
//                   className="w-full max-h-80 object-cover"
//                 />
//               )}
//               <div className="bg-gray-100 p-5">
//                 <div className="text-xs flex items-center gap-5">
//                   <div className="flex items-center relative group cursor-pointer">
//                     {blog?.blogcategories?.map((item, index) => (
//                       <p
//                         key={index}
//                         className="font-semibold text-shop_dark_green tracking-wider"
//                       >
//                         {item?.title}
//                       </p>
//                     ))}
//                     <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hover:cursor-pointer hoverEffect" />
//                   </div>
//                   <p className="flex items-center gap-1 text-lightColor relative group hover:cursor-pointer hover:text-shop_dark_green hoverEffect">
//                     <Calendar size={15} />{" "}
//                     {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
//                     <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hoverEffect" />
//                   </p>
//                 </div>
//                 <Link
//                   href={`/blog/${blog?.slug?.current}`}
//                   className="text-base font-bold tracking-wide mt-5 line-clamp-2 hover:text-shop_dark_green hoverEffect"
//                 >
//                   {blog?.title}
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default BlogPage;




















// import Container from "@/components/Container";
// import Title from "@/components/Title";
// import { urlFor } from "@/sanity/lib/image";
// import { getAllBlogs } from "@/sanity/queries";
// import dayjs from "dayjs";
// import { Calendar } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import SocialVideoPlayer from "@/components/SocialVideoPlayer"; // Import the player

// const BlogPage = async () => {
//   const blogs = await getAllBlogs(6);

//   return (
//     <div>
//       <Container>
//         <Title>Blog page</Title>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
//           {blogs?.map((blog: any) => (
//             <div key={blog?._id} className="rounded-md overflow-hidden group border border-gray-200">
              
//               {/* MEDIA SECTION: Video or Image */}
//               <div className="relative">
//                 {blog?.mediaType === "video" && blog?.socialVideoUrl ? (
//                   <SocialVideoPlayer 
//                     url={blog.socialVideoUrl} 
//                     autoPlay={blog?.autoPlay ?? true} 
//                   />
//                 ) : (
//                   blog?.mainImage && (
//                     <Image
//                       src={urlFor(blog?.mainImage).url()}
//                       alt={blog.title || "blog image"}
//                       width={500}
//                       height={500}
//                       className="w-full max-h-80 object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   )
//                 )}
//               </div>

//               {/* CONTENT SECTION */}
//               <div className="bg-gray-100 p-5">
//                 <div className="text-xs flex items-center gap-5">
//                   <div className="flex items-center relative group cursor-pointer">
//                     {blog?.blogcategories?.map((item: any, index: number) => (
//                       <p
//                         key={index}
//                         className="font-semibold text-shop_dark_green tracking-wider"
//                       >
//                         {item?.title}
//                       </p>
//                     ))}
//                     <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hoverEffect" />
//                   </div>
//                   <p className="flex items-center gap-1 text-lightColor relative group hover:text-shop_dark_green hoverEffect">
//                     <Calendar size={15} />{" "}
//                     {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
//                     <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hoverEffect" />
//                   </p>
//                 </div>
//                 <Link
//                   href={`/blog/${blog?.slug?.current}`}
//                   className="text-base font-bold tracking-wide mt-5 block line-clamp-2 hover:text-shop_dark_green hoverEffect"
//                 >
//                   {blog?.title}
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default BlogPage;

























// import { getSingleBlog } from "@/sanity/queries";
// import { urlFor } from "@/sanity/lib/image";
// import SocialVideoPlayer from "@/components/SocialVideoPlayer";
// import { PortableText } from "@portabletext/react";
// import dayjs from "dayjs";
// import Image from "next/image";

// export default async function BlogDetails({ params }: { params: { slug: string } }) {
//   const blog = await getSingleBlog(params.slug);
//   if (!blog) return <div>Blog not found</div>;

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-5">
//       {/* 1. VIDEO SECTION (YouTube, FB, Insta) */}
//       {blog.mediaType === "video" && (
//         <div className="grid grid-cols-1 gap-6 mb-10">
//           {blog.youtubeUrl && <SocialVideoPlayer url={blog.youtubeUrl} />}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {blog.facebookUrl && <SocialVideoPlayer url={blog.facebookUrl} />}
//             {blog.instagramUrl && <SocialVideoPlayer url={blog.instagramUrl} />}
//           </div>
//         </div>
//       )}

//       {/* 2. METADATA LINE (Category, Author, Date) */}
//       <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 border-b pb-4">
//         <div className="flex gap-2">
//           {blog.blogcategories?.map((cat: any) => (
//             <span key={cat.title} className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
//               {cat.title}
//             </span>
//           ))}
//         </div>
//         <span>• By {blog.author?.name}</span>
//         <span>• {dayjs(blog.publishedAt).format("MMM D, YYYY")}</span>
//       </div>

//       {/* 3. MAIN INFORMATION (Title & Body) */}
//       <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      
//       {blog.mainImage && blog.mediaType === "image" && (
//         <Image 
//           src={urlFor(blog.mainImage).url()} 
//           alt={blog.title} 
//           width={1200} height={600} 
//           className="rounded-xl mb-8"
//         />
//       )}

//       <div className="prose prose-lg max-w-none mb-16">
//         <PortableText value={blog.body} />
//       </div>

//       {/* 4. AUTOMATIC CATEGORY PROMOTION (At the end) */}
//       {blog.blogcategories?.map((cat: any) => (
//         <div key={cat.title} className="mt-10 p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-green-200">
//           <h3 className="text-xl font-bold text-green-800 mb-2">More about {cat.title}</h3>
//           <p className="text-gray-600 mb-4">{cat.description}</p>
          
//           {cat.promotionType === "video" && cat.promoVideo?.asset?.url ? (
//              <video src={cat.promoVideo.asset.url} controls poster={cat.videoPoster ? urlFor(cat.videoPoster).url() : ""} className="w-full rounded-lg" />
//           ) : (
//              cat.promoImage && <Image src={urlFor(cat.promoImage).url()} width={800} height={400} alt="promo" className="rounded-lg w-full object-cover h-64" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
















import { getAllBlogs } from "@/sanity/queries";
import { getSingleBlog } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import SocialVideoPlayer from "@/components/SocialVideoPlayer";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";
import { MapPin, Phone, MessageSquare } from "lucide-react";

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  // ✅ FIX: Await params to avoid 'undefined' slug error
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center py-40 px-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">यशोगाथा सापडली नाही.</h2>
        <p className="text-gray-500">The success story you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      
      {/* 1. MEDIA SECTION - VIDEO/POSTER FIRST */}
      <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {blog.mediaType === "social" && (
          <div className="space-y-6">
            {blog.youtubeUrl && <SocialVideoPlayer url={blog.youtubeUrl} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blog.facebookUrl && <SocialVideoPlayer url={blog.facebookUrl} />}
              {blog.instagramUrl && <SocialVideoPlayer url={blog.instagramUrl} />}
            </div>
          </div>
        )}

        {blog.mediaType === "video" && blog.directVideoUrl && (
          <video 
            src={blog.directVideoUrl} 
            controls 
            className="w-full rounded-2xl shadow-2xl border-4 border-white aspect-video bg-black"
            poster={blog.mainImage ? urlFor(blog.mainImage).url() : ""}
          />
        )}

        {blog.mediaType === "image" && blog.mainImage && (
          <Image 
            src={urlFor(blog.mainImage).url()} 
            alt={blog.title} 
            width={1200} height={675} 
            className="rounded-2xl shadow-lg object-cover"
          />
        )}
      </div>

      {/* 2. HEADER INFO */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.blogcategories?.map((cat: any) => (
            <span key={cat.title} className="bg-shop_light_green/20 text-shop_dark_green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {cat.title}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4 uppercase">
          {blog.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span className="font-medium text-shop_dark_green underline underline-offset-4">By {blog.author?.name || "Adv. Kalidas Bajbalkar"}</span>
          <span>•</span>
          <span>{dayjs(blog.publishedAt).format("MMMM D, YYYY")}</span>
        </div>
      </div>

      {/* 3. BODY CONTENT (The Story) */}
      <div className="prose prose-lg max-w-none prose-green mb-20 border-t pt-10">
        <PortableText value={blog.body} />
      </div>

      {/* 4. AUTOMATIC BRC INFO SECTION (Animated Consultancy Footer) */}
      <hr className="mb-10 border-gray-100" />
      
      {blog.blogcategories?.map((cat: any) => (
        <div 
          key={cat.title} 
          className="relative group overflow-hidden bg-gradient-to-br from-shop_dark_green to-[#064e3b] rounded-3xl p-8 text-white shadow-2xl transition-all hover:scale-[1.01] duration-500 mb-10"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">Bajbalkar Nursery Guidance: {cat.title}</h2>
              <p className="text-green-50 mb-6 leading-relaxed opacity-90">
                {cat.description || "Bajbalkar Hi-Tech Nursery provides scientific water-fertilizer management and high-quality saplings to ensure high turnover."}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg"><Phone size={20}/></div>
                  <span className="font-bold text-lg">+91 97657 97782</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg"><MapPin size={20}/></div>
                  <span className="font-medium">Chikmahud, Sangola, Dist. Solapur</span>
                </div>
              </div>

              <a 
                href="https://wa.me/919765797782" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-white text-shop_dark_green px-8 py-4 rounded-full font-black shadow-xl hover:bg-shop_light_green hover:text-white transition-all transform hover:-translate-y-1"
              >
                <MessageSquare size={22} /> FREE CONSULTATION NOW
              </a>
            </div>

            <div className="relative h-72 w-full order-1 md:order-2">
               {cat.promotionType === "video" && cat.promoVideoUrl ? (
                  <video src={cat.promoVideoUrl} autoPlay muted loop playsInline className="h-full w-full object-cover rounded-2xl border-2 border-white/20" />
               ) : (
                  cat.promoImage && (
                    <Image 
                      src={urlFor(cat.promoImage).url()} 
                      fill 
                      alt="BRC Quality Results" 
                      className="object-cover rounded-2xl border-2 border-white/20 shadow-inner" 
                    />
                  )
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      ))}
    </div>
  );
}