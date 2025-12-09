import { Product } from "@/sanity.types"; 
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { PortableText } from "@portabletext/react";

// ✅ TYPE FIX: Removed 'any', added specific types allowed for rendering
const SpecRow = ({ label, value }: { label: string; value: string | number | boolean | null | undefined }) => {
  if (!value) return null; 
  return (
    <p className="flex items-center justify-between py-1.5 border-b border-gray-100">
      <span className="text-gray-600">{label}:</span>
      <span className="font-semibold tracking-wide text-right">{value.toString()}</span>
    </p>
  );
};

// --- Helper Components for each Product Type ---

const SeedSpecs = ({ product }: { product: Product }) => (
  <>
    <SpecRow label="Seed Type" value={product.seedType} />
    <SpecRow label="Crop Type" value={product.cropType} />
    <SpecRow
      label="Germination Rate"
      value={product.germinationRate ? `${product.germinationRate}%` : null}
    />
    <SpecRow
      label="Purity"
      value={product.purity ? `${product.purity}%` : null}
    />
    <SpecRow label="Seed Treatment" value={product.seedTreatment} />
    <SpecRow label="Sowing Season" value={product.sowingSeason?.join(", ")} />
    <SpecRow label="Days to Harvest" value={product.timeToHarvest} />
    <SpecRow
      label="Disease Resistance"
      value={product.diseaseResistance?.join(", ")}
    />
  </>
);

const FertilizerSpecs = ({ product }: { product: Product }) => (
  <>
    <SpecRow label="Form" value={product.fertilizerForm} />
    <SpecRow label="NPK Composition" value={product.nutrientComposition} />
    <SpecRow
      label="Micronutrients"
      value={product.micronutrients?.join(", ")}
    />
    <SpecRow
      label="Application"
      value={product.applicationMethod?.join(", ")}
    />
    <SpecRow label="Release Type" value={product.releaseType} />
    <SpecRow
      label="Organic"
      value={
        product.isOrganic
          ? `Yes (${product.certificationBody || "Certified"})`
          : "No"
      }
    />
  </>
);

const ChemicalSpecs = ({ product }: { product: Product }) => (
  <>
    <SpecRow label="Active Ingredient" value={product.chemicalName} />
    <SpecRow label="Target" value={product.targetPestsOrWeeds?.join(", ")} />
    <SpecRow label="Mode of Action" value={product.modeOfAction} />
    <SpecRow label="Dosage" value={product.dilutionRatio} />
    <SpecRow label="Waiting Period" value={product.waitingPeriod} />
    <SpecRow label="Toxicity" value={product.toxicityClass} />
  </>
);

const MachinerySpecs = ({ product }: { product: Product }) => (
  <>
    <SpecRow label="Power Source" value={product.powerSource} />
    <SpecRow label="Horsepower (HP)" value={product.horsepower} />
    <SpecRow label="Engine Specs" value={product.engineSpecs} />
    <SpecRow label="Warranty" value={product.warrantyInfo} />
    <SpecRow label="Service Available" value={product.afterSalesService ? "Yes" : "No"} />
  </>
);

const FeedSpecs = ({ product }: { product: Product }) => (
  <>
    <SpecRow label="Target Animal" value={product.animalType?.join(", ")} />
    <SpecRow label="Feed Type" value={product.feedType} />
    <SpecRow label="Storage" value={product.storageInstructions} />
    {/* Special handling for block content */}
    {product.nutritionalAnalysis && (
       <div className="py-2">
         <span className="text-gray-600">Nutritional Analysis:</span>
         <div className="prose prose-sm max-w-none text-right font-semibold tracking-wide">
           <PortableText value={product.nutritionalAnalysis} />
         </div>
       </div>
    )}
  </>
);


// --- The Main Component ---

const ProductCharacteristics = ({
  product,
}: {
  product: Product | null | undefined;
}) => {
  if (!product) return null;

  const renderVariantSpecs = () => {
    switch (product.productVariant) {
      case "seeds":
        return <SeedSpecs product={product} />;
      case "fertilizer":
        return <FertilizerSpecs product={product} />;
      case "pesticide":
      case "herbicide":
      case "fungicide":
        return <ChemicalSpecs product={product} />;
      case "machinery":
        return <MachinerySpecs product={product} />;
      case "feed":
        return <FeedSpecs product={product} />;
      default:
        return (
          <p className="py-2 text-sm text-gray-500">
            This product has no additional specifications.
          </p>
        );
    }
  };

  const variantLabel = product.productVariant 
    ? product.productVariant.charAt(0).toUpperCase() + product.productVariant.slice(1)
    : "Product";

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Characteristics</AccordionTrigger>
        <AccordionContent className="space-y-1">
          {/* General Specs (for all products) */}
          {/* @ts-expect-error - nursery is expanded in GROQ query but typed as reference in schema */}
          <SpecRow label="Nursery" value={product.nursery?.title} />
          <SpecRow label="Unit" value={product.unit} />
          <SpecRow
            label="Stock"
            value={(product.stock as number) > 0 ? `${product.stock} units` : "Out of Stock"}
          />
          <SpecRow label="Product Type" value={variantLabel} />
          <SpecRow label="SKU" value={product.sku} />

          <div className="pt-4 mt-4 border-t border-gray-200">
            <h4 className="text-sm font-bold text-black mb-2">
              {variantLabel} Specifications
            </h4>
            {renderVariantSpecs()}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;