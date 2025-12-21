// "use client"; // Add this at the very top

// import React, { useState } from "react";
// import Container from "./Container";
// import FooterTop from "./FooterTop";
// import Logo from "./Logo";
// import SocialMedia from "./SocialMedia";
// import { SubText, SubTitle } from "./ui/text";
// import { categoriesData, quickLinksData } from "@/constants/data";
// import Link from "next/link";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");

//     try {
//       const res = await fetch("/api/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setSuccess(data.message);
//         setEmail("");
//       } else {
//         setSuccess(data.message || "Something went wrong");
//       }
//     } catch (err) {
//       console.error(err);
//       setSuccess("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <footer className="bg-white border-t">
//       <Container>
//         <FooterTop />
//         <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Logo Section */}
//           <div className="space-y-4">
//             <Logo />
//             <SubText>
//               Discover curated furniture collections at Shopcartyt, blending
//               style and comfort to elevate your living spaces.
//             </SubText>
//             <SocialMedia
//               className="text-darkColor/60"
//               iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
//               tooltipClassName="bg-darkColor text-white"
//             />
//           </div>

//           {/* Quick Links */}
//           <div>
//             <SubTitle>Quick Links</SubTitle>
//             <ul className="space-y-3 mt-4">
//               {quickLinksData?.map((item) => (
//                 <li key={item?.title}>
//                   <Link
//                     href={item?.href}
//                     className="hover:text-shop_light_green hoverEffect font-medium"
//                   >
//                     {item?.title}
//                   </Link>
//                 </li>
//               ))}
//               {/* <li>
//                   <Link 
//                     href="/terms" 
//                     className="hover:text-shop_light_green hoverEffect font-medium text-black-600"
//                   >
//                     Terms & Conditions
//                   </Link>
//               </li> */}
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <SubTitle>Categories</SubTitle>
//             <ul className="space-y-3 mt-4">
//               {categoriesData?.map((item) => (
//                 <li key={item?.title}>
//                   <Link
//                     href={`/category/${item?.href}`}
//                     className="hover:text-shop_light_green hoverEffect font-medium"
//                   >
//                     {item?.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="space-y-4">
//             <SubTitle>Newsletter</SubTitle>
//             <SubText>
//               Subscribe to our newsletter to receive updates and exclusive
//               offers
//             </SubText>
//             <form className="space-y-3" onSubmit={handleSubscribe}>
//               <Input
//                 placeholder="Enter your email"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Button className="w-full" disabled={loading}>
//                 {loading ? "Subscribing..." : "Subscribe"}
//               </Button>
//               {success && <p className="text-green-500">{success}</p>}
//             </form>
//           </div>
//         </div>

//         {/* Replace your current copyright div with this */}
//         <div className="py-6 border-t text-center text-sm text-gray-600">
//           <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-2">
//             <Link 
//               href="/terms" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="hover:text-shop_light_green hoverEffect"
//             >
//               Terms & Conditions
//             </Link>
//             <Link 
//               href="/shipping" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="hover:text-shop_light_green hoverEffect"
//             >
//               Shipping Policy
//             </Link>
//             <Link 
//               href="/privacy" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="hover:text-shop_light_green hoverEffect"
//             >
//               Privacy Policy
//             </Link>
//           </div>
//           <div className="flex items-center justify-center gap-1">
//             © {new Date().getFullYear()} <Logo className="text-sm" />. All
//             rights reserved.
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;




























"use client";

import React, { useState } from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BajbalkarName } from "./BajbalkarName"; // Import for proper branding

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setEmail("");
      } else {
        setSuccess(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <Logo />
            <SubText className="leading-relaxed">
              Empowering farmers with high-tech horticulture solutions. At{" "}
              <BajbalkarName /> Ropvatika & Consultancy, we provide premium
              seedlings and scientific guidance to ensure your agricultural
              success.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          {/* Quick Links */}
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <SubTitle>Explore</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <SubTitle>Agri-Updates</SubTitle>
            <SubText>
              Join our community to receive the latest agricultural tips, batch
              updates, and expert nursery guidance directly.
            </SubText>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <Input
                placeholder="Enter your email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suppressHydrationWarning
              />
              <Button 
                className="w-full" 
                disabled={loading}
                suppressHydrationWarning
              >
                {loading ? "Subscribing..." : "Join Newsletter"}
              </Button>
              {success && <p className="text-green-500 text-xs font-bold">{success}</p>}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <Link 
              href="/terms" 
              className="hover:text-shop_light_green hoverEffect"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="/shipping" 
              className="hover:text-shop_light_green hoverEffect"
            >
              Delivery Policy
            </Link>
            <Link 
              href="/privacy" 
              className="hover:text-shop_light_green hoverEffect"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1 font-medium">
            © {new Date().getFullYear()} <BajbalkarName />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;