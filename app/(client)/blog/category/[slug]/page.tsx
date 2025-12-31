import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getBlogsByCategory } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { Calendar, PlayCircle, Video, ExternalLink, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  
  // Fetch the blogs filtered by this slug
  const blogs = await getBlogsByCategory(slug);
  
  // Format slug for display title (e.g., "farming-tips" -> "Farming Tips")
  const displayTitle = slug.replace(/-/g, " ");

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <Container>
        {/* Header with Back Button */}
        <div className="flex flex-col items-center mb-10">
          <Button asChild variant="ghost" className="mb-4 text-gray-500 hover:text-shop_dark_green">
            <Link href="/blog">
               <ArrowLeft size={16} className="mr-2" /> Back to All Blogs
            </Link>
          </Button>
          <Title className="text-center text-4xl font-black uppercase text-shop_dark_green">
            {displayTitle}
          </Title>
          <p className="text-gray-500 mt-2">Browse stories related to {displayTitle}</p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog: any) => {
            
            const hasImage = !!blog.mainImage;
            const hasVideo = !!blog.directVideoUrl || (blog.videoGalleryUrls && blog.videoGalleryUrls.length > 0);
            const hasExternalLinks = blog.socialLinks && blog.socialLinks.length > 0;
            const link = `/blog/${blog?.slug?.current}`;

            return (
              <div 
                key={blog?._id} 
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* THUMBNAIL AREA */}
                <Link href={link} className="relative block aspect-[16/10] bg-gray-200 overflow-hidden">
                   {hasImage ? (
                      <Image
                        unoptimized
                        src={urlFor(blog.mainImage).url()}
                        alt={blog.title || "Blog Image"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                   ) : (
                      <div className="flex items-center justify-center w-full h-full bg-shop_light_green/10 text-shop_dark_green">
                         {hasVideo ? <Video size={48} opacity={0.5}/> : <ImageIcon size={48} opacity={0.5}/>}
                      </div>
                   )}

                   {/* BADGES */}
                   <div className="absolute top-3 right-3 flex gap-2">
                      {hasVideo && (
                        <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                           <PlayCircle size={12} fill="currentColor" /> VIDEO
                        </div>
                      )}
                      {hasExternalLinks && !hasVideo && (
                        <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                           <ExternalLink size={12} /> LINKS
                        </div>
                      )}
                   </div>
                </Link>

                {/* CONTENT */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                       <Calendar size={14} className="text-shop_dark_green"/>
                       {dayjs(blog.publishedAt).format("MMM D, YYYY")}
                    </div>
                  </div>

                  <Link href={link} className="block mb-3">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-shop_dark_green transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                      <Link href={link} className="text-sm font-bold text-shop_dark_green flex items-center gap-1 hover:gap-2 transition-all">
                        READ FULL STORY <span className="text-lg">→</span>
                      </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {(!blogs || blogs.length === 0) && (
           <div className="text-center py-20 bg-white rounded-xl shadow-sm border mt-5">
              <h3 className="text-xl font-bold text-gray-400 mb-2">No stories found</h3>
              <p className="text-gray-500 mb-6">We haven't published any stories in this category yet.</p>
              <Button asChild>
                <Link href="/blog">View All Blogs</Link>
              </Button>
           </div>
        )}

      </Container>
    </div>
  );
}