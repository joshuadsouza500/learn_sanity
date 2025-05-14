import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const config = defineConfig({
  name: "default",
  title: "learn-sanity",
  projectId: "ux82u97s",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool()],

  schema: { types: schemaTypes },
});

export default config;
