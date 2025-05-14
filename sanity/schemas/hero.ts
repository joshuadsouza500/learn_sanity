/* The name key is the property that is used to reference a schema in the query language. The value must be  unique.
#title defines what the schema type is called in the Studio UI.
#type defines what schema type you're working with. The document value will tell the studio that it should make it possible to make new documents.
#The icon is an optional visible in studio ui with title need to install the react-icons library npm install -D react-icons
#The fields array, is where the individual input fields will be defined.*/

import { defineField, defineType } from "sanity"; //provides type safety

const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "document", //document: top lvl content l;ike page or post || "object": reusable obj can be used in other schemas
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The main title for the Hero section.",
      validation: (rule) => rule.required(), //can add custom validation
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "The subtitle for the Hero section.",
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true, // Enables image cropping in the Studio
      },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    }),
  ],
});

export default heroType;
