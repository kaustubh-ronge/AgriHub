"use client";

import { useState } from "react";
import { Share2, X, Copy } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ShareModalProps {
  productName: string;
}

const ShareModal = ({ productName }: ShareModalProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  // ✅ WhatsApp Share
  const handleWhatsAppShare = () => {
  const url = window.location.href;

  const message = `🌱 ${productName}

Check out this product 👇
${url}`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};


  // ✅ Copy Link with Toast
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "Product link copied to clipboard.",
    });
    setOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 text-xs sm:text-sm
                   font-medium text-gray-600 hover:text-blue-600
                   transition-colors p-2 hover:bg-gray-100 rounded-md"
      >
        <Share2 size={18} />
        Share
      </button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md rounded-xl">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle>Share Product</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </Button>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-3 mt-4">
            {/* WhatsApp */}
            <Button
              onClick={handleWhatsAppShare}
              className="w-full flex items-center justify-center gap-3
                         bg-green-600 hover:bg-green-700 text-white"
            >
              <FaWhatsapp className="h-5 w-5" />
              Share on WhatsApp
            </Button>

            {/* Copy Link */}
            <Button
              variant="outline"
              onClick={handleCopyLink}
              className="w-full flex items-center justify-center gap-3"
            >
              <Copy size={18} />
              Copy Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShareModal;
