import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  link?: string; // Optional clickable link
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "At/post Chikmahud, Chick-Mahud, Maharashtra 413306",
    icon: <MapPin className="h-6 w-6 text-gray-600" />,
    link: "https://maps.app.goo.gl/MJh5w7HE8N8pM1B47", // clickable map
  },
  {
    title: "Call Us",
    subtitle: "+919765797782",
    icon: <Phone className="h-6 w-6 text-gray-600" />,
    link: "tel:+919765797782", // clickable phone
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: <Clock className="h-6 w-6 text-gray-600" />,
  },
  {
    title: "Email Us",
    subtitle: "bajbalkarropvatika@gmail.com",
    icon: <Mail className="h-6 w-6 text-gray-600" />,
    link: "mailto:bajbalkarropvatika@gmail.com", // clickable email
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
        >
          {item.icon}
          <div className="text-sm">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black underline"
              >
                {item.subtitle}
              </a>
            ) : (
              <p className="text-gray-600">{item.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;












// import { Facebook, Instagram, Youtube } from "lucide-react";
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
//     // Brand Color: Red
//     brandColor: "hover:bg-[#FF0000] hover:border-[#FF0000]",
//   },
//   {
//     title: "Facebook",
//     href: "https://www.facebook.com/yourprofile", // Fixed your URL
//     icon: <Facebook className="w-5 h-5" />,
//     // Brand Color: Blue
//     brandColor: "hover:bg-[#1877F2] hover:border-[#1877F2]",
//   },
//   {
//     title: "Instagram",
//     href: "https://www.instagram.com/bajbalkar_saheb/",
//     icon: <Instagram className="w-5 h-5" />,
//     // Brand Color: Instagram Gradient (using a warm pink/purple hex)
//     brandColor: "hover:bg-[#E4405F] hover:border-[#E4405F]",
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
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={item?.href}
//                 className={cn(
//                   "p-2 border rounded-full text-darkColor/60 transition-all duration-300 hover:text-white",
//                   item.brandColor, // Dynamic brand color class
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