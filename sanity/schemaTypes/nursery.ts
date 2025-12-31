// import { TagIcon } from "@sanity/icons";
// import { defineField, defineType } from "sanity";

// export const nursery = defineType({
//   name: "nursery",
//   title: "Nursery",
//   type: "document",
//   icon: TagIcon,
//   fields: [
//     defineField({
//       name: "title",
//       type: "string",
//     }),
//     defineField({
//       name: "slug",
//       type: "slug",
//       options: {
//         source: "title",
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "description",
//       type: "text",
//     }),
//     defineField({
//       name: "image",
//       title: "Nursery Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//     }),
//   ],
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "description",
//       media: "image",
//     },
//   },
// });



import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const nursery = defineType({
  name: "nursery",
  title: "Nursery",
  type: "document",
  icon: TagIcon,
  groups: [
    { name: "details", title: "Details" },
    { name: "contact", title: "Contact & Location" },
    { name: "media", title: "Media" },
  ],
  fields: [
    // --- Basic Info ---
    defineField({
      name: "title",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "details",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "About the Nursery",
      type: "text",
      group: "details",
      rows: 4,
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.min(1).max(5).precision(1),
    }),
    
    // --- Media ---
    defineField({
      name: "image",
      title: "Logo / Profile Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
    defineField({
      name: "coverImage",
      title: "Cover / Banner Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      description: "A wide image for the top of the page.",
    }),
    defineField({
      name: "gallery",
      title: "Nursery Gallery",
      type: "array",
      group: "media",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),

    // --- Contact & Location ---
    defineField({
      name: "address",
      title: "Full Address",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      group: "contact",
      description: "Go to Google Maps > Share > Embed a map > Copy ONLY the 'src' link (inside the quotes).",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "openingHours",
      title: "Opening Hours",
      type: "string",
      group: "contact",
      placeholder: "Mon - Sat: 9:00 AM - 6:00 PM",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "address",
      media: "image",
    },
  },
});