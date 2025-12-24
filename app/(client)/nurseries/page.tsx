// import Container from "@/components/Container";
// import NurseryList from "@/components/NurseryList"; // Import the component we made above
// import React from "react";
// import { Sprout, Star, ShieldCheck } from "lucide-react"; // Icons for trust badges
// import { getAllNurseries } from "@/sanity/queries";


// // Metadata for SEO
// export const metadata = {
//   title: "Top Nurseries | Bajbalkar Ropvatika & Consultancy",
//   description: "Explore India's best nurseries offering high-quality seeds, plants, and agricultural tools.",
// };

// const NurseryPage = async () => {
//   // Fetch data
//   const nurseries = await getAllNurseries();

//   return (
//     <div className="bg-white min-h-screen pb-20">
      
//       {/* --- Section 1: Hero Banner --- */}
//       <div className="bg-[#f0fdf4] border-b border-green-100 pt-16 pb-24 px-4 relative overflow-hidden">
//         {/* Background Patterns (Decoration) */}
//         <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//         <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

//         <Container className="relative z-10 text-center space-y-6">
//           <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase mb-2">
//             Trusted Partners
//           </span>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
//             Explore India Best <span className="text-green-600">Nurseries</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Directly connect with certified nurseries to buy high-yield seeds, healthy saplings, and authentic fertilizers.
//           </p>

//           {/* Trust Indicators */}
//           <div className="flex flex-wrap justify-center gap-6 mt-8">
//             <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
//                 <ShieldCheck className="text-green-600 w-5 h-5" /> Verified Sellers
//             </div>
//             <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
//                 <Star className="text-yellow-500 w-5 h-5" /> Top Rated
//             </div>
//             <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
//                 <Sprout className="text-green-600 w-5 h-5" /> Organic Certified
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* --- Section 2: Nursery List with Search --- */}
//       <Container className="relative z-20">
//         <NurseryList nurseries={nurseries} />
//       </Container>

//     </div>
//   );
// };

// export default NurseryPage;






















import Container from "@/components/Container";
import NurseryList from "@/components/NurseryList";
import React from "react";
import { Sprout, Star, ShieldCheck } from "lucide-react";
import { getAllNurseries } from "@/sanity/queries";

export const metadata = {
  title: "Top Nurseries | Bajbalkar Ropvatika & Consultancy",
  description: "Explore India's best nurseries offering high-quality seeds, plants, and agricultural tools.",
};

const NurseryPage = async () => {
  const nurseries = await getAllNurseries();

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* ... Hero Banner Code ... */}
      {/* --- Section 1: Hero Banner --- */}
      <div className="bg-[#f0fdf4] border-b border-green-100 pt-16 pb-24 px-4 relative overflow-hidden">
         {/* Background Patterns (Decoration) */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
         <Container className="relative z-10 text-center space-y-6">
           <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase mb-2">
             Trusted Partners
           </span>
           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
             Explore India Best <span className="text-green-600">Nurseries</span>
           </h1>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Directly connect with certified nurseries to buy high-yield seeds, healthy saplings, and authentic fertilizers.
           </p>
           {/* Trust Indicators */}
           <div className="flex flex-wrap justify-center gap-6 mt-8">
             <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
                 <ShieldCheck className="text-green-600 w-5 h-5" /> Verified Sellers
             </div>
             <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
                 <Star className="text-yellow-500 w-5 h-5" /> Top Rated
             </div>
             <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm">
                 <Sprout className="text-green-600 w-5 h-5" /> Organic Certified
             </div>
           </div>
         </Container>
      </div>

      <Container className="relative z-20">
        <NurseryList nurseries={nurseries} />
      </Container>
    </div>
  );
};

export default NurseryPage;