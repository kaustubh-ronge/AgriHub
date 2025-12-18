// "use client";

// import { motion } from "motion/react";
// import Image from "next/image";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";

// const HomeBanner = ({ banner }: { banner: any }) => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="mt-5 bg-shop_light_pink rounded-lg overflow-hidden"
//     >
//       {/* TEXT SECTION */}
//       <div className="px-6 md:px-16 py-8 text-center md:text-left">
//         <h1 className="text-3xl md:text-4xl font-black text-shop_dark_green leading-tight">
//           {banner?.title}
//         </h1>

//         <p className="mt-3 text-gray-700 max-w-3xl">
//           {banner?.subtitle}
//         </p>
//       </div>

//       {/* FULL WIDTH MEDIA */}
//       <div className="w-full">
//         {banner?.mediaType === "video" && banner?.bannerVideo ? (
//           <video
//             src={banner.bannerVideo.asset.url}
//             autoPlay={banner?.autoPlay}
//             muted
//             loop
//             playsInline
//             className="w-full max-h-[520px] object-cover"
//           />
//         ) : (
//           banner?.bannerImage && (
//             <Image
//               src={urlFor(banner.bannerImage).url()}
//               alt="BRC Banner"
//               width={1600}
//               height={600}
//               className="w-full max-h-[520px] object-cover"
//               priority
//             />
//           )
//         )}
//       </div>

//       {/* ACTION BUTTONS */}
//       <div className="px-6 md:px-16 py-6 flex flex-wrap gap-4 items-center">
//         {/* Buy Button */}
//         <Link
//           href={banner?.ctaLink || "/shop"}
//           className="bg-shop_dark_green text-white px-6 py-3 rounded-md font-semibold hover:bg-shop_light_green transition"
//         >
//           {banner?.ctaText || "Buy Now"}
//         </Link>

//         {/* Happy Farmers */}
//         <span className="px-6 py-3 border border-shop_dark_green rounded-md text-shop_dark_green font-semibold">
//           🌾 5000+ Happy Farmers
//         </span>

//         {/* Optional Success Story Button */}
//         <Link
//           href="/blog"
//           className="px-6 py-3 border border-gray-400 rounded-md text-gray-700 hover:border-shop_dark_green hover:text-shop_dark_green transition"
//         >
//           Success Stories →
//         </Link>
//       </div>
//     </motion.section>
//   );
// };

// export default HomeBanner;













"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const HomeBanner = ({ banner }: { banner: any }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-5 bg-shop_light_pink rounded-lg overflow-hidden"
    >
      {/* TEXT SECTION - INCREASED FONT SIZES */}
      <div className="px-6 md:px-16 py-10 md:py-14 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black text-shop_dark_green leading-tight tracking-tighter">
          {banner?.title}
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
          {banner?.subtitle}
        </p>
      </div>

      {/* FULL WIDTH MEDIA */}
      <div className="w-full">
        {banner?.mediaType === "video" && banner?.bannerVideo ? (
          <video
            src={banner.bannerVideo.asset.url}
            autoPlay={banner?.autoPlay}
            muted
            loop
            playsInline
            className="w-full max-h-[600px] object-cover"
          />
        ) : (
          banner?.bannerImage && (
            <Image
              src={urlFor(banner.bannerImage).url()}
              alt="BRC Banner"
              width={1600}
              height={800}
              className="w-full max-h-[600px] object-cover"
              priority
            />
          )
        )}
      </div>

      {/* ACTION BUTTONS - LARGER TEXT & PADDING */}
      <div className="px-6 md:px-16 py-10 flex flex-wrap gap-6 items-center">
        <Link
          href={banner?.ctaLink || "/shop"}
          className="bg-shop_dark_green text-white px-10 py-5 rounded-md text-xl font-bold hover:bg-shop_light_green transition shadow-lg"
        >
          {banner?.ctaText || "Buy Now"}
        </Link>

        <span className="px-8 py-5 border-2 border-shop_dark_green rounded-md text-shop_dark_green text-lg font-black uppercase tracking-widest">
          🌾 5000+ Happy Farmers
        </span>

        <Link
          href="/blog"
          className="px-8 py-5 border-2 border-gray-400 rounded-md text-gray-700 text-lg font-bold hover:border-shop_dark_green hover:text-shop_dark_green transition"
        >
          Success Stories →
        </Link>
      </div>
    </motion.section>
  );
};

export default HomeBanner;