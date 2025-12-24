// import { Facebook, Github, Instagram, Linkedin, Slack, Youtube } from "lucide-react";
// import React from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// interface Props {
//   className?: string;
//   iconClassName?: string;
//   tooltipClassName?: string;
// }
// const socialLink = [
//   {
//     title: "Youtube",
//     href: "https://youtube.com/channel/UCbGsO9pG1baayktWVYZNqeA",
//     icon: <Youtube className="w-5 h-5" />,
//   },
//   {
//     title: "Facebook",
//     href: "https://www.facebook.com/share/1FU52GRoH1/",
//     icon: <Facebook className="w-5 h-5" />,
//   },
//   {
//     title: "Instagram",
//     href: "https://www.instagram.com/bajbalkar_saheb/",
//     icon: <Instagram className="w-5 h-5" />,
//   },
// ];

// const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
//   return (
//     <TooltipProvider>
//       <div className={cn("flex items-center gap-3.5", className)}>
//         {socialLink?.map((item) => (
//           <Tooltip key={item?.title}>
//             <TooltipTrigger asChild>
//               <Link
//                 key={item?.title}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={item?.href}
//                 className={cn(
//                   "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
//                   iconClassName
//                 )}
//               >
//                 {item?.icon}
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent
//               className={cn(
//                 "bg-white text-darkColor font-semibold",
//                 tooltipClassName
//               )}
//             >
//               {item?.title}
//             </TooltipContent>
//           </Tooltip>
//         ))}
//       </div>
//     </TooltipProvider>
//   );
// };

// export default SocialMedia;











// "use client";

// import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// interface Props {
//   className?: string;
//   iconClassName?: string;
//   tooltipClassName?: string;
// }

// const socialLink = [
//   {
//     title: "YouTube",
//     href: "https://youtube.com/channel/UCbGsO9pG1baayktWVYZNqeA",
//     icon: <Youtube className="w-5 h-5 fill-current" />, 
//     // YouTube: Pure Red #FF0000
//     brandStyle: "bg-[#FF0000] shadow-[#FF0000]/20",
//   },
//   {
//     title: "Facebook",
//     href: "https://www.facebook.com/share/1FU52GRoH1/",
//     icon: <Facebook className="w-5 h-5 fill-current" />,
//     // Facebook: #1877F2 Blue
//     brandStyle: "bg-[#1877F2] shadow-[#1877F2]/20",
//   },
//   {
//     title: "Instagram",
//     href: "https://www.instagram.com/bajbalkar_saheb/",
//     icon: <Instagram className="w-5 h-5" />,
//     // Instagram: Official Linear Gradient
//     brandStyle: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-[#ee2a7b]/20",
//   },
//   {
//     title: "Location",
//     href: "https://maps.app.goo.gl/AePQwEoQag53hT279", 
//     icon: <MapPin className="w-5 h-5 fill-current" />,
//     // Google Maps: #34A853 Green
//     brandStyle: "bg-[#34A853] shadow-[#34A853]/20", 
//   },
// ];

// const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
//   const [mounted, setMounted] = useState(false);

//   // Solves hydration mismatch by ensuring UI matches server on first load
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="flex gap-3 h-10 w-40" />; 

//   return (
//     <TooltipProvider>
//       <div className={cn("flex items-center gap-3.5", className)}>
//         {socialLink?.map((item) => (
//           <Tooltip key={item?.title}>
//             <TooltipTrigger asChild>
//               <Link
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={item?.href}
//                 suppressHydrationWarning // Prevents fdprocessedid errors
//                 className={cn(
//                   "p-2.5 rounded-xl text-white transition-all duration-300 shadow-lg hover:-translate-y-1.5 active:scale-90 flex items-center justify-center",
//                   item.brandStyle,
//                   iconClassName
//                 )}
//               >
//                 {item?.icon}
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent
//               side="top"
//               className={cn(
//                 "bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest border-none px-3 py-1.5 shadow-xl",
//                 tooltipClassName
//               )}
//             >
//               {item?.title}
//             </TooltipContent>
//           </Tooltip>
//         ))}
//       </div>
//     </TooltipProvider>
//   );
// };

// export default SocialMedia;



















// "use client";

// import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// interface Props {
//   className?: string;
//   iconClassName?: string;
//   tooltipClassName?: string;
// }

// const socialLink = [
//   {
//     title: "YouTube",
//     href: "https://youtube.com/channel/UCbGsO9pG1baayktWVYZNqeA",
//     icon: <Youtube size={22} strokeWidth={2} fill="white" />, 
//     // YouTube: Deep Red Gradient
//     gradient: "from-[#FF0000] to-[#b91c1c]",
//   },
//   {
//     title: "Facebook",
//     href: "https://www.facebook.com/share/1FU52GRoH1/",
//     icon: <Facebook size={22} strokeWidth={0} fill="white" />,
//     // Facebook: Official Royal Blue Gradient
//     gradient: "from-[#1877F2] to-[#0e5a9e]",
//   },
//   {
//     title: "Instagram",
//     href: "https://www.instagram.com/bajbalkar_saheb/",
//     icon: <Instagram size={22} strokeWidth={2} />,
//     // Instagram: Complex Sunset Gradient (Yellow -> Pink -> Purple)
//     gradient: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
//   },
//   {
//     title: "Location",
//     href: "https://goo.gl/maps/example", 
//     icon: <MapPin size={22} strokeWidth={2} fill="white" />,
//     // Google Maps: Authentic Green to Blue Gradient
//     gradient: "from-[#34A853] to-[#4285F4]", 
//   },
// ];

// const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="flex gap-4 h-12 w-48" />; 

//   return (
//     <TooltipProvider>
//       <div className={cn("flex items-center gap-4", className)}>
//         {socialLink?.map((item) => (
//           <Tooltip key={item?.title}>
//             <TooltipTrigger asChild>
//               <Link
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={item?.href}
//                 className={cn(
//                   "relative group p-3 rounded-[1.25rem] text-white transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 active:scale-90 flex items-center justify-center overflow-hidden",
//                   "before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
//                   `bg-gradient-to-tr ${item.gradient}`,
//                   iconClassName
//                 )}
//               >
//                 {/* Glossy Overlay for "Original App" look */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none" />

//                 {/* The Icon */}
//                 <div className="relative z-10 drop-shadow-md transition-transform duration-300 group-hover:scale-110">
//                     {item?.icon}
//                 </div>

//                 {/* Subtle Shine Reflection */}
//                 <div className="absolute -left-full top-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-700 ease-in-out pointer-events-none" />
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent
//               side="top"
//               className={cn(
//                 "bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.15em] border-none px-3 py-1.5 shadow-2xl rounded-md",
//                 tooltipClassName
//               )}
//             >
//               {item?.title}
//             </TooltipContent>
//           </Tooltip>
//         ))}
//       </div>
//     </TooltipProvider>
//   );
// };

// export default SocialMedia;
















// "use client";

// import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// interface Props {
//   className?: string;
//   iconClassName?: string;
//   tooltipClassName?: string;
// }

// const socialLink = [
//   {
//     title: "YouTube",
//     href: "https://youtube.com/channel/UCbGsO9pG1baayktWVYZNqeA",
//     icon: <Youtube size={26} strokeWidth={1.5} fill="white" />, 
//     gradient: "from-[#FF0000] via-[#FF0000] to-[#D90000]",
//     textColor: "text-[#FF0000]"
//   },
//   {
//     title: "Facebook",
//     href: "https://www.facebook.com/share/1FU52GRoH1/",
//     icon: <Facebook size={28} strokeWidth={0} fill="white" />,
//     gradient: "from-[#1877F2] via-[#1877F2] to-[#0D65D9]",
//     textColor: "text-[#1877F2]"
//   },
//   {
//     title: "Instagram",
//     href: "https://www.instagram.com/bajbalkar_saheb/",
//     icon: <Instagram size={26} strokeWidth={2} color="white" />,
//     gradient: "bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,_#d6249f_60%,_#285AEB_90%)]",
//     textColor: "text-[#ee2a7b]"
//   },
//   {
//     title: "Location",
//     href: "https://goo.gl/maps/example", 
//     icon: <MapPin size={26} strokeWidth={2} fill="white" />,
//     gradient: "from-[#34A853] via-[#4285F4] to-[#EA4335]", 
//     textColor: "text-[#34A853]"
//   },
// ];

// const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="flex gap-4 h-12 w-48" />; 

//   return (
//     <TooltipProvider>
//       <div className={cn("flex items-center gap-4", className)}>
//         {socialLink?.map((item) => (
//           <Tooltip key={item?.title} delayDuration={0}>
//             <TooltipTrigger asChild>
//               <Link
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={item?.href}
//                 className={cn(
//                   // 1. THE ACTUAL LOGO STRUCTURE (Squircle)
//                   "relative h-12 w-12 rounded-[1rem] text-white flex items-center justify-center overflow-hidden transition-all duration-300 group",
//                   "shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]",
//                   item.title === "Instagram" ? item.gradient : `bg-gradient-to-tr ${item.gradient}`,
//                   iconClassName
//                 )}
//               >
//                 {/* 2. TOP GLOSS LAYER (Standard App Icon Detail) */}
//                 <div className="absolute inset-x-0 top-0 h-[45%] bg-white/15 pointer-events-none z-10" />
                
//                 {/* 3. INNER BORDER BEVEL */}
//                 <div className="absolute inset-0 border border-white/10 rounded-[1rem] pointer-events-none z-10" />

//                 {/* 4. THE BRAND ICON (Always Visible) */}
//                 <div className="relative z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transform transition-transform duration-300 group-hover:scale-110">
//                     {item?.icon}
//                 </div>

//                 {/* 5. HOVER SHINE EFFECT */}
//                 <div className="absolute -left-full top-0 w-full h-full bg-white/20 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-500 ease-in-out pointer-events-none z-30" />
//               </Link>
//             </TooltipTrigger>
            
//             {/* 6. POPUP NAME DISPLAY ON HOVER */}
//             <TooltipContent
//               side="top"
//               sideOffset={8}
//               className={cn(
//                 "bg-white border-none px-3 py-1.5 shadow-2xl rounded-lg text-[10px] font-black uppercase tracking-widest animate-in fade-in zoom-in duration-200",
//                 item.textColor,
//                 tooltipClassName
//               )}
//             >
//               {item?.title}
//               {/* Tooltip Arrow */}
//               <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
//             </TooltipContent>
//           </Tooltip>
//         ))}
//       </div>
//     </TooltipProvider>
//   );
// };

// export default SocialMedia;




















"use client";

import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "YouTube",
    href: "https://youtube.com/channel/UCbGsO9pG1baayktWVYZNqeA",
    // FIXED: Fill="white" on Youtube makes it a solid play button logo immediately
    icon: <Youtube size={28} strokeWidth={1} fill="white" />, 
    gradient: "from-[#FF0000] via-[#FF0000] to-[#cc0000]",
    textColor: "text-[#FF0000]"
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/share/1FU52GRoH1/",
    icon: <Facebook size={30} strokeWidth={0} fill="white" />,
    gradient: "from-[#1877F2] via-[#1877F2] to-[#0e5a9e]",
    textColor: "text-[#1877F2]"
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/bajbalkar_saheb/",
    icon: <Instagram size={26} strokeWidth={2.5} color="white" />,
    gradient: "bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,_#d6249f_60%,_#285AEB_90%)]",
    textColor: "text-[#ee2a7b]"
  },
  {
    title: "Location",
    href: "https://maps.app.goo.gl/AePQwEoQag53hT279", 
    // FIXED: Fill="white" on MapPin makes it a solid pin logo immediately
    icon: <MapPin size={26} strokeWidth={1.5} fill="white" />,
    gradient: "from-[#34A853] via-[#4285F4] to-[#EA4335]", 
    textColor: "text-[#34A853]"
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="flex gap-4 h-12 w-48" />; 

  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-4", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "relative h-14 w-14 rounded-[1.1rem] text-white flex items-center justify-center overflow-hidden transition-all duration-300 group",
                  "shadow-[0_6px_12px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] active:scale-95",
                  item.title === "Instagram" ? item.gradient : `bg-gradient-to-tr ${item.gradient}`,
                  iconClassName
                )}
              >
                {/* 1. Glossy Overlay for "Real App" Look */}
                <div className="absolute inset-x-0 top-0 h-[45%] bg-white/20 pointer-events-none z-10" />
                
                {/* 2. Inner Bevel Highlight */}
                <div className="absolute inset-0 border border-white/10 rounded-[1.1rem] pointer-events-none z-10" />

                {/* 3. The Solid Icon - Now visible as "Actual Logo" without hover */}
                <div className="relative z-20 drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110">
                    {item?.icon}
                </div>

                {/* 4. Shine Sweep on Hover */}
                <div className="absolute -left-full top-0 w-full h-full bg-white/30 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-700 ease-in-out pointer-events-none z-30" />
              </Link>
            </TooltipTrigger>
            
            <TooltipContent
              side="top"
              sideOffset={12}
              className={cn(
                "bg-white border-none px-4 py-2 shadow-2xl rounded-xl text-[11px] font-black uppercase tracking-widest animate-in fade-in zoom-in slide-in-from-bottom-2 duration-200",
                item.textColor,
                tooltipClassName
              )}
            >
              {item?.title}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45" />
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;