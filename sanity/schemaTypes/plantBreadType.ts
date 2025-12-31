// import { SparklesIcon } from "@sanity/icons";
// import { defineField, defineType } from "sanity";

// export const plantBreedType = defineType({
//   name: "plantBreed",
//   title: "Plant Breed / Variety",
//   type: "document",
//   icon: SparklesIcon,
//   fields: [
//     defineField({
//       name: "plantName",
//       title: "Plant Name",
//       type: "string",
//       description: "e.g. Tomato, Chili",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "breedName",
//       title: "Breed / Variety Name",
//       type: "string",
//       description: "e.g. Abhinav F1, US-440",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "varietyType",
//       title: "Variety Category",
//       type: "string",
//       options: {
//         list: [
//           { title: "F1 Hybrid (High Yield)", value: "f1" },
//           { title: "Hybrid", value: "hybrid" },
//           { title: "Desi / Organic", value: "desi" },
//           { title: "Research Variety", value: "research" },
//         ],
//       },
//     }),
//     defineField({
//       name: "daysToHarvest",
//       title: "Days to First Harvest",
//       type: "string",
//       description: "e.g., 60-70 days after transplanting",
//     }),
//     defineField({
//       name: "yieldPotential",
//       title: "Yield Potential",
//       type: "string",
//       description: "e.g., 15-20 Tons per Acre",
//     }),
//     defineField({
//       name: "resistance",
//       title: "Disease Resistance",
//       type: "array",
//       of: [{ type: "string" }],
//       description: "e.g., Leaf Curl Virus, Wilting, Blight",
//     }),
//     defineField({
//       name: "description",
//       title: "Detailed Variety Description",
//       type: "text",
//     }),
    
//     defineField({
//       name: "growthHabit",
//       title: "Growth Habit",
//       type: "string",
//       description: "e.g. Determinate, Indeterminate, Bushy",
//     }),
//     defineField({
//       name: "specialFeatures",
//       title: "Special Features / Benefits",
//       type: "array",
//       of: [{ type: "string" }],
//       description: "e.g. Virus resistant, High yield, Thick skin",
//     }),
//   ],
// });














import { SparklesIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const plantBreedType = defineType({
  name: "plantBreed",
  title: "Plant Breed / Variety",
  type: "document",
  icon: SparklesIcon,
  fields: [
    defineField({
      name: "plantName",
      title: "Plant Species",
      type: "string",
      description: "e.g. Tomato, Chili",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "breedName",
      title: "Breed / Variety Name",
      type: "string",
      description: "e.g. Abhinav F1, US-440",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "varietyType",
      title: "Variety Category",
      type: "string",
      options: {
        list: [
          { title: "F1 Hybrid (High Yield)", value: "f1" },
          { title: "Hybrid", value: "hybrid" },
          { title: "Desi / Organic", value: "desi" },
          { title: "Research Variety", value: "research" },
        ],
      },
    }),
    defineField({
      name: "growthHabit",
      title: "Growth Habit",
      type: "string",
      description: "e.g. Determinate, Indeterminate, Bushy",
    }),
    defineField({
      name: "daysToHarvest",
      title: "Days to First Harvest",
      type: "string",
      description: "e.g., 60-70 days after transplanting",
    }),
    defineField({
      name: "yieldPotential",
      title: "Yield Potential",
      type: "string",
      description: "e.g., 15-20 Tons per Acre",
    }),
    defineField({
      name: "resistance",
      title: "Disease Resistance",
      type: "array",
      of: [{ type: "string" }],
      description: "List specific resistances like Wilting, Blight, etc.",
    }),
    defineField({
      name: "specialFeatures",
      title: "Special Features / Benefits",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Heat tolerant, Thick skin for transport",
    }),
    defineField({
      name: "description",
      title: "Detailed Description",
      type: "text",
    }),
    // defineField({
    //   name: "soilRecommendation",
    //   title: "Recommended Soil Type",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Black Soil (Heavy/Clay)", value: "black" },
    //       { title: "Red Soil (Laterite)", value: "red" },
    //       { title: "Sandy/Loamy Soil", value: "sandy" },
    //       { title: "All Soil Types", value: "all" },
    //     ],
    //   },
    //   description: "Helps farmers choose the right variety for their land.",
    // }),
  ],
  preview: {
    select: {
      title: "breedName",
      subtitle: "plantName",
    },
  },
});