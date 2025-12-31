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

    // 1. IMAGE
    defineField({
      name: "mainImage",
      title: "Featured Poster / Image",
      type: "image",
      options: { hotspot: true },
    }),

    // 2. VIDEO (Direct)
    defineField({
      name: "directVideo",
      title: "Main Video Upload (Single)",
      type: "file",
      options: { accept: "video/*" },
    }),

    // 3. VIDEO GALLERY (Multiple)
    defineField({
      name: "videoGallery",
      title: "Video Gallery (Multiple Uploads)",
      type: "array",
      of: [defineArrayMember({ type: "file", options: { accept: "video/*" } })]
    }),

    // 4. 🔥 YOUR NEW LINKS FIELD (Title + URL)
    defineField({
      name: "socialLinks",
      title: "External Links (YouTube, Insta, etc.)",
      description: "Add multiple links. Give a Title (e.g. 'YouTube') and the URL.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Link",
          fields: [
            defineField({
              name: "title",
              title: "Link Title",
              type: "string",
              placeholder: "e.g. YouTube, Instagram, Watch Part 2",
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: "url",
              title: "Link URL",
              type: "url",
              validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] })
            }),
          ],
          // This shows the Title as the preview in Sanity Studio
          preview: {
            select: { title: 'title', subtitle: 'url' }
          }
        })
      ]
    }),

    // Legacy fields (optional, can keep if you have old data)
    defineField({ name: "youtubeUrl", title: "YouTube URL (Old)", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL (Old)", type: "url" }),
    defineField({ name: "facebookUrl", title: "Facebook URL (Old)", type: "url" }),

    defineField({
      name: "blogcategories",
      title: "Blog Category",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "blogcategory" } })],
    }),
    
    defineField({ name: "publishedAt", type: "datetime", initialValue: (new Date()).toISOString() }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
  ],
});