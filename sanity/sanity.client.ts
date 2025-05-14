import { createClient } from "next-sanity";
//This is used to read from sanity studio
const client = createClient({
  projectId: "ux82u97s",
  dataset: "production",
  apiVersion: "2025-05-10",
  useCdn: false, //is used to disable edge cases
});

export default client;
