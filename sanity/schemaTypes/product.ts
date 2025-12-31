// import {
//   SparklesIcon,
// } from "@sanity/icons";

// export default {
//   name: "product",
//   title: "Product (Plant / Seed / Fertilizer)",
//   type: "document",
//   icon: SparklesIcon,

//   fields: [
//     {
//       name: "name",
//       title: "Product Name (Plant or Product name)",
//       type: "string",
//       validation: (Rule: any) => Rule.required(),
//     },

//     {
//       name: "productType",
//       title: "Product Type (Plant / Seed / Fertilizer)",
//       type: "string",
//       options: {
//         list: [
//           { title: "Plant", value: "plant" },
//           { title: "Seed", value: "seed" },
//           { title: "Fertilizer", value: "fertilizer" },
//         ],
//         layout: "radio",
//       },
//     },

//     {
//       name: "plantBreed",
//       title: "Plant Breed (Variety name – example: Alphonso Mango)",
//       type: "string",
//     },

//     {
//       name: "seedUsed",
//       title: "Seed Used (Seed name used to grow this plant)",
//       type: "string",
//     },

//     {
//       name: "bredFrom",
//       title: "Bred From (Grafting / Tissue culture / Seed)",
//       type: "string",
//       options: {
//         list: [
//           { title: "Seed", value: "seed" },
//           { title: "Grafting", value: "grafting" },
//           { title: "Tissue Culture", value: "tissue" },
//         ],
//       },
//     },

//     {
//       name: "author",
//       title: "Created By (Nursery / Expert / Farmer name)",
//       type: "reference",
//       to: [{ type: "author" }],
//     },

//     {
//       name: "sellingUnit",
//       title: "Selling Unit (kg / plant / tray / liter)",
//       type: "string",
//     },

//     {
//       name: "allowFractional",
//       title: "Allow Decimal Quantity (Example: 0.5 kg)",
//       type: "boolean",
//       initialValue: false,
//     },

//     {
//       name: "price",
//       title: "Price (INR per unit)",
//       type: "number",
//       validation: (Rule: any) => Rule.required().min(1),
//     },

//     {
//       name: "trayQuantity",
//       title: "Plants per Tray (How many plants in one tray)",
//       type: "number",
//     },

//     {
//       name: "trayPrice",
//       title: "Tray Price (Total price of one tray in INR)",
//       type: "number",
//     },

//     {
//       name: "stock",
//       title: "Available Stock (How many available)",
//       type: "number",
//       initialValue: 0,
//     },

//     {
//       name: "images",
//       title: "Product Images",
//       type: "array",
//       of: [{ type: "image" }],
//     },

//     {
//       name: "description",
//       title: "Description (Simple explanation for farmers)",
//       type: "text",
//     },
//   ],
// };






// import { TrolleyIcon } from "@sanity/icons";
// import { defineField, defineType } from "sanity";

// // Define groups to organize the form for the Owner
// const productGroups = [
//   { name: "main", title: "Main Info", default: true },
//   { name: "pricing", title: "Price & Stock" }, // 👈 Updated for Tray logic
//   { name: "agriData", title: "Characteristics" }, // 👈 Dynamic based on type
//   { name: "guidance", title: "Krushi Saheb (Guidance)" }, // 👈 Guidance Section
//   { name: "media", title: "Media" },
//   { name: "seo", title: "SEO & Logistics" },
// ];

// export const productType = defineType({
//   name: "product",
//   title: "Inventory (Products)",
//   type: "document",
//   icon: TrolleyIcon,
//   groups: productGroups,
//   fields: [
//     // --- MAIN GROUP ---
//     defineField({
//       name: "name",
//       title: "Product Name",
//       type: "string",
//       group: "main",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "productVariant",
//       title: "Category Type",
//       type: "string",
//       group: "main",
//       options: {
//         list: [
//           { title: "Nursery Plant (Tarkari)", value: "plants" },
//           { title: "Seeds (Shetkari)", value: "seeds" },
//           { title: "Fertilizer (Khat)", value: "fertilizer" },
//           { title: "Pesticide / Medicine", value: "pesticide" },
//           { title: "Machinery / Tools", value: "machinery" },
//         ],
//         layout: "radio",
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       group: "main",
//       options: { source: "name" },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "nursery",
//       title: "Nursery / Brand",
//       type: "reference",
//       group: "main",
//       to: { type: "nursery" }, // Ensure you have a 'nursery' schema or remove this
//     }),

//     // --- PRICING & TRAY LOGIC GROUP ---
//     defineField({
//       name: "isForSale",
//       title: "Available for Sale?",
//       type: "boolean",
//       group: "pricing",
//       initialValue: true,
//       description: "Uncheck this if you only want to show information (e.g. for certain Seeds).",
//     }),
//     defineField({
//       name: "price",
//       title: "Single Unit Price (₹)",
//       type: "number",
//       group: "pricing",
//       description: "Price for 1 Plant, 1 Packet, or 1 Bottle.",
//       hidden: ({ document }) => !document?.isForSale,
//     }),
//     // 🌱 NURSERY SPECIFIC PRICING
//     defineField({
//       name: "trayPlantCount",
//       title: "Plants per Tray",
//       type: "number",
//       group: "pricing",
//       description: "How many plants are in one full tray? (e.g., 104)",
//       hidden: ({ document }) => document?.productVariant !== "plants",
//     }),
//     defineField({
//       name: "trayPrice",
//       title: "Full Tray Price (₹)",
//       type: "number",
//       group: "pricing",
//       description: "Discounted price if buying a full tray.",
//       hidden: ({ document }) => document?.productVariant !== "plants",
//     }),
//     // 📦 STOCK
//     defineField({
//       name: "stock",
//       title: "Current Stock",
//       type: "number",
//       group: "pricing",
//       initialValue: 0,
//     }),
//     defineField({
//       name: "unit",
//       title: "Selling Unit",
//       type: "string",
//       group: "pricing",
//       description: "e.g., 'Plant', 'Kg', 'Litre', 'Packet'",
//     }),

//     // --- 🌿 AGRI-DATA (Characteristics) ---

//     // 1. NURSERY (Tarkari) FIELDS
//     defineField({
//       name: "plantBreed",
//       title: "Breed / Variety Name",
//       type: "string",
//       group: "agriData",
//       hidden: ({ document }) => document?.productVariant !== "plants",
//     }),
//     defineField({
//       name: "daysInNursery",
//       title: "Age of Plant (Days)",
//       type: "number",
//       group: "agriData",
//       description: "How many days has this plant been growing in the nursery?",
//       hidden: ({ document }) => document?.productVariant !== "plants",
//     }),
//     defineField({
//       name: "transplantDeadline",
//       title: "Transplant Deadline (Days)",
//       type: "number",
//       group: "agriData",
//       description: "The farmer must plant this in the farm within how many days?",
//       hidden: ({ document }) => document?.productVariant !== "plants",
//     }),

//     // 2. FERTILIZER FIELDS
//     defineField({
//       name: "fertilizerForm",
//       title: "Form",
//       type: "string",
//       group: "agriData",
//       options: { list: ["Liquid", "Granular", "Powder", "Stick"] },
//       hidden: ({ document }) => document?.productVariant !== "fertilizer",
//     }),
//     defineField({
//       name: "npk",
//       title: "NPK Composition",
//       type: "string",
//       group: "agriData",
//       description: "e.g. 19-19-19",
//       hidden: ({ document }) => document?.productVariant !== "fertilizer",
//     }),
//     defineField({
//       name: "isOrganic",
//       title: "Is Organic?",
//       type: "boolean",
//       group: "agriData",
//       hidden: ({ document }) => document?.productVariant !== "fertilizer",
//     }),

//     // 3. SEED FIELDS
//     defineField({
//       name: "seedType",
//       title: "Seed Type",
//       type: "string",
//       group: "agriData",
//       options: { list: ["Hybrid", "Desi", "GMO"] },
//       hidden: ({ document }) => document?.productVariant !== "seeds",
//     }),

//     // --- 👨‍🌾 KRUSHI SAHEB (GUIDANCE) ---
//     defineField({
//       name: "description",
//       title: "Short Description",
//       type: "text",
//       rows: 3,
//       group: "guidance",
//       description: "Simple description for the card.",
//     }),
//     defineField({
//       name: "howToUse",
//       title: "How to Use / Planting Method",
//       type: "blockContent", // Ensure you have blockContent or change to 'text'
//       group: "guidance",
//       description: "Instructions for the farmer.",
//     }),
//     defineField({
//       name: "whenToUse",
//       title: "When to Use / Season",
//       type: "string",
//       group: "guidance",
//     }),
//     defineField({
//       name: "farmerReviews",
//       title: "Farmer Results / Reviews",
//       type: "array",
//       group: "guidance",
//       of: [
//         {
//           type: "object",
//           fields: [
//             { name: "farmerName", type: "string", title: "Farmer Name" },
//             { name: "comment", type: "text", title: "Result/Comment" },
//             { name: "rating", type: "number", title: "Stars (1-5)" },
//           ],
//         },
//       ],
//     }),

//     // --- MEDIA ---
//     defineField({
//       name: "images",
//       title: "Product Images",
//       type: "array",
//       group: "media",
//       of: [
//         {
//           type: "image",
//           options: { hotspot: true },
//           fields: [
//             {
//               name: "caption",
//               type: "string",
//               title: "Image Caption",
//               description: "Description shown near the image (e.g. Bread details)",
//             },
//           ],
//         },
//       ],
//     }),
//     defineField({
//       name: "videoUrl",
//       title: "YouTube Video URL",
//       type: "url",
//       group: "media",
//     }),
//   ],
//   preview: {
//     select: {
//       title: "name",
//       subtitle: "productVariant",
//       media: "images.0",
//     },
//   },
// });











import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

// We'll group fields to keep the editor clean.
const productGroups = [
  { name: "main", title: "Main", default: true },
  { name: "details", title: "Core Details & Pricing" },
  { name: "agriData", title: "Characteristics (Breed/Formula)" }, // 👈 Updated Title
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
      description: "Select the type of product. This will show/hide relevant fields.",
      options: {
        list: [
          { title: "Plants", value: "plants" },
          { title: "Seeds", value: "seeds" },
          { title: "Fertilizer", value: "fertilizer" },
          { title: "Pesticide / Insecticide", value: "pesticide" },
          { title: "Herbicide / Weedicide", value: "herbicide" },
          { title: "Fungicide", value: "fungicide" },
          { title: "Farm Machinery", value: "machinery" },
          { title: "Machinery Parts", value: "parts" },
          { title: "Hand Tools", value: "tools" },
          { title: "Irrigation", value: "irrigation" },
          { title: "Animal Feed", value: "feed" },
          { title: "Veterinary Medicine", value: "vet" },
          { title: "Growing Media (e.g., Coco Peat)", value: "media" },
          { title: "Protective Gear", value: "gear" },
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
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "unit",
      title: "Unit",
      type: "string",
      group: "details",
      description: "e.g., 'kg', 'liter', 'pack', '100 seeds', '500g bag'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sellingUnit",
      title: "Selling Unit",
      type: "string",
      group: "details",
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
      name: "trayPlantCount",
      title: "Plants per Tray",
      type: "number",
      group: "details",
      description: "Only for Tray selling units. e.g., 104 or 126",
      hidden: ({ document }) => document?.sellingUnit !== "tray" && document?.productVariant !== "plants",
    }),
    defineField({
      name: "trayPrice",
      title: "Full Tray Price",
      type: "number",
      group: "details",
      description: "Price if buying a full tray",
      hidden: ({ document }) => document?.sellingUnit !== "tray" && document?.productVariant !== "plants",
    }),
    defineField({
      name: "allowFractional",
      title: "Allow fractional purchases?",
      type: "boolean",
      group: "details",
      initialValue: false,
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: "detailedDescription",
      title: "Detailed Description",
      type: "blockContent",
      group: "details",
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
    }),

    // --- LOGISTICS GROUP ---
    defineField({
      name: "shippingWeight",
      title: "Shipping Weight (grams)",
      type: "number",
      group: "logistics",
    }),

    // --- RELATIONS ---
    defineField({
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      group: "relations",
      of: [{ type: "reference", to: { type: "product" } }],
    }),

    // ##################################################################
    // --- 🧑‍🌾 AGRI-SPECIFIC DATA (LINKED TO YOUR NEW SCHEMAS) ---
    // ##################################################################

    // 1. LINK TO PLANT BREED (For Plants/Nursery)
    defineField({
      name: "plantBreedData",
      title: "Select Plant Breed / Variety",
      type: "reference",
      to: [{ type: "plantBreed" }],
      group: "agriData",
      description: "Select the specific breed details (e.g. Abhinav F1)",
      hidden: ({ document }) => document?.productVariant !== "plants",
    }),
    defineField({
        name: "daysInNursery",
        title: "Age of Plant (Days)",
        type: "number",
        group: "agriData",
        hidden: ({ document }) => document?.productVariant !== "plants",
    }),
    defineField({
        name: "transplantDeadline",
        title: "Planting Deadline (Days)",
        type: "number",
        group: "agriData",
        description: "Max days before it must be planted",
        hidden: ({ document }) => document?.productVariant !== "plants",
    }),

    // 2. LINK TO FERTILIZER FORMULA (For Fertilizers)
    defineField({
      name: "fertilizerFormulaData",
      title: "Select Fertilizer Formula",
      type: "reference",
      to: [{ type: "fertilizerFormula" }],
      group: "agriData",
      description: "Select the grade/formula (e.g. 19-19-19)",
      hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),
    defineField({
        name: "applicationMethod",
        title: "Application Method",
        type: "array",
        group: "agriData",
        of: [{type: "string"}],
        options: {list: ["Drip", "Foliar", "Soil", "Drenching"]},
        hidden: ({ document }) => document?.productVariant !== "fertilizer",
    }),

    // 3. SEED SPECIFICS (Kept manual as requested or can be linked)
    defineField({
      name: "seedType",
      title: "Seed Type",
      type: "string",
      group: "agriData",
      options: { list: ["Hybrid", "Open-Pollinated", "Heirloom", "GMO"] },
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
    defineField({
      name: "germinationRate",
      title: "Germination Rate (%)",
      type: "number",
      group: "agriData",
      hidden: ({ document }) => document?.productVariant !== "seeds",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images.0",
      variant: "productVariant",
      stock: "stock",
    },
    prepare({ title, media, variant, stock }) {
      return {
        title: title,
        subtitle: `${variant?.toUpperCase()} - Stock: ${stock}`,
        media: media,
      };
    },
  },
});