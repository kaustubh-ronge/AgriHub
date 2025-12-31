import { getSingleBlog } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import SocialVideoPlayer from "@/components/SocialVideoPlayer";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Youtube, 
  Facebook, 
  Instagram, 
  Video, 
  PlayCircle,
  Link as LinkIcon
} from "lucide-react";
import { Button } from "@/components/ui/button"; 

// --- HELPER: Auto-detect Icon based on URL ---
const getIconFromUrl = (url: string) => {
  if (!url) return <ExternalLink className="w-4 h-4 mr-2" />;
  const lowerUrl = url.toLowerCase();
  
  if (lowerUrl.includes('youtube') || lowerUrl.includes('youtu.be')) return <Youtube className="w-4 h-4 mr-2 text-red-600" />;
  if (lowerUrl.includes('facebook')) return <Facebook className="w-4 h-4 mr-2 text-blue-600" />;
  if (lowerUrl.includes('instagram')) return <Instagram className="w-4 h-4 mr-2 text-pink-600" />;
  if (lowerUrl.includes('whatsapp')) return <MessageSquare className="w-4 h-4 mr-2 text-green-600" />;
  
  return <LinkIcon className="w-4 h-4 mr-2 text-gray-600" />;
};

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center py-40 px-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">No Story Found</h2>
        <Button asChild variant="outline" className="mt-4"><Link href="/blog">Back</Link></Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      
      {/* 1. MEDIA SECTION */}
      <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-10">
        
        {/* Main Image */}
        {blog.mainImage && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
             <Image 
                unoptimized
                src={urlFor(blog.mainImage).url()} 
                alt={blog.title} 
                fill
                className="object-cover"
              />
          </div>
        )}

        {/* Video Gallery */}
        {blog.videoGalleryUrls && blog.videoGalleryUrls.length > 0 && (
            <div className="pt-2">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <PlayCircle className="text-shop_dark_green"/> Video Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blog.videoGalleryUrls.map((vidUrl: string, idx: number) => (
                        <div key={idx} className="bg-black rounded-xl overflow-hidden shadow-md">
                            <video src={vidUrl} controls className="w-full h-56 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* 🔥 NEW: CUSTOM LINKS SECTION */}
        {blog.socialLinks && blog.socialLinks.length > 0 && (
            <div className="pt-2">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Important Links</h3>
                <div className="flex flex-wrap gap-3">
                    {blog.socialLinks.map((link: any, idx: number) => (
                        <Button 
                            key={idx} 
                            variant="outline" 
                            asChild 
                            className="h-12 border-2 border-shop_dark_green/20 text-shop_dark_green hover:bg-shop_dark_green hover:text-white transition-all text-base px-6"
                        >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {/* Icon Auto-detected from URL */}
                                {getIconFromUrl(link.url)}
                                {/* Title from Sanity */}
                                {link.title}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        )}
        
        {/* Legacy Support (If you still use the old specific fields) */}
        {(blog.youtubeUrl || blog.facebookUrl || blog.instagramUrl) && (
             <div className="space-y-6 pt-6 border-t">
                {blog.youtubeUrl && <SocialVideoPlayer url={blog.youtubeUrl} />}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blog.facebookUrl && <SocialVideoPlayer url={blog.facebookUrl} />}
                  {blog.instagramUrl && <SocialVideoPlayer url={blog.instagramUrl} />}
                </div>
             </div>
        )}

      </div>

      {/* 2. TITLE & DATE */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4 uppercase">
          {blog.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span className="font-medium text-green-700 underline underline-offset-4">By {blog.author?.name || "Adv. Kalidas Bajbalkar"}</span>
          <span>•</span>
          <span>{dayjs(blog.publishedAt).format("MMMM D, YYYY")}</span>
        </div>
      </div>

      {/* 3. CONTENT */}
      <div className="prose prose-lg max-w-none prose-green mb-20 border-t pt-10">
        <PortableText value={blog.body} />
      </div>

      {/* 4. FOOTER */}
      <hr className="mb-10 border-gray-100" />
      {blog.blogcategories?.map((cat: any) => (
        <div key={cat.title} className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 text-white mb-10">
            <h2 className="text-2xl font-bold mb-4">{cat.title} Guidance</h2>
            <p className="mb-6 opacity-90">{cat.description || "Expert nursery guidance available."}</p>
            <a href="https://wa.me/919765797782" target="_blank" className="bg-white text-green-900 px-8 py-3 rounded-full font-bold">
               Chat on WhatsApp
            </a>
        </div>
      ))}
    </div>
  );
}