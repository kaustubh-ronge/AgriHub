import { UserIcon } from "@sanity/icons";

export default {
  name: "author",
  title: "Author (Nursery / Expert / Farmer)",
  type: "document",
  icon: UserIcon,

  fields: [
    {
      name: "name",
      title: "Name (Person or Nursery name)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "role",
      title: "Role (Nursery Owner / Consultant / Farmer)",
      type: "string",
    },

    {
      name: "trusted",
      title: "Trusted Partner (Verified by platform)",
      type: "boolean",
      initialValue: false,
    },
  ],
};
