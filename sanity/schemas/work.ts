import { defineField, defineType } from "sanity";

const workType = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Project title",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      description: "Company",
      type: "string",
    }),
    defineField({
      name: "service_type",
      title: "Service Type",
      description: "Services offered",
      type: "array", // allows for multiple options
      of: [{ type: "string" }], // Array of strings
      options: {
        list: [
          { title: "Branding & Design", value: "branding" },
          { title: "Web Development", value: "web" },
          { title: "Content Creation", value: "content" },
          { title: "SEO", value: "seo" },
          { title: "Marketing", value: "marketing" },
        ],
        // Displays the options as tags for multi-selection
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "Work Image",
      type: "image",
      options: {
        hotspot: true, // Enables image cropping in the Studio
      },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Unique slug for the work",
      type: "slug",
      options: { source: "company" }, //Its value will be the company
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    {
      name: "content",
      title: "Content",
      description: "Description of what was done for the company",
      type: "array", // stores rich-text(Headings , bold etc) as an array of blocks
      of: [{ type: "block" }],
    },
  ],
});

export default workType;
