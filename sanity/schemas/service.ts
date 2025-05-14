import { defineField, defineType } from "sanity";

const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the service",
      validation: (rule) => rule.required(), //can add custom validation
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "The subtitle text for the service.",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Select an icon for the service.",
      options: {
        list: [
          { title: "Web Development", value: "web" },
          { title: "Branding & Design", value: "design" },
          { title: "Content Creation", value: "camera" },
          { title: "SEO", value: "seo" },
          { title: "Marketing", value: "marketing" },
        ], // Predefined list of icons|| using the value in front end we can display an icon for the given value
        layout: "dropdown", // Displays the options as a dropdown
      },
    }),
  ],
});

export default serviceType;
