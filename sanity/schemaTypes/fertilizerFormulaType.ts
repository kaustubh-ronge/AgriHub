// import { TaskIcon } from "@sanity/icons";
// import { defineField, defineType } from "sanity";

// export const fertilizerFormulaType = defineType({
//   name: "fertilizerFormula",
//   title: "Fertilizer Formula / Grade",
//   type: "document",
//   icon: TaskIcon,
//   fields: [
//     defineField({
//       name: "formulaName",
//       title: "Formula / Grade Name",
//       type: "string",
//       description: "Example: 19-19-19, DAP, Urea",
//       validation: (Rule) => Rule.required(),
//     }),

//     defineField({
//       name: "npk",
//       title: "NPK Composition",
//       type: "string",
//       description: "Nitrogen–Phosphorus–Potassium (plant nutrients)",
//     }),

//     defineField({
//       name: "fertilizerForm",
//       title: "Form",
//       type: "string",
//       options: {
//         list: [
//           { title: "Granular (small solid particles)", value: "granular" },
//           { title: "Liquid (water soluble)", value: "liquid" },
//           { title: "Powder (dry fine form)", value: "powder" },
//         ],
//       },
//     }),

//     defineField({
//       name: "releaseType",
//       title: "Release Type",
//       type: "string",
//       options: {
//         list: [
//           { title: "Quick Release (acts fast)", value: "quick" },
//           { title: "Slow Release (long lasting)", value: "slow" },
//         ],
//       },
//     }),

//     defineField({
//       name: "isOrganic",
//       title: "Organic",
//       type: "boolean",
//       description: "Is this fertilizer organic (chemical-free)?",
//     }),

//     defineField({
//       name: "description",
//       title: "About this Formula",
//       type: "text",
//       description: "Simple explanation shown to farmers",
//     }),

//     defineField({
//       name: "howToUse",
//       title: "How to Use",
//       type: "text",
//       description: "Step-by-step instructions for the farmer.",
//     }),
//     defineField({
//       name: "whenToUse",
//       title: "When to Use",
//       type: "string",
//       description: "Example: During flowering, or every 15 days.",
//     }),
//     defineField({
//       name: "benefits",
//       title: "Benefits",
//       type: "array",
//       of: [{ type: "string" }],
//       description: "List the main advantages (e.g. Faster growth, greener leaves).",
//     }),

//     // ... existing fields ...
//     defineField({ 
//       name: "howToUse", 
//       title: "How to Use", 
//       type: "text" 
//     }),
//     defineField({ 
//       name: "whenToUse", 
//       title: "When to Use", 
//       type: "string" 
//     }),
//     defineField({ name: "benefits", title: "Benefits", type: "array", of: [{ type: "string" }] }),
//   ],

//   preview: {
//     select: {
//       title: "formulaName",
//       subtitle: "npk",
//     },
//   },
// });









import { TaskIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const fertilizerFormulaType = defineType({
  name: "fertilizerFormula",
  title: "Fertilizer Formula / Grade",
  type: "document",
  icon: TaskIcon,
  fields: [
    defineField({
      name: "formulaName",
      title: "Formula / Grade Name",
      type: "string",
      description: "Example: 19-19-19, DAP, Urea",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "npk",
      title: "NPK Composition",
      type: "string",
      description: "Nitrogen–Phosphorus–Potassium (plant nutrients)",
    }),
    defineField({
      name: "fertilizerForm",
      title: "Form",
      type: "string",
      options: {
        list: [
          { title: "Granular (small solid particles)", value: "granular" },
          { title: "Liquid (water soluble)", value: "liquid" },
          { title: "Powder (dry fine form)", value: "powder" },
        ],
      },
    }),
    defineField({
      name: "releaseType",
      title: "Release Type",
      type: "string",
      options: {
        list: [
          { title: "Quick Release (acts fast)", value: "quick" },
          { title: "Slow Release (long lasting)", value: "slow" },
        ],
      },
    }),
    defineField({
      name: "isOrganic",
      title: "Organic",
      type: "boolean",
      description: "Is this fertilizer organic (chemical-free)?",
    }),
    defineField({
      name: "description",
      title: "About this Formula",
      type: "text",
      description: "Simple explanation shown to farmers",
    }),
    defineField({
      name: "howToUse",
      title: "How to Use / Application Guide",
      type: "text",
      description: "Step-by-step instructions (e.g., Mix 5g in 1L water)",
    }),
    defineField({
      name: "whenToUse",
      title: "When to Apply",
      type: "string",
      description: "e.g., During vegetative growth, flowering stage",
    }),
    defineField({
      name: "benefits",
      title: "Key Benefits",
      type: "array",
      of: [{ type: "string" }],
      description: "Add advantages one by one",
    }),
  ],
  preview: {
    select: {
      title: "formulaName",
      subtitle: "npk",
    },
  },
});