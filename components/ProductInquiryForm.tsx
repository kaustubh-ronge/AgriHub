"use client";

import { useState, useEffect } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Phone, Send } from "lucide-react";
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

  useEffect(() => {
    if (isSignedIn && user) {
      setName(user.fullName || "");
    }
  }, [isSignedIn, user]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isSignedIn) return;

    const message = `Hello! I am interested in the following product from your website:\n\n` +
                    `*Product:* ${product.name}\n` +
                    `*Link:* ${window.location.href}\n\n` +
                    `Please let me know if it is available.\n\n` +
                    `*My Details:*\n` +
                    `*Name:* ${name}\n` +
                    `*Phone:* ${phone}`;
    
    const encodedMessage = encodeURIComponent(message);
    const url = isMobileDevice()
      ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');

    // Close the form dialog
    if (onFormSubmit) onFormSubmit();
  };

  if (!isSignedIn) {
    return (
      <div className="text-center space-y-4 py-4">
        <p className="font-semibold text-lg">Please sign in to inquire</p>
        <SignInButton mode="modal">
          <Button size="lg" className="w-full">Sign In</Button>
        </SignInButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2"><User size={16}/> Full Name</Label>
        <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2"><Phone size={16}/> Phone Number</Label>
        <Input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g., 9876543210" />
      </div>
      <Button type="submit" className="w-full group text-base font-bold" size="lg">
        Inquire via WhatsApp
        <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </form>
  );
}