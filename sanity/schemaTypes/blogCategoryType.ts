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

    // 🖼 CATEGORY IMAGE (Always Visible)
    defineField({
      name: "promoImage",
      title: "Category Banner Image",
      type: "image",
      options: { hotspot: true },
    }),

    // 🎥 CATEGORY VIDEO (Always Visible)
    defineField({
      name: "promoVideo",
      title: "Category Promo Video",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),

    // 🎬 VIDEO POSTER IMAGE (Always Visible)
    defineField({
      name: "videoPoster",
      title: "Video Banner / Poster Image",
      description: "Image shown while video is loading or if autoplay is off",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});