// import { client } from "@/sanity/lib/client";
// import { notFound } from "next/navigation";
// import NurseryPageClient from "./_components/NurseryPageClient";
// import { Metadata } from "next";
// import { getNurseryBySlugQuery } from "@/sanity/queries";

// // Define the type for the page props
// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // 1. Generate Metadata for SEO
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { slug } = params; // Extract slug
//   const nursery = await client.fetch(getNurseryBySlugQuery, { slug });
  
//   if (!nursery) {
//     return { title: "Nursery Not Found | AgriHub" };
//   }

//   return {
//     title: `${nursery.title} - Official Store | AgriHub`,
//     description: nursery.description || `Buy high-quality seeds and plants from ${nursery.title} on AgriHub.`,
//     openGraph: {
//         images: [nursery.image || '']
//     }
//   };
// }

// // 2. Main Page Component
// export default async function SingleNurseryPage({ params }: PageProps) {
//   const { slug } = params; // Extract slug
  
//   // Fetch data on the server
//   const nursery = await client.fetch(getNurseryBySlugQuery, { slug });

//   // Handle 404
//   if (!nursery) {
//     notFound();
//   }

//   // Render the Client Component with data
//   return <NurseryPageClient nursery={nursery} />;
// }















import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import NurseryPageClient from "./_components/NurseryPageClient";
import { Metadata } from "next";
import { getNurseryBySlugQuery } from "@/sanity/queries";

// Define the type for the page props using Promise for Next.js 15
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Generate Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // FIXED: Added await
  const nursery = await client.fetch(getNurseryBySlugQuery, { slug });
  
  if (!nursery) {
    return { title: "Nursery Not Found | Bajbalkar Ropvatika & Consultancy" };
  }

  return {
    title: `${nursery.title} - Official Store | Bajbalkar Ropvatika & Consultancy`,
    description: nursery.description || `Buy high-quality seeds from ${nursery.title}.`,
    openGraph: {
        images: [nursery.image || '']
    }
  };
}

// 2. Main Page Component
export default async function SingleNurseryPage({ params }: PageProps) {
  const { slug } = await params; // FIXED: Added await
  
  const nursery = await client.fetch(getNurseryBySlugQuery, { slug });

  if (!nursery) {
    notFound();
  }

  return <NurseryPageClient nursery={nursery} />;
}