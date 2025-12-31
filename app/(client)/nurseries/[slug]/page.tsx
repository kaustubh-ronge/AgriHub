// import { client } from "@/sanity/lib/client";
// import { notFound } from "next/navigation";
// import NurseryPageClient from "./_components/NurseryPageClient";
// import { Metadata } from "next";
// import { NURSERY_BY_SLUG_QUERY } from "@/sanity/queries/query"; // Ensure path is correct
// import { getNurseryBySlug } from "@/sanity/queries";
// // ✅ Import urlFor to convert image objects to strings
// import { urlFor } from "@/sanity/lib/image";

// // Define PageProps correctly for Next.js 15
// interface PageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// // 1. Generate Metadata for SEO
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { slug } = await params;
  
//   // Fetch data using the query STRING
//   const nursery = await client.fetch(NURSERY_BY_SLUG_QUERY, { slug });
  
//   if (!nursery) {
//     return { title: "Nursery Not Found | Bajbalkar Ropvatika & Consultancy" };
//   }

//   // ✅ FIX: Convert Sanity Image Object to a URL String
//   const imageUrl = nursery.image 
//     ? urlFor(nursery.image).width(1200).height(630).url() 
//     : null;

//   return {
//     title: `${nursery.title} - Official Store | Bajbalkar Ropvatika & Consultancy`,
//     description: nursery.description || `Buy high-quality seeds from ${nursery.title}.`,
//     openGraph: {
//         // ✅ Only pass the string URL if it exists
//         images: imageUrl ? [imageUrl] : []
//     }
//   };
// }

// // 2. Main Page Component
// export default async function SingleNurseryPage({ params }: PageProps) {
//   const { slug } = await params;
  
//   // Use the helper function to fetch data
//   const nursery = await getNurseryBySlug(slug);

//   if (!nursery) {
//     notFound();
//   }

//   return (
//     // ✅ Cast 'nursery' to 'any' to bypass strict TS optional checks
//     <NurseryPageClient nursery={nursery as any} />
//   );
// }

import { notFound } from "next/navigation";
import NurseryPageClient from "./_components/NurseryPageClient";
import { Metadata } from "next";
import { getNurseryBySlug } from "@/sanity/queries";

// Define PageProps correctly for Next.js 15
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Generate Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Reuse the same helper (it uses the updated query)
  const nursery = await getNurseryBySlug(slug);
  
  if (!nursery) {
    return { title: "Nursery Not Found | Bajbalkar Ropvatika & Consultancy" };
  }

  return {
    title: `${nursery.title} - Official Store | Bajbalkar Ropvatika & Consultancy`,
    description: nursery.description || `Buy high-quality seeds from ${nursery.title}.`,
    openGraph: {
        // Query now returns 'image' as a URL string, so we can use it directly
        images: nursery.image ? [nursery.image] : []
    }
  };
}

// 2. Main Page Component
export default async function SingleNurseryPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Use the helper function to fetch data
  const nursery = await getNurseryBySlug(slug);

  if (!nursery) {
    notFound();
  }

  // ✅ Cast to 'any' to bypass strict TS checks (safest fix)
  return <NurseryPageClient nursery={nursery as any} />;
}