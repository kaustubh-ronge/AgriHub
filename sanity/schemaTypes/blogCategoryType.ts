

// import { TagIcon } from "@sanity/icons";
// import { defineField, defineType } from "sanity";

// export const blogCategoryType = defineType({
//   name: "blogcategory",
//   title: "Blog Category",
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
//     }),
//     defineField({
//       name: "description",
//       type: "text",
//     }),
//   ],
// });























import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const blogCategoryType = defineType({
  name: "blogcategory",
  title: "Blog Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "description",
      type: "text",
    }),

    // 🔥 PROMOTION TYPE
    defineField({
      name: "promotionType",
      title: "Promotion Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),

    // 🖼 CATEGORY IMAGE
    defineField({
      name: "promoImage",
      title: "Category Banner Image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.promotionType !== "image",
    }),

    // 🎥 CATEGORY VIDEO
    defineField({
      name: "promoVideo",
      title: "Category Promo Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.promotionType !== "video",
    }),

    // 🎬 VIDEO POSTER IMAGE
    defineField({
      name: "videoPoster",
      title: "Video Banner / Poster Image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.promotionType !== "video",
    }),
  ],
});


