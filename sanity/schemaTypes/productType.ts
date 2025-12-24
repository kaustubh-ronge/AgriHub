
import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { nursery } from "./nursery";

// We'll group fields to keep the editor clean. This is now CRITICAL.
const productGroups = [
  { name: "main", title: "Main", default: true },
  { name: "details", title: "Core Details & Pricing" },
  { name: "agriData", title: "Agri-Specific Data" }, // 👈 THE MOST IMPORTANT GROUP
  { name: "media", title: "Media" },
  { name: "logistics", title: "Shipping & Logistics" },
  { name: "relations", title: "Related Products" },
];

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  groups: productGroups,
  fields: [
    // --- MAIN GROUP ---
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      group: "main",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productVariant",
      title: "Product Type",
      type: "string",
      group: "main",
      description:
        "Select the type of product. This will show/hide relevant fields.",
      options: {
        list: [
          { title: "Plants", value: "plants" },
          { title: "Seeds", value: "seeds" },
          { title: "Fertilizer", value: "fertilizer" },
          { title: "Pesticide / Insecticide", value: "pesticide" },
          { title: "Herbicide / Weedicide", value: "herbicide" },
          // { title: "Fungicide", value: "fungicide" },
          // { title: "Farm Machinery", value: "machinery" },
          // { title: "Machinery Parts", value: "parts" },
          // { title: "Hand Tools", value: "tools" },
          // { title: "Irrigation", value: "irrigation" },
          // { title: "Animal Feed", value: "feed" },
          // { title: "Veterinary Medicine", value: "vet" },
          // { title: "Growing Media (e.g., Coco Peat)", value: "media" },
          // { title: "Protective Gear", value: "gear" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "main",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "nursery",
      title: "Nursery",
      type: "reference",
      group: "main",
      to: { type: "nursery" },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "main",
      of: [{ type: "reference", to: { type: "category" } }],
    }),

    // --- REFERENCE FOR FERTILIZER ---
    defineField({
      name: "fertilizerFormulaData",
      title: "Select Fertilizer Formula",
      type: "reference",
      to: [{ type: "fertilizerFormula" }], // Must match name in fertilizerFormulaType.ts
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),

     // --- REFERENCE FOR PLANTS ---
    defineField({
      name: "plantBreedData",
      title: "Select Plant Breed",
      type: "reference",
      to: [{ type: "plantBreed" }], // Must match name in plantBreadType.ts
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "plants",
    }),

    // Add these fields inside the agriData group in productType.ts
    defineField({
      name: "preparationTime",
      title: "Batch Preparation Time (Days)",
      type: "number",
      group: "agriData",
      description: "Days required to prepare the batch for dispatch (e.g., 15 days).",
      initialValue: 15,
      hidden: ({ document }) => document?.productVariant !== "plants",
    }),
    defineField({
      name: "batchStatus",
      title: "Current Batch Status",
      type: "string",
      group: "main",
      options: {
        list: [
          { title: "Booking Open (Fresh Batch)", value: "booking" },
          { title: "Ready for Dispatch", value: "ready" },
          { title: "Sold Out", value: "soldout" },
        ],
      },
      initialValue: "booking",
    }),

    defineField({
      name: "stock",
      title: "Physical Stock Available",
      type: "number",
      group: "details",
      description: "Only used when batch is 'Ready for Dispatch'.",
      // ✅ Only show stock input if the owner marks it as 'Ready'
      hidden: ({ document }) => document?.batchStatus !== "ready", 
      validation: (Rule) => Rule.min(0),
    }),


        // Add these inside the agriData group in productType.ts
    defineField({
      name: "seedingDate",
      title: "Seeding Date (Date Seed was put in Tray)",
      type: "date",
      group: "agriData",
      description: "Used to calculate the current age of the seedling.",
      hidden: ({ document }) => document?.productVariant !== "plants",
    }),
    defineField({
      name: "transplantDeadlineDays",
      title: "Max Days for Transplanting",
      type: "number",
      group: "agriData",
      description: "Maximum age (in days) the plant can stay in the nursery before it must be planted.",
      initialValue: 30,
      hidden: ({ document }) => document?.productVariant !== "plants",
    }),
    defineField({
      name: "trayPlantCount",
      title: "Plants per Tray",
      type: "number",
      group: "agriData",
      initialValue: 104,
      hidden: ({ document }) => document?.productVariant !== "plants",
    }),
    defineField({
      name: "trayPrice",
      title: "Price per Full Tray",
      type: "number",
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "plants",
    }),

        // Inside the agriData group in productType.ts
    defineField({
      name: "soilRecommendation",
      title: "Recommended Soil",
      type: "string",
      group: "agriData", // You can also put this in breed schema
      options: {
        list: ["Black Soil", "Red Soil", "Sandy Soil", "All Types"]
      }
    }),

    // --- DETAILS & PRICING GROUP ---
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "Discount Percentage %",
      type: "number",
      group: "details",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).max(100),
    }),
    // defineField({
    //   name: "stock",
    //   title: "Stock",
    //   type: "number",
    //   group: "details",
    //   validation: (Rule) => Rule.min(0),
    // }),
    defineField({
      name: "unit",
      title: "Unit",
      type: "string",
      group: "details",
      description: "e.g., 'kg', 'liter', 'pack', '100 seeds', '500g bag'",
      validation: (Rule) => Rule.required(),
    }),
    // New: How the product is sold (important for agri products)
    defineField({
      name: "sellingUnit",
      title: "Selling Unit",
      type: "string",
      group: "details",
      description:
        "Select how this product is sold. This affects how price and purchasing behave.",
      options: {
        list: [
          { title: "Piece / Each", value: "piece" },
          { title: "Kilogram (kg)", value: "kg" },
          { title: "Gram (g)", value: "g" },
          { title: "Liter (L)", value: "liter" },
          { title: "Milliliter (ml)", value: "ml" },
          { title: "Tray", value: "tray" },
          { title: "Pack", value: "pack" },
          { title: "Bag", value: "bag" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "otherSellingUnit",
      title: "If Other, Please Specify",
      type: "string",
      group: "details",
      hidden: ({ document }) => document?.sellingUnit !== "other",
    }),
    defineField({
      name: "unitsPerSell",
      title: "Units per Selling Unit",
      type: "number",
      group: "details",
      description:
        "Optional: how many base units are in one selling unit (e.g., 10 seeds per pack). Leave empty if not applicable.",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "allowFractional",
      title: "Allow fractional purchases?",
      type: "boolean",
      group: "details",
      description: "If true, customers can buy fractional quantities (e.g., 0.5 kg).",
      initialValue: false,
    }),
    // defineField({
    //   name: "sku",
    //   title: "SKU (Stock Keeping Unit)",
    //   type: "string",
    //   group: "details",
    // }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      group: "details",
      description: "For product cards (max 150 characters).",
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: "detailedDescription",
      title: "Detailed Description",
      type: "blockContent", // Requires blockContent schema
      group: "details",
      description: "Main description for the product page.",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Inquiry Number",
      type: "string",
      group: "details",
    }),

    // --- MEDIA GROUP ---
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      group: "media",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "youtubeVideoUrl",
      title: "YouTube Video URL",
      type: "url",
      group: "media",
      description: "Optional: A link to a product demo or review video.",
    }),

    // --- LOGISTICS GROUP ---
    defineField({
      name: "shippingWeight",
      title: "Shipping Weight (in grams)",
      type: "number",
      group: "logistics",
      description: "Used to calculate shipping cost.",
    }),
    defineField({
      name: "dimensions",
      title: "Shipping Dimensions (in cm)",
      type: "object",
      group: "logistics",
      fields: [
        defineField({ name: "length", title: "Length (cm)", type: "number" }),
        defineField({ name: "width", title: "Width (cm)", type: "number" }),
        defineField({ name: "height", title: "Height (cm)", type: "number" }),
      ],
    }),
    defineField({
      name: "isFragile",
      title: "Is this item fragile?",
      type: "boolean",
      group: "logistics",
      initialValue: false,
    }),
    defineField({
      name: "requiresRefrigeration",
      title: "Requires Refrigeration?",
      type: "boolean",
      group: "logistics",
      description: "For vet medicines, etc.",
      initialValue: false,
    }),

    // --- RELATIONS GROUP ---
    defineField({
      name: "relatedProducts",
      title: "Related Products (e.g., 'Customers also bought...')",
      type: "array",
      group: "relations",
      of: [{ type: "reference", to: { type: "product" } }],
    }),
    defineField({
      name: "compatibleParts",
      title: "Compatible Parts (for machinery)",
      type: "array",
      group: "relations",
      description: "Link to parts that work with this machine.",
      of: [
        {
          type: "reference",
          to: {
            type: "product",
            options: { filter: `productVariant == "parts"` },
          },
        },
      ],
      hidden: ({ document }) => document?.productVariant !== "machinery",
    }),

    // ##################################################################
    // --- 🧑‍🌾 AGRI-SPECIFIC DATA GROUP (CONDITIONAL FIELDS) ---
    // ##################################################################

    // --- FIELDS FOR SEEDS ---
    defineField({
      name: "seedType",
      title: "Seed Type",
      type: "string",
      group: "agriData",
      options: { list: ["Hybrid", "Open-Pollinated", "Heirloom", "GMO"] },
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
    defineField({
      name: "cropType",
      title: "Crop Type",
      type: "string",
      group: "agriData",
      options: {
        list: ["Vegetable", "Fruit", "Cereal", "Flower", "Fodder", "Spices"],
      },
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
    defineField({
      name: "germinationRate",
      title: "Germination Rate (%)",
      type: "number",
      group: "agriData",
      description: "e.g., 85 (for 85%)",
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
    defineField({
      name: "purity",
      title: "Purity (%)",
      type: "number",
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
    defineField({
      name: "seedTreatment",
      title: "Seed Treatment",
      type: "string",
      description: "e.g., 'Treated with Thiram'",
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
    defineField({
      name: "sowingSeason",
      title: "Sowing Season",
      type: "array",
      group: "agriData",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: ["Kharif", "Rabi", "Zaid", "All Season"],
      },
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
    defineField({
      name: "timeToHarvest",
      title: "Days to Harvest",
      type: "string",
      description: "e.g., '60-70 days'",
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
    defineField({
      name: "diseaseResistance",
      title: "Disease Resistance",
      type: "array",
      group: "agriData",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "e.g., 'Leaf Curl Virus', 'Powdery Mildew'",
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),

    // --- FIELDS FOR FERTILIZER ---
    defineField({
      name: "fertilizerForm",
      title: "Form",
      type: "string",
      group: "agriData",
      options: {
        list: ["Liquid", "Granular", "Powder", "Stick", "Water-Soluble"],
      },
      hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),
    defineField({
      name: "nutrientComposition",
      title: "Nutrient Composition (NPK)",
      type: "string",
      group: "agriData",
      description: "e.g., '19-19-19' or '10-26-26'",
      hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),
    defineField({
      name: "micronutrients",
      title: "Micronutrients",
      type: "array",
      group: "agriData",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "e.g., 'Zinc', 'Boron', 'Iron'",
      hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),
    defineField({
      name: "applicationMethod",
      title: "Application Method",
      type: "array",
      group: "agriData",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          "Foliar Spray",
          "Drip Irrigation",
          "Soil Application",
          "Drenching",
        ],
      },
      hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),
    defineField({
      name: "releaseType",
      title: "Release Type",
      type: "string",
      group: "agriData",
      options: {
        list: ["Slow-Release", "Quick-Release", "Controlled-Release"],
      },
      hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),
    defineField({
      name: "isOrganic",
      title: "Is this product Organic?",
      type: "boolean",
      group: "agriData",
      initialValue: false,
      hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),
    defineField({
      name: "certificationBody",
      title: "Organic Certification Body",
      type: "string",
      group: "agriData",
      description: "e.g., 'NPOP', 'USDA Organic'",
      hidden: ({ document, parent }) =>
        !(document?.productVariant === "fertilizer" && parent?.isOrganic),
    }),

    // --- FIELDS FOR PESTICIDES / HERBICIDES / FUNGICIDES ---
    defineField({
      name: "chemicalName",
      title: "Active Ingredient / Chemical Name",
      type: "string",
      group: "agriData",
      description: "e.g., 'Imidacloprid 17.8% SL'",
      hidden: ({ document }) =>
        !["pesticide", "herbicide", "fungicide"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "targetPestsOrWeeds",
      title: "Target Pests / Weeds / Diseases",
      type: "array",
      group: "agriData",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      hidden: ({ document }) =>
        !["pesticide", "herbicide", "fungicide"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "modeOfAction",
      title: "Mode of Action",
      type: "string",
      group: "agriData",
      options: { list: ["Systemic", "Contact", "Translaminar", "Stomach"] },
      hidden: ({ document }) =>
        !["pesticide", "herbicide", "fungicide"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "dilutionRatio",
      title: "Dilution Ratio / Dosage",
      type: "string",
      group: "agriData",
      description: "e.g., '1-2 ml per Liter of water' or '500g per acre'",
      hidden: ({ document }) =>
        !["pesticide", "herbicide", "fungicide"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "waitingPeriod",
      title: "Waiting Period / Pre-Harvest Interval (PHI)",
      type: "string",
      group: "agriData",
      description: "Time from last spray to harvest, e.g., '7 days'",
      hidden: ({ document }) =>
        !["pesticide", "herbicide", "fungicide"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "toxicityClass",
      title: "Toxicity Class (WHO)",
      type: "string",
      group: "agriData",
      options: {
        list: [
          "Class I (Red)",
          "Class II (Yellow)",
          "Class III (Blue)",
          "Class IV (Green)",
        ],
      },
      hidden: ({ document }) =>
        !["pesticide", "herbicide", "fungicide"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "safetyDataSheet",
      title: "Material Safety Data Sheet (MSDS)",
      type: "file",
      group: "agriData",
      hidden: ({ document }) =>
        !["pesticide", "herbicide", "fungicide"].includes(
          document?.productVariant as string
        ),
    }),

    // --- FIELDS FOR FARM MACHINERY ---
    defineField({
      name: "powerSource",
      title: "Power Source",
      type: "string",
      group: "agriData",
      options: {
        list: [
          "Diesel",
          "Electric (Battery)",
          "Petrol",
          "Manual",
          "PTO Driven",
        ],
      },
      hidden: ({ document }) => document?.productVariant !== "machinery",
    }),
    defineField({
      name: "horsepower",
      title: "Horsepower (HP)",
      type: "number",
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "machinery",
    }),
    defineField({
      name: "engineSpecs",
      title: "Engine Specifications",
      type: "text",
      group: "agriData",
      description: "e.g., '2-stroke, 52cc'",
      hidden: ({ document }) => document?.productVariant !== "machinery",
    }),
    defineField({
      name: "warrantyInfo",
      title: "Warranty Information",
      type: "string",
      group: "agriData",
      description: "e.g., '1 Year Manufacturer Warranty'",
      hidden: ({ document }) =>
        !["machinery", "tools", "parts"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "afterSalesService",
      title: "After-Sales Service Available?",
      type: "boolean",
      group: "agriData",
      initialValue: false,
      hidden: ({ document }) => document?.productVariant !== "machinery",
    }),

    // --- FIELDS FOR MACHINERY PARTS / TOOLS ---
    defineField({
      name: "material",
      title: "Material",
      type: "string",
      group: "agriData",
      description: "e.g., 'Hardened Steel', 'Carbon Steel', 'PVC'",
      hidden: ({ document }) =>
        !["parts", "tools", "irrigation", "gear"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "partNumber",
      title: "Part Number",
      type: "string",
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "parts",
    }),
    defineField({
      name: "compatibleWith",
      title: "Compatible Machinery / Models",
      type: "text",
      group: "agriData",
      description: "List the models this part is compatible with.",
      hidden: ({ document }) => document?.productVariant !== "parts",
    }),

    // --- FIELDS FOR IRRIGATION ---
    defineField({
      name: "irrigationType",
      title: "Irrigation Product Type",
      type: "string",
      group: "agriData",
      options: {
        list: [
          "Drip System",
          "Sprinkler System",
          "Pipes",
          "Fittings",
          "Valves",
          "Filter",
        ],
      },
      hidden: ({ document }) => document?.productVariant !== "irrigation",
    }),
    defineField({
      name: "pipeDiameter",
      title: "Diameter / Size",
      type: "string",
      group: "agriData",
      description: "e.g., '16mm', '3/4 inch', '4 LPH'",
      hidden: ({ document }) => document?.productVariant !== "irrigation",
    }),
    defineField({
      name: "flowRate",
      title: "Flow Rate",
      type: "string",
      group: "agriData",
      description: "e.g., '4 LPH' (for drippers)",
      hidden: ({ document }) => document?.productVariant !== "irrigation",
    }),

    // --- FIELDS FOR ANIMAL FEED / VET ---
    defineField({
      name: "animalType",
      title: "Target Animal",
      type: "array",
      group: "agriData",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: ["Cattle", "Poultry", "Fish", "Goat", "Sheep", "Pet"],
      },
      hidden: ({ document }) =>
        !["feed", "vet"].includes(document?.productVariant as string),
    }),
    defineField({
      name: "feedType",
      title: "Feed Type",
      type: "string",
      group: "agriData",
      options: {
        list: [
          "Starter",
          "Grower",
          "Finisher",
          "Concentrate",
          "Mineral Mixture",
        ],
      },
      hidden: ({ document }) => document?.productVariant !== "feed",
    }),
    defineField({
      name: "nutritionalAnalysis",
      title: "Nutritional Analysis (Guaranteed)",
      type: "blockContent",
      group: "agriData",
      description: "e.g., Crude Protein (Min) 18%, Crude Fat (Min) 3%, etc.",
      hidden: ({ document }) => document?.productVariant !== "feed",
    }),
    defineField({
      name: "dosage",
      title: "Dosage / Administration",
      type: "text",
      group: "agriData",
      description: "For vet medicines. e.g., '1ml per 10kg body weight'",
      hidden: ({ document }) => document?.productVariant !== "vet",
    }),
    defineField({
      name: "storageInstructions",
      title: "Storage Instructions",
      type: "string",
      group: "agriData",
      description: "e.g., 'Store in a cool, dry place', 'Refrigerate at 2-8°C'",
      hidden: ({ document }) =>
        !["feed", "vet", "pesticide"].includes(
          document?.productVariant as string
        ),
    }),
    defineField({
      name: "prescriptionRequired",
      title: "Requires Prescription?",
      type: "boolean",
      group: "agriData",
      initialValue: false,
      hidden: ({ document }) => document?.productVariant !== "vet",
    }),
    defineField({
        name: "reviewCount",
        title: "Total Reviews",
        type: "number",
        group: "details",
        initialValue: 0,
        validation: (Rule) => Rule.min(0),
    }),

    // Inside defineType fields array:

   

    

  ],
  preview: {
    select: {
      title: "name",
      media: "images",
      variant: "productVariant",
      nursery: "nursery.title",
    },
    prepare(selection) {
      const { title, media, variant, nursery } = selection;
      const image = media && media[0];
      return {
        title: title,
        subtitle: `${nursery || ""} - ${
          variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : ""
        }`,
        media: image,
      };
    },
  },
});
