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
//       validation: (Rule) => Rule.required(),
//     }),

//     defineField({
//       name: "slug",
//       type: "slug",
//       options: { source: "title" },
//     }),

//     defineField({
//       name: "author",
//       type: "reference",
//       to: { type: "author" },
//     }),

//     // 🔥 BLOG MEDIA TYPE
//     defineField({
//       name: "mediaType",
//       title: "Blog Media Type",
//       type: "string",
//       options: {
//         list: [
//           { title: "Image", value: "image" },
//           { title: "Video", value: "video" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "image",
//     }),

//     // 🎥 SOCIAL MEDIA VIDEO SECTION
//     defineField({
//       name: "socialVideoUrl",
//       title: "Social Media Video Link",
//       type: "url",
//       description: "Paste YouTube, Instagram, or Facebook link",
//       // Only show if Video is selected
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//       validation: (Rule) => Rule.uri({
//         scheme: ['http', 'https']
//       })
//     }),

//     defineField({
//       name: "autoPlay",
//       title: "Auto Play on Load",
//       type: "boolean",
//       initialValue: true,
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),

//     // 🖼 BLOG IMAGE
//     defineField({
//       name: "mainImage",
//       title: "Blog Banner Image",
//       type: "image",
//       options: { hotspot: true },
//       hidden: ({ parent }) => parent?.mediaType !== "image",
//     }),

//     // 🎥 BLOG VIDEO
//     defineField({
//       name: "blogVideo",
//       title: "Blog Video",
//       type: "file",
//       options: {
//         accept: "video/*",
//       },
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),

//     // 🎬 VIDEO POSTER IMAGE
//     defineField({
//       name: "videoPoster",
//       title: "Video Banner Image (Poster)",
//       type: "image",
//       options: { hotspot: true },
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),

//     // Inside blogType fields array:
//     defineField({
//       name: "socialVideoUrl",
//       title: "Social Video URL",
//       type: "url",
//       description: "Paste YouTube, Facebook, or Instagram video link here",
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),
//     defineField({
//       name: "autoPlay",
//       title: "Auto Play Video",
//       type: "boolean",
//       initialValue: true,
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),

//     defineField({
//       name: "blogcategories",
//       type: "array",
//       of: [
//         defineArrayMember({
//           type: "reference",
//           to: { type: "blogcategory" },
//         }),
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
//       mediaType: "mediaType",
//       media: "mainImage",
//       isLatest: "isLatest",
//     },
//     prepare({ title, mediaType, media, isLatest }) {
//       return {
//         title,
//         media,
//         subtitle: `${isLatest ? "Latest | " : ""}${mediaType.toUpperCase()} Blog`,
//       };
//     },
//   },
// });





















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
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "slug",
//       type: "slug",
//       options: { source: "title" },
//     }),
//     defineField({
//       name: "author",
//       type: "reference",
//       to: { type: "author" },
//     }),

//     // 🔥 BLOG MEDIA TYPE SELECTOR
//     defineField({
//       name: "mediaType",
//       title: "Blog Media Type",
//       type: "string",
//       options: {
//         list: [
//           { title: "Standard Image", value: "image" },
//           { title: "Social Media Video (YouTube/FB/Insta)", value: "video" },
//           { title: "Self-Hosted Video File", value: "file" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "image",
//     }),

//     // 🖼 STANDARD IMAGE FIELD
//     defineField({
//       name: "mainImage",
//       title: "Blog Banner Image",
//       type: "image",
//       options: { hotspot: true },
//       hidden: ({ parent }) => parent?.mediaType !== "image",
//     }),

//     // 🎥 SOCIAL MEDIA VIDEO URL (The field you were missing)
//     defineField({
//       name: "socialVideoUrl",
//       title: "Social Video URL",
//       type: "url",
//       description: "Paste YouTube, Facebook, or Instagram video link here",
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),

//     // 💾 LOCAL VIDEO FILE
//     defineField({
//       name: "blogVideo",
//       title: "Upload Video File",
//       type: "file",
//       options: { accept: "video/*" },
//       hidden: ({ parent }) => parent?.mediaType !== "file",
//     }),

//     // 🎬 VIDEO POSTER / THUMBNAIL
//     defineField({
//       name: "videoPoster",
//       title: "Video Thumbnail (Poster)",
//       type: "image",
//       options: { hotspot: true },
//       hidden: ({ parent }) => parent?.mediaType === "image",
//     }),

//     defineField({
//       name: "autoPlay",
//       title: "Auto Play Video",
//       type: "boolean",
//       initialValue: true,
//       hidden: ({ parent }) => parent?.mediaType === "image",
//     }),

//     defineField({
//       name: "blogcategories",
//       type: "array",
//       of: [
//         defineArrayMember({
//           type: "reference",
//           to: { type: "blogcategory" },
//         }),
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
//       mediaType: "mediaType",
//       media: "mainImage",
//       isLatest: "isLatest",
//     },
//     prepare({ title, mediaType, media, isLatest }) {
//       return {
//         title,
//         media,
//         subtitle: `${isLatest ? "Latest | " : ""}${mediaType?.toUpperCase() || 'IMAGE'} Blog`,
//       };
//     },
//   },
// });













// import { DocumentTextIcon } from "@sanity/icons";
// import { defineArrayMember, defineField, defineType } from "sanity";

// export const blogType = defineType({
//   name: "blog",
//   title: "Blog",
//   type: "document",
//   icon: DocumentTextIcon,
//   fields: [
//     defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
//     defineField({ name: "slug", type: "slug", options: { source: "title" } }),
//     defineField({ name: "author", type: "reference", to: { type: "author" } }),

//     defineField({
//       name: "mediaType",
//       title: "Primary Media Type",
//       type: "string",
//       options: {
//         list: [
//           { title: "Standard Image", value: "image" },
//           { title: "Video Centric", value: "video" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "image",
//     }),

//     // --- VIDEO SECTION ---
//     defineField({
//       name: "youtubeUrl",
//       title: "YouTube Video URL",
//       type: "url",
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),
//     defineField({
//       name: "facebookUrl",
//       title: "Facebook Video URL",
//       type: "url",
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),
//     defineField({
//       name: "instagramUrl",
//       title: "Instagram Video URL",
//       type: "url",
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),

//     defineField({
//       name: "mainImage",
//       title: "Featured Image",
//       type: "image",
//       options: { hotspot: true },
//     }),

//     defineField({
//       name: "blogcategories",
//       type: "array",
//       of: [defineArrayMember({ type: "reference", to: { type: "blogcategory" } })],
//     }),
//     defineField({ name: "publishedAt", type: "datetime" }),
//     defineField({ name: "body", type: "blockContent" }),
//   ],
// });



























// import { DocumentTextIcon } from "@sanity/icons";
// import { defineArrayMember, defineField, defineType } from "sanity";

// export const blogType = defineType({
//   name: "blog",
//   title: "Blog & Success Stories",
//   type: "document",
//   icon: DocumentTextIcon,
//   fields: [
//     defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
//     defineField({ name: "slug", type: "slug", options: { source: "title" } }),
//     defineField({ name: "author", type: "reference", to: { type: "author" } }),

//     defineField({
//       name: "mediaType",
//       title: "Primary Media Content",
//       type: "string",
//       options: {
//         list: [
//           { title: "Standard Image/Poster", value: "image" },
//           { title: "Social Media Links (YT/FB/Insta)", value: "social" },
//           { title: "Direct Video Upload", value: "video" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "image",
//     }),

//     // --- SOCIAL LINKS WITH RESTRICTIONS ---
//     defineField({
//       name: "youtubeUrl",
//       title: "YouTube URL",
//       type: "url",
//       hidden: ({ parent }) => parent?.mediaType !== "social",
//       validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).custom(url => {
//         if (!url) return true;
//         return url.includes('youtube.com') || url.includes('youtu.be') ? true : 'Only YouTube links allowed here';
//       })
//     }),
//     defineField({
//       name: "instagramUrl",
//       title: "Instagram Reel/Video URL",
//       type: "url",
//       hidden: ({ parent }) => parent?.mediaType !== "social",
//       validation: (Rule) => Rule.custom(url => {
//         if (!url) return true;
//         return url.includes('instagram.com') ? true : 'Only Instagram links allowed here';
//       })
//     }),
//     defineField({
//       name: "facebookUrl",
//       title: "Facebook Video URL",
//       type: "url",
//       hidden: ({ parent }) => parent?.mediaType !== "social",
//       validation: (Rule) => Rule.custom(url => {
//         if (!url) return true;
//         return url.includes('facebook.com') || url.includes('fb.watch') ? true : 'Only Facebook links allowed here';
//       })
//     }),

//     // --- DIRECT VIDEO UPLOAD ---
//     defineField({
//       name: "directVideo",
//       title: "Upload Video File",
//       type: "file",
//       options: { accept: "video/*" },
//       hidden: ({ parent }) => parent?.mediaType !== "video",
//     }),

//     defineField({
//       name: "mainImage",
//       title: "Featured Poster / Image",
//       type: "image",
//       options: { hotspot: true },
//       // Always visible as a thumbnail for the blog list
//     }),

//     defineField({
//       name: "blogcategories",
//       title: "Blog Category (Target Audience)",
//       type: "array",
//       of: [defineArrayMember({ type: "reference", to: { type: "blogcategory" } })],
//     }),
//     defineField({ name: "publishedAt", type: "datetime", initialValue: (new Date()).toISOString() }),
//     defineField({ name: "body", title: "Success Story Details / Information", type: "blockContent" }),
//   ],
// });














import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog & Success Stories",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "author", type: "reference", to: { type: "author" } }),

    defineField({
      name: "mediaType",
      title: "Primary Media Content",
      type: "string",
      options: {
        list: [
          { title: "Standard Image/Poster", value: "image" },
          { title: "Social Media Links (YT/FB/Insta)", value: "social" },
          { title: "Direct Video Upload", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),

    // --- RESTRICTED SOCIAL LINKS ---
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      hidden: ({ parent }) => parent?.mediaType !== "social",
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).custom(url => {
        if (!url) return true;
        return (url.includes('youtube.com') || url.includes('youtu.be')) ? true : 'ही लिंक YouTube ची नाही (Only YouTube links allowed here)';
      })
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram Reel/Video URL",
      type: "url",
      hidden: ({ parent }) => parent?.mediaType !== "social",
      validation: (Rule) => Rule.custom(url => {
        if (!url) return true;
        return url.includes('instagram.com') ? true : 'ही लिंक Instagram ची नाही (Only Instagram links allowed here)';
      })
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook Video URL",
      type: "url",
      hidden: ({ parent }) => parent?.mediaType !== "social",
      validation: (Rule) => Rule.custom(url => {
        if (!url) return true;
        return (url.includes('facebook.com') || url.includes('fb.watch')) ? true : 'ही लिंक Facebook ची नाही (Only Facebook links allowed here)';
      })
    }),

    defineField({
      name: "directVideo",
      title: "Upload Video File",
      type: "file",
      options: { accept: "video/*" },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),

    defineField({
      name: "mainImage",
      title: "Featured Poster / Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "blogcategories",
      title: "Blog Category (Target Audience)",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "blogcategory" } })],
    }),
    defineField({ name: "publishedAt", type: "datetime", initialValue: (new Date()).toISOString() }),
    defineField({ name: "body", title: "Success Story Details / Information", type: "blockContent" }),
  ],
});