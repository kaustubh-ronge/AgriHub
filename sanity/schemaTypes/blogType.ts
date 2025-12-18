// import { DocumentTextIcon } from "@sanity/icons";
// import { defineArrayMember, defineField, defineType } from "sanity";

// export const blogType = defineType({
//   name: "blog",
//   title: "Blog",
//   type: "document",
//   icon: DocumentTextIcon,
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
//       name: "author",
//       type: "reference",
//       to: { type: "author" },
//     }),
//     defineField({
//       name: "mainImage",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//     }),
//     defineField({
//       name: "blogcategories",
//       type: "array",
//       of: [
//         defineArrayMember({ type: "reference", to: { type: "blogcategory" } }),
//       ],
//     }),
//     defineField({
//       name: "publishedAt",
//       type: "datetime",
//     }),
//     defineField({
//       name: "isLatest",
//       title: "Latest Blog",
//       type: "boolean",
//       description: "Toggle to Latest on or off",
//       initialValue: true,
//     }),
//     defineField({
//       name: "body",
//       type: "blockContent",
//     }),
//   ],
//   preview: {
//     select: {
//       title: "title",
//       author: "author.name",
//       media: "mainImage",
//       isLatest: "isLatest",
//     },
//     prepare(selection) {
//       const { author, isLatest } = selection;
//       return {
//         ...selection,
//         subtitle: author && `${isLatest ? "Latest | " : ""} By ${author}`,
//       };
//     },
//   },
// });














import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: DocumentTextIcon,

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
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),

    // 🔥 BLOG MEDIA TYPE
    defineField({
      name: "mediaType",
      title: "Blog Media Type",
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

    // 🖼 BLOG IMAGE
    defineField({
      name: "mainImage",
      title: "Blog Banner Image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),

    // 🎥 BLOG VIDEO
    defineField({
      name: "blogVideo",
      title: "Blog Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),

    // 🎬 VIDEO POSTER IMAGE
    defineField({
      name: "videoPoster",
      title: "Video Banner Image (Poster)",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),

    defineField({
      name: "blogcategories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "blogcategory" },
        }),
      ],
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
    }),

    defineField({
      name: "isLatest",
      title: "Latest Blog",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      mediaType: "mediaType",
      media: "mainImage",
      isLatest: "isLatest",
    },
    prepare({ title, mediaType, media, isLatest }) {
      return {
        title,
        media,
        subtitle: `${isLatest ? "Latest | " : ""}${mediaType.toUpperCase()} Blog`,
      };
    },
  },
});
