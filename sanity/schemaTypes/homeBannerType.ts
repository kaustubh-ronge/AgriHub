import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homeBannerType = defineType({
  name: "homeBanner",
  title: "Home Banner (BRC)",
  type: "document",
  icon: HomeIcon,

  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "Big heading shown on homepage (example: Welcome to BRC)",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle / Description",
      type: "text",
      description: "Small description about Bajbalkar Ropvatika & Consultancy",
    }),

    defineField({
      name: "ctaText",
      title: "Button Text",
      type: "string",
      initialValue: "Buy Now",
    }),

    defineField({
      name: "ctaLink",
      title: "Button Link",
      type: "string",
      initialValue: "/shop",
    }),

    defineField({
      name: "mediaType",
      title: "Banner Media Type",
      type: "string",
      description: "Select what to show (Image or Video)",
      options: {
        list: [
          { title: "Image (photo)", value: "image" },
          { title: "Video (owner speaking / farm view)", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),

    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),

    defineField({
      name: "bannerVideo",
      title: "Banner Video",
      type: "file",
      description: "Owner video / nursery video (auto-play, no sound)",
      options: {
        accept: "video/mp4",
      },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),

    defineField({
      name: "autoPlay",
      title: "Auto Play Video",
      type: "boolean",
      initialValue: true,
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),

    defineField({
      name: "showAnimation",
      title: "Enable Animation",
      type: "boolean",
      description: "Fade / slide animation on banner",
      initialValue: true,
    }),

    defineField({
      name: "ownerName",
      title: "Owner / Brand Name",
      type: "string",
      initialValue: "Bajbalkar Ropvatika & Consultancy",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "bannerImage",
    },
  },
});
