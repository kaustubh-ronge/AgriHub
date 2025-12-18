"use client";

import React, { useState, useEffect } from "react";
import { BarChart2, Check } from "lucide-react";
import { Product } from "@/sanity.types";
import { useToast } from "@/components/ui/use-toast"; // 👈 Ensure this path is correct
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
}

const AddToCompareButton = ({ product }: Props) => {
  const { toast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  // Check if already added on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingStr = localStorage.getItem("compare");
      if (existingStr) {
        const items: Product[] = JSON.parse(existingStr);
        if (items.some((p) => p._id === product._id)) {
            setIsAdded(true);
        }
      }
    }
  }, [product._id]);

  const handleAddToCompare = () => {
    const existingStr = localStorage.getItem("compare");
    const existingItems: Product[] = existingStr ? JSON.parse(existingStr) : [];

    // Check for duplicates
    const isAlreadyAdded = existingItems.some((item) => item._id === product._id);

    if (isAlreadyAdded) {
      toast({
        title: "Already Added",
        description: `${product.name} is already in compare list.`,
        variant: "destructive", 
      });
      return;
    }

    // Limit to 4
    if (existingItems.length >= 4) {
      toast({
        title: "Limit Reached",
        description: "You can only compare up to 4 products.",
        variant: "destructive",
      });
      return;
    }

    // Add Item
    const updatedItems = [...existingItems, product];
    localStorage.setItem("compare", JSON.stringify(updatedItems));
    setIsAdded(true);

    // Success Toast
    toast({
      title: "Added to Compare",
      description: `${product.name} added to comparison.`,
      className: "bg-green-600 text-white border-none",
    });
  };

  return (
    <button
      onClick={handleAddToCompare}
      disabled={isAdded}
      className={cn(
        "flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-colors p-2 rounded-md border",
        isAdded 
          ? "bg-green-50 text-green-700 border-green-200 cursor-default"
          : "text-gray-600 hover:text-blue-600 hover:bg-gray-100 border-transparent"
      )}
    >
      {isAdded ? <Check size={18} /> : <BarChart2 size={18} />}
      {isAdded ? "Added" : "Compare"}
    </button>
  );
};

export default AddToCompareButton;