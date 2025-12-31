// ================================
// components/VideoBlogSection.tsx
// ================================
"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const VideoBlogSection = ({ videoBlogs }: { videoBlogs: any[] }) => {
  if (!videoBlogs?.length) return null;

  return (
    <section className="mt-20">
      {/* <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-black text-shop_dark_green">
          🎥 Video Success Stories
        </h2>
        <Link
          href="/blogs/videos"
          className="text-shop_dark_green font-semibold hover:underline"
        >
          View All Videos →
        </Link>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoBlogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blog/${blog.slug.current}`}
            className="group relative rounded-xl overflow-hidden shadow-lg"
          >
            {/* Poster Image */}
            {/* <Image
              src={blog.videoPoster?.asset?.url || "/images/video-placeholder.jpg"}
              alt={blog.title}
              width={500}
              height={350}
              className="w-full h-[260px] object-cover group-hover:scale-105 transition"
            /> */}

            {/* Play Overlay */}
            {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                <Play className="text-shop_dark_green" size={30} />
              </div>
            </div> */}

            {/* Title */}
            {/* <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold line-clamp-2">
                {blog.title}
              </h3>
            </div> */}
          </Link>
        ))}
      </div>

      {/* CTA Buttons */}
      {/* <div className="flex gap-4 mt-10 flex-wrap">
        <Link
          href="/blogs/videos"
          className="bg-shop_dark_green text-white px-6 py-3 rounded-md font-semibold"
        >
          ▶ Watch All Videos
        </Link>
        <Link
          href="/blogs/success-stories"
          className="border border-shop_dark_green text-shop_dark_green px-6 py-3 rounded-md font-semibold"
        >
          🌾 5000+ Happy Farmers
        </Link>
      </div> */}
    </section>
  );
};

export default VideoBlogSection;

