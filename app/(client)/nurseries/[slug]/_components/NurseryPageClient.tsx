"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, Phone, Mail, Star, Leaf, ArrowRight, ShieldCheck, 
  Sprout, ShoppingBag, 
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

// --- 1. Define Types ---

// Define the shape of the Nursery object coming from Sanity
interface Nursery {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  rating?: number;
}

// Define props for the Animation Wrapper
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Define props for the Main Component
interface NurseryPageClientProps {
  nursery: Nursery;
}

// --- 2. Animation Wrapper ---
function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- 3. Main Component ---
export default function NurseryPageClient({ nursery }: NurseryPageClientProps) {
  if (!nursery) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Nursery not found</h2>
        <Button asChild variant="outline">
          <Link href="/nurseries">Back to Nurseries</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* --- Hero Banner Section --- */}
      <div className="relative h-[400px] w-full bg-green-50 overflow-hidden">
        {nursery.image ? (
          <Image
          unoptimized
            src={nursery.image}
            alt={nursery.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full text-green-200">
            <Leaf size={100} />
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-10">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-green-600 hover:bg-green-700 border-none text-white px-3 py-1">
                  <ShieldCheck size={14} className="mr-1" /> Verified Partner
                </Badge>
                {nursery.rating && (
                  <Badge variant="outline" className="text-white border-white/40 bg-black/20 backdrop-blur-sm">
                    <Star size={14} className="mr-1 text-yellow-400 fill-yellow-400" /> 
                    {nursery.rating} / 5
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                {nursery.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-200 font-medium">
                <span className="flex items-center gap-2">
                  <MapPin size={18} /> {nursery.address || "India"}
                </span>
                {nursery.phoneNumber && (
                  <span className="flex items-center gap-2">
                    <Phone size={18} /> {nursery.phoneNumber}
                  </span>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Left Column: Main Content --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Card */}
            <AnimatedSection delay={0.1}>
              <Card className="shadow-lg border-gray-100 overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Sprout className="text-green-600" /> About the Nursery
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {nursery.description || "This nursery is dedicated to providing high-quality seeds, plants, and agricultural tools to help you grow the perfect garden or farm. We prioritize organic practices and sustainable growth."}
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Contact Email</span>
                      <span className="text-gray-900 font-semibold flex items-center gap-2">
                        <Mail size={16} className="text-green-600" />
                        {nursery.email || "contact@BRC.com"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Call to Action Banner */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Want to buy from {nursery.title}?</h3>
                  <p className="text-green-100">Explore their full catalog of seeds, plants, and tools in our shop.</p>
                </div>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-green-700 hover:bg-green-50 shadow-md font-bold rounded-full px-8"
                >
                  <Link href={`/shop?nursery=${nursery.slug}`}>
                    Visit Shop Profile <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* --- Right Column: Sidebar Stats/Info --- */}
          <div className="lg:col-span-1 space-y-6">
            <AnimatedSection delay={0.3}>
              <Card className="shadow-md border-green-100 bg-green-50/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Leaf className="text-green-600" size={20} /> Nursery Highlights
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={16} />
                      <span>Certified Organic Seeds Available</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={16} />
                      <span>Nationwide Delivery Support</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={16} />
                      <span>24/7 Expert Support for Farmers</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={16} />
                      <span>Quality Checked & Verified</span>
                    </li>
                  </ul>
                  
                  <Separator className="my-6 bg-green-200" />
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href={`/shop?nursery=${nursery.slug}`}>
                      <ShoppingBag className="mr-2 h-4 w-4" /> Browse Products
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </div>
  );
}