"use client";

import { useState, useEffect } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"; // Ensure you have this component or use standard <textarea>
import { User, Phone, Send, MessageSquare } from "lucide-react";
import { Product } from "@/sanity.types";

const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

interface Props {
  product: Product;
  whatsappNumber: string;
  onFormSubmit: () => void;
}

export function ProductInquiryForm({ product, whatsappNumber, onFormSubmit }: Props) {
  const { isSignedIn, user } = useUser();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState(""); // 👈 New State for Question

  useEffect(() => {
    if (isSignedIn && user) {
      setName(user.fullName || "");
      // If user has a phone number saved in Clerk, you could try to pre-fill it here
      // setPhone(user.primaryPhoneNumber?.phoneNumber || ""); 
    }
  }, [isSignedIn, user]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Construct the WhatsApp Message
    const message = `Hello! I have a question about this product:\n\n` +
                    `🌱 *Product:* ${product.name}\n` +
                    `🔗 *Link:* ${window.location.href}\n\n` +
                    `----------------------------\n` +
                    `👤 *Name:* ${name}\n` +
                    `📞 *Phone:* ${phone}\n` +
                    `❓ *Question:* ${question || "Is this available?"}`; // 👈 Include Question
    
    const encodedMessage = encodeURIComponent(message);
    const url = isMobileDevice()
      ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Open WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');

    // Close Modal
    if (onFormSubmit) onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div className="space-y-1.5">
        <Label htmlFor="name" className="flex items-center gap-2 text-gray-600">
            <User size={14}/> Full Name
        </Label>
        <Input 
            id="name" 
            required 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Your Name"
        />
      </div>

      {/* Phone Field */}
      <div className="space-y-1.5">
        <Label htmlFor="phone" className="flex items-center gap-2 text-gray-600">
            <Phone size={14}/> Phone Number
        </Label>
        <Input 
            id="phone" 
            type="tel" 
            required 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="e.g., 9876543210" 
        />
      </div>

      {/* Question Field (New) */}
      <div className="space-y-1.5">
        <Label htmlFor="question" className="flex items-center gap-2 text-gray-600">
            <MessageSquare size={14}/> Your Question / Message
        </Label>
        <Textarea 
            id="question" 
            rows={3}
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            placeholder="e.g. Do you deliver to Pune? What is the best planting time?" 
            className="resize-none"
        />
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-11 mt-2">
        Send via WhatsApp <Send className="ml-2 h-4 w-4" />
      </Button>

      {!isSignedIn && (
         <p className="text-xs text-center text-gray-400 mt-2">
            Tip: Sign in to auto-fill your name next time.
         </p>
      )}
    </form>
  );
}