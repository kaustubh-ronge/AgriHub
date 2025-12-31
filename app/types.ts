// ✅ FIX 1: Use '@' alias to find the file safely
import { Product } from "@/sanity.types"; 

export interface PlantBreedData {
  plantName?: string;
  breedName?: string;
  varietyType?: string;
  seedUsed?: string;
  description?: string;
}

export interface FertilizerFormulaData {
  formulaName?: string;
  npk?: string;
  fertilizerForm?: string;
  releaseType?: string;
  isOrganic?: boolean;
  description?: string;
}

// ✅ FIX 2: We must OMIT strict fields from the base 'Product' type 
// before redefining them as generic strings to avoid TypeScript conflicts.
export interface ExpandedProduct extends Omit<Product, "productVariant" | "seedType" | "categories" | "nursery" | "sellingUnit"> {
  
  // Re-define as loose strings to prevent "not assignable" errors
  productVariant?: string;
  seedType?: string;
  sellingUnit?: string;

  // Add missing fields
  trayPlantCount?: number;
  trayPrice?: number;
  isForSale?: boolean;
  
  // Agri fields
  daysInNursery?: number;
  transplantDeadline?: number;
  germinationRate?: number;
  applicationMethod?: string[];

  // Expanded References
  plantBreedData?: PlantBreedData;
  fertilizerFormulaData?: FertilizerFormulaData;
  
  // Expanded Objects
  categories?: { title: string }[];
  nursery?: { title: string } | any;
}