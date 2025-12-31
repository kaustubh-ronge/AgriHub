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
//       {/* TEXT SECTION - INCREASED FONT SIZES */}
//       <div className="px-6 md:px-16 py-10 md:py-14 text-center md:text-left">
//         <h1 className="text-4xl md:text-6xl font-black text-shop_dark_green leading-tight tracking-tighter">
//           {banner?.title}
//         </h1>

//         <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
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
//             className="w-full max-h-[600px] object-cover"
//           />
//         ) : (
//           banner?.bannerImage && (
//             <Image
//               src={urlFor(banner.bannerImage).url()}
//               alt="BRC Banner"
//               width={1600}
//               height={800}
//               className="w-full max-h-[600px] object-cover"
//               priority
//             />
//           )
//         )}
//       </div>

//       {/* ACTION BUTTONS - LARGER TEXT & PADDING */}
//       <div className="px-6 md:px-16 py-10 flex flex-wrap gap-6 items-center">
//         <Link
//           href={banner?.ctaLink || "/shop"}
//           className="bg-shop_dark_green text-white px-10 py-5 rounded-md text-xl font-bold hover:bg-shop_light_green transition shadow-lg"
//         >
//           {banner?.ctaText || "Buy Now"}
//         </Link>

//         <span className="px-8 py-5 border-2 border-shop_dark_green rounded-md text-shop_dark_green text-lg font-black uppercase tracking-widest">
//           🌾 5000+ Happy Farmers
//         </span>

//         <Link
//           href="/blog"
//           className="px-8 py-5 border-2 border-gray-400 rounded-md text-gray-700 text-lg font-bold hover:border-shop_dark_green hover:text-shop_dark_green transition"
//         >
//           Success Stories →
//         </Link>
//       </div>
//     </motion.section>
//   );
// };

// export default HomeBanner;































// "use client";

// import { motion } from "motion/react";
// import Image from "next/image";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";
// import { Phone, MessageSquare, Youtube, Instagram, Facebook, MapPin } from "lucide-react";

// const HomeBanner = ({ banner }: { banner: any }) => {
//   // WhatsApp Message Helper
//   const openWhatsApp = (number: string, service: string) => {
//     const text = encodeURIComponent(`Namaskar, I am interested in your ${service} services. Please provide more details.`);
//     window.open(`https://wa.me/${number}?text=${text}`, "_blank");
//   };

//   const socialLinks = [
//     { name: "Youtube", icon: <Youtube />, href: "https://youtube.com/channel/UCbGsO9pG1baayktWVYZNqeA", color: "#FF0000" },
//     { name: "Facebook", icon: <Facebook />, href: "https://www.facebook.com/share/1FU52GRoH1/", color: "#1877F2" },
//     { name: "Instagram", icon: <Instagram />, href: "https://www.instagram.com/bajbalkar_saheb/", color: "#E4405F" },
//     { name: "Location", icon: <MapPin />, href: "https://goo.gl/maps/example", color: "#34A853" },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="mt-5 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
//     >
//       {/* TEXT SECTION - FULL WIDTH */}
//       <div className="px-6 md:px-16 py-12 text-center md:text-left bg-gradient-to-b from-shop_light_pink/20 to-transparent">
//         <h1 className="text-4xl md:text-7xl font-black text-shop_dark_green leading-tight tracking-tighter mb-6">
//           {banner?.title}
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-700 max-w-5xl leading-relaxed font-medium">
//           {banner?.subtitle}
//         </p>
//       </div>

//       {/* FULL WIDTH MEDIA */}
//       <div className="w-full relative">
//         {banner?.mediaType === "video" && banner?.bannerVideo ? (
//           <video
//             src={banner.bannerVideo.asset.url}
//             autoPlay={banner?.autoPlay}
//             muted
//             loop
//             playsInline
//             className="w-full h-[400px] md:h-[650px] object-cover"
//           />
//         ) : (
//           banner?.bannerImage && (
//             <Image
//               src={urlFor(banner.bannerImage).url()}
//               alt="BRC Banner"
//               width={1920}
//               height={1080}
//               className="w-full h-[400px] md:h-[650px] object-cover"
//               priority
//             />
//           )
//         )}
//       </div>

//       {/* CONTACT & SOCIAL SECTION */}
//       <div className="px-6 md:px-16 py-12 bg-gray-50/50">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
//           {/* 1. CONTACT CARDS */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-black text-shop_dark_green uppercase tracking-wider mb-4">Quick Contact</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Nursery Contact */}
//               <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
//                 <p className="text-xs font-bold text-gray-400 uppercase mb-2">🌱 Nursery Enquiries</p>
//                 <p className="text-lg font-black text-gray-800 mb-4">+91 9673747158</p>
//                 <div className="flex gap-3">
//                   <a href="tel:+919765797782" className="flex-1 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg flex justify-center text-gray-700 transition"><Phone size={20}/></a>
//                   <button onClick={() => openWhatsApp("919765797782", "Nursery")} className="flex-1 bg-green-500 hover:bg-green-600 p-3 rounded-lg flex justify-center text-white transition"><MessageSquare size={20}/></button>
//                 </div>
//               </div>

//               {/* Consultancy Contact */}
//               <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
//                 <p className="text-xs font-bold text-gray-400 uppercase mb-2">👨‍🌾 Consultancy Advice</p>
//                 <p className="text-lg font-black text-gray-800 mb-4">+91 9765797782</p>
//                 <div className="flex gap-3">
//                   <a href="tel:+919765797782" className="flex-1 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg flex justify-center text-gray-700 transition"><Phone size={20}/></a>
//                   <button onClick={() => openWhatsApp("919765797782", "Consultancy")} className="flex-1 bg-green-600 hover:bg-green-700 p-3 rounded-lg flex justify-center text-white transition"><MessageSquare size={20}/></button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 2. SOCIAL MEDIA APP ICONS */}
//           <div className="flex flex-col justify-center items-center lg:items-end">
//             <h3 className="text-2xl font-black text-shop_dark_green uppercase tracking-wider mb-6">Stay Connected</h3>
//             <div className="flex gap-5">
//               {socialLinks.map((social) => (
//                 <Link
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
//                   style={{ backgroundColor: social.color }}
//                 >
//                   {social.icon}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM ACTION BAR */}
//         <div className="mt-12 pt-10 border-t border-gray-200 flex flex-wrap gap-6 items-center justify-between">
//            <div className="flex flex-wrap gap-4">
//             <Link
//               href={banner?.ctaLink || "/shop"}
//               className="bg-shop_dark_green text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-shop_light_green transition shadow-xl"
//             >
//               {banner?.ctaText || "Buy Now"}
//             </Link>
//             <span className="px-8 py-5 bg-white border-2 border-shop_dark_green rounded-xl text-shop_dark_green text-lg font-black uppercase tracking-widest flex items-center gap-2">
//               🌾 5000+ Happy Farmers
//             </span>
//            </div>
          
//           <Link
//             href="/blog"
//             className="px-8 py-5 bg-gray-800 text-white rounded-xl text-lg font-bold hover:bg-shop_dark_green transition flex items-center gap-2"
//           >
//             Success Stories →
//           </Link>
//         </div>
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
import { Phone, MessageSquare, Youtube, Instagram, Facebook, MapPin } from "lucide-react";

const HomeBanner = ({ banner }: { banner: any }) => {
  // WhatsApp Message Helper
  const openWhatsApp = (number: string, service: string) => {
    const text = encodeURIComponent(`Namaskar, I am interested in your ${service} services. Please provide more details.`);
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  const socialLinks = [
    { 
      name: "Youtube", 
      icon: <Youtube size={24} />, 
      href: "https://youtube.com/channel/UCbGsO9pG1baayktWVYZNqeA", 
      gradient: "from-[#FF0000] to-[#b91c1c]",
      textColor: "text-[#FF0000]"
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={24} />, 
      href: "https://www.facebook.com/share/1FU52GRoH1/", 
      gradient: "from-[#1877F2] to-[#0e5a9e]",
      textColor: "text-[#1877F2]"
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={24} />, 
      href: "https://www.instagram.com/bajbalkar_saheb/", 
      gradient: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      textColor: "text-[#ee2a7b]"
    },
    { 
      name: "Location", 
      icon: <MapPin size={24} />, 
      href: "https://maps.app.goo.gl/AePQwEoQag53hT279", 
      gradient: "from-[#34A853] to-[#4285F4]",
      textColor: "text-[#34A853]"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-5 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
    >
      {/* 1. TEXT SECTION */}
      <div className="px-6 md:px-16 py-12 text-center md:text-left bg-gradient-to-b from-shop_light_pink/20 to-transparent">
        <h1 className="text-3xl md:text-6xl font-black text-shop_dark_green leading-tight tracking-tighter mb-6">
          {banner?.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-5xl leading-relaxed font-medium">
          {banner?.subtitle}
        </p>

        {/* NUMBERS AND SOCIALS ON ONE LINE */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center gap-8 border-t border-gray-100 pt-8">
          {/* Contacts Group */}
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-1">
              <div className="text-[14px] font-black text-gray-400 uppercase tracking-[0.2em]">Nursery</div>
              <div className="flex items-center gap-3">
                <span className="font-black text-gray-900 text-xl">+91 9673747158</span>
                <div className="flex gap-2">
                    <a href="tel:+919673747158" className="p-2 bg-gray-100 rounded-full text-shop_dark_green hover:bg-shop_dark_green hover:text-white transition-all"><Phone size={18}/></a>
                    <button onClick={() => openWhatsApp("919673747158", "Nursery")} className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-all"><MessageSquare size={18}/></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-[14px] font-black text-gray-400 uppercase tracking-[0.2em]">Consultancy</div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-black text-gray-900 text-xl">+91 9765797782</span>
                  <div className="flex gap-2">
                    <a href="tel:+919765797782" className="p-2 bg-gray-100 rounded-full text-shop_dark_green hover:bg-shop_dark_green hover:text-white transition-all"><Phone size={18}/></a>
                    <button onClick={() => openWhatsApp("919765797782", "Consultancy")} className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-all"><MessageSquare size={18}/></button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-gray-900 text-xl">+91 9876543210</span>
                  <div className="flex gap-2">
                    <a href="tel:+919876543210" className="p-2 bg-gray-100 rounded-full text-shop_dark_green hover:bg-shop_dark_green hover:text-white transition-all"><Phone size={18}/></a>
                    <button onClick={() => openWhatsApp("919876543210", "Consultancy")} className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-all"><MessageSquare size={18}/></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Group with Name Display on Hover */}
          <div className="flex gap-4 lg:ml-auto">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="group relative flex items-center"
              >
                {/* TOOLTIP NAME - Displays on Hover */}
                <span className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border shadow-xl rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 pointer-events-none z-50 ${social.textColor}`}>
                  {social.name}
                  {/* Triangle Arrow */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r rotate-45"></span>
                </span>

                {/* APP ICON */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl bg-gradient-to-tr ${social.gradient}`}>
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN MEDIA SECTION (VIDEO/IMAGE) */}
      <div className="w-full relative">
        {banner?.mediaType === "video" && banner?.bannerVideo ? (
          <video
            src={banner.bannerVideo.asset.url}
            autoPlay={banner?.autoPlay}
            muted
            loop
            playsInline
            className="w-full h-[400px] md:h-[650px] object-cover shadow-inner"
          />
        ) : (
          banner?.bannerImage && (
            <Image
            unoptimized
              src={urlFor(banner.bannerImage).url()}
              alt="BRC Banner"
              width={1920}
              height={1080}
              className="w-full h-[400px] md:h-[650px] object-cover"
              priority
            />
          )
        )}
      </div>

      {/* 3. BOTTOM ACTION BAR */}
      <div className="px-6 md:px-12 py-10 flex flex-wrap gap-6 items-center justify-between bg-gray-50/50">
        <div className="flex flex-wrap gap-4">
          <Link
            href={banner?.ctaLink || "/shop"}
            className="bg-shop_dark_green text-white px-8 py-4 rounded-sm text-sm font-bold hover:bg-shop_light_green transition shadow-xl uppercase tracking-wider"
          >
            {banner?.ctaText || "Buy Now"}
          </Link>
          <span className="px-6 py-4 bg-white border-2 border-shop_dark_green rounded-sm text-shop_dark_green text-sm font-black uppercase tracking-widest flex items-center gap-2">
            🌾 5000+ Happy Farmers
          </span>
        </div>
        
        <Link
          href="/blog"
          className="px-6 py-4 bg-gray-800 text-white rounded-sm text-sm font-bold hover:bg-shop_dark_green transition flex items-center gap-2 uppercase tracking-widest"
        >
          Success Stories →
        </Link>
      </div>
    </motion.section>
  );
};

export default HomeBanner;