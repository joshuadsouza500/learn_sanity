import { defineField, defineType } from "sanity";

const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Reviewer name",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      description: "Place of work of reviewer",
      type: "string",
    }),
    defineField({
      name: "review",
      title: "Review",
      description: "The review",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      description: "URL to product created",
      type: "url",
    }),
  ],
});

export default reviewType;
