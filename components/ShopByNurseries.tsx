// import React from "react";
// import Title from "./Title";
// import Link from "next/link";
// import { getAllNurseries } from "@/sanity/queries";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";

// // const extraData = [
// //   {
// //     title: "Free Delivery",
// //     description: "Free shipping over ₹100",
// //     icon: <Truck size={45} />,
// //   },
// //   {
// //     title: "Free Return",
// //     description: "Free shipping over ₹100",
// //     icon: <GitCompareArrows size={45} />,
// //   },
// //   {
// //     title: "Customer Support",
// //     description: "Friendly 27/7 customer support",
// //     icon: <Headset size={45} />,
// //   },
// //   {
// //     title: "Money Back guarantee",
// //     description: "Quality checked by our team",
// //     icon: <ShieldCheck size={45} />,
// //   },
// // ];

// const extraData = [
//   {
//     title: "Eco-Friendly Delivery",
//     description: "Safe & handled with care",
//     icon: <Truck size={45} />,
//   },
//   {
//     title: "Expert Consultation",
//     description: "Free guidance for your plants",
//     icon: <Headset size={45} />,
//   },
//   {
//     title: "Quality Verified",
//     description: "Source from trusted nurseries",
//     icon: <ShieldCheck size={45} />,
//   },
//   {
//     title: "Secure Payment",
//     description: "100% safe & encrypted payments",
//     icon: <div className="p-1 border-2 border-current rounded-lg"><GitCompareArrows size={35} /></div>, 
//     // Note: Replaced 'Free Return' logic with a 'Secure' or 'Trust' vibe
//   },
// ];

// const ShopByNurseries = async () => {
//   const nurseries = await getAllNurseries();
//   return (
//     <div className="mb-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
//       <div className="flex items-center gap-5 justify-between mb-10">
//         <Title>Shop By Nurseries</Title>
//         <Link
//           href={"/shop"}
//           className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect"
//         >
//           View all
//         </Link>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
//         {nurseries?.map((nurseryItem) => (
//           <Link
//             key={nurseryItem?._id}
//             href={{ pathname: "/shop", query: { nursery: nurseryItem?.slug?.current } }}
//             className="bg-white w-34 h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-lg shadow-shop_dark_green/20 hoverEffect"
//           >
//             {nurseryItem?.image && (
//               <Image
//                 src={urlFor(nurseryItem?.image).url()}
//                 alt="nurseryImage"
//                 width={250}
//                 height={250}
//                 className="w-32 h-20 object-contain"
//               />
//             )}
//           </Link>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm hover:shadow-shop_light_green/20 py-5">
//         {extraData?.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-3 group text-lightColor hover:text-shop_light_green"
//           >
//             <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect">
//               {item?.icon}
//             </span>
//             <div className="text-sm">
//               <p className="text-darkColor/80 font-bold capitalize">
//                 {item?.title}
//               </p>
//               <p className="text-lightColor">{item?.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <p className="mt-6 text-sm text-gray-600">
//           We work with trusted nurseries and agriculture experts like
//           <strong> Krushi Saheb</strong>,
//           <strong> Bajbalkar Ropvatika</strong>, and verified consultants
//           to ensure healthy plants and genuine fertilizers.
//       </p>

//     </div>
//   );
// };

// export default ShopByNurseries;



















import React from "react";
import Title from "./Title";
import Link from "next/link";
import { getAllNurseries } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ShieldCheck, Truck, Sprout, UserCheck } from "lucide-react";
import { BajbalkarName } from "./BajbalkarName";

const extraData = [
  {
    title: "Nursery-Direct",
    description: "No middlemen, fresh from BRC",
    icon: <Sprout size={40} className="text-green-500" />,
  },
  {
    title: "Saheb's Expert Advice",
    description: "Technical support for every crop",
    icon: <UserCheck size={40} className="text-blue-500" />,
    href: "https://wa.me/919765797782?text=नमस्कार, मला बजबळकर कन्सल्टन्सी (BRC) बद्दल अधिक माहिती हवी आहे.",
  },
  {
    title: "Quality Batch-Check",
    description: "Every plant is hand-inspected",
    icon: <ShieldCheck size={40} className="text-orange-500" />,
  },
  {
    title: "Secure Logistics",
    description: "Safe transport for live plants",
    icon: <Truck size={40} className="text-purple-500" />,
  },
];

const ShopByNurseries = async () => {
  const nurseries = await getAllNurseries();

  return (
    <div className="mb-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title>Shop By Trusted Nurseries</Title>
        <Link
          href={"/shop"}
          className="text-sm font-black uppercase tracking-widest text-green-700 hover:text-shop_btn_dark_green hoverEffect underline decoration-2 underline-offset-4"
        >
          View all Partners
        </Link>
      </div>

      {/* Nursery Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {nurseries?.map((nurseryItem) => (
          <Link
            key={nurseryItem?._id}
            href={{
              pathname: "/shop",
              query: { nursery: nurseryItem?.slug?.current },
            }}
            className="bg-white group aspect-[4/3] flex items-center justify-center rounded-2xl overflow-hidden border border-gray-100 hover:border-green-500 hover:shadow-xl hover:shadow-green-900/10 transition-all duration-500"
          >
            {nurseryItem?.image && (
              <Image
              unoptimized
                src={urlFor(nurseryItem?.image).url()}
                alt="nurseryImage"
                width={200}
                height={200}
                className="w-full h-full p-4 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            )}
          </Link>
        ))}
      </div>

      {/* Trust Badges - The "Benefit" Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white">
        {extraData?.map((item, index) => {
          const BadgeContent = (
            <div className="flex items-center gap-4 group h-full cursor-pointer">
              <div className="text-green-700 bg-green-100 p-3 rounded-2xl group-hover:bg-green-700 group-hover:text-white transition-all duration-500 flex-shrink-0">
                {item?.icon}
              </div>
              <div className="text-sm">
                <p 
                  className="text-gray-900 font-black uppercase tracking-tight notranslate" 
                  translate="no"
                >
                  {item?.title}
                </p>
                <p className="text-gray-500 font-medium">{item?.description}</p>
              </div>
            </div>
          );

          return item.href ? (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:-translate-y-1"
            >
              {BadgeContent}
            </a>
          ) : (
            <div key={index}>{BadgeContent}</div>
          );
        })}
      </div>

      {/* Hero Brand Section */}
      <div className="mt-8 p-8 bg-gradient-to-br from-green-900 to-black rounded-3xl text-white/90 text-sm leading-relaxed border border-green-800 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
            <span className="text-shop_light_green font-black text-2xl tracking-tighter italic">
              BRC
            </span>
          </div>
          <div className="flex-1" >
            <h4 className="text-xl font-black text-shop_light_green uppercase tracking-tighter mb-2">
              Legacy of Excellence <BajbalkarName /> Ropvatika
            </h4>
            <p className="mb-4 text-gray-300">
              Under the visionary guidance of{" "}
              <strong className="text-white">
                <BajbalkarName /> Saheb
              </strong>
              , <BajbalkarName /> Ropvatika & Consultancy (BRC) has become a
              benchmark in high-tech horticulture. We don&apos;t just supply
              plants; we provide a 360° agricultural ecosystem.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-bold uppercase tracking-wide">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-shop_light_green rounded-full" />{" "}
                Government Certified Nursery
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-shop_light_green rounded-full" />{" "}
                Expert Field Consultancy
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-shop_light_green rounded-full" />{" "}
                Soil-Specific Fertilizers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-shop_light_green rounded-full" />{" "}
                Lab-Tested Seedling Health
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByNurseries;