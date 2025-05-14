//All functions for getting data from sanity studio
import { groq } from "next-sanity";
import client from "./sanity.client";
import { Hero, Review, WorkProps, Service } from "@/types/sanity";

export async function getHero(): Promise<Hero> {
  return client.fetch(groq`*[_type == "hero"][0]{
      _id,
      _createdAt,
      title,
      subtitle,
     "image": image.asset->url,
      "alt": image.alt
     
      }`);
}

export async function getServices(): Promise<Service[]> {
  return client.fetch(groq`*[_type == "service"]{
    _id,
    _createdAt,
    title,
    subtitle,
    icon,
   
    }`);
}

export async function getWorks(): Promise<WorkProps[]> {
  return client.fetch(groq`*[_type == "work"]{
      _id,
      _createdAt,
      title,
      company,
      service_type,
     "image": image.asset->url,
      "alt": image.alt,
      "slug": slug.current,  
         
      }`);
}

export async function getWork(slug: string): Promise<WorkProps> {
  return client.fetch(
    groq`*[_type == "work" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        service_type,
       "image": image.asset->url,
        "alt": image.alt,
        "slug": slug.current,
        content
       
        }`,
    { slug } //passes the slug
  );
}

export async function getReviews(): Promise<Review[]> {
  return client.fetch(groq`*[_type == "review"]{
      _id,
      _createdAt,
      name,
      company,
      review,
      url
     
      }`);
}

/* // 🔍 GROQ + Sanity Cheat Sheet
// ──────────────────────────────────────────────

 "image": image.asset->url //IMAGE returns image.asset and then -> pulls the url from it
    "slug": slug.current //tO GET CURRENT SLUG
 * gETS EVERYTHING IN HE DOCUMENT
// Get all documents of a type
*[_type == "post"]

// Filter by field value
*[_type == "post" && category == "tech"]

// Get a single document by slug
*[_type == "post" && slug.current == $slug][0]

// Select fields
*[_type == "post"]{title, slug, "authorName": author->name}

// Dereference (joins)
*[_type == "post"]{..., author->, categories[]->}

// Order results
*[_type == "post"] | order(publishedAt desc)

// Limit results
*[_type == "post"][0...5]

// Conditional projections
*[_type == "post"]{
  title,
  isFeatured,
  "badge": isFeatured => "🌟"
}

// Get nested fields
*[_type == "post"]{
  title,
  categories[]->{title}
}

// Search (match string)
*[_type == "post" && title match "*react*"]

// Params in queries (JS client)
client.fetch(`*[_type == "post" && slug.current == $slug]{title}`, { slug })

// Tags or array includes
*[_type == "post" && "tech" in tags[]->slug.current]

// Reference by ID
*[_type == "author" && _id == $id]

// Get document by ID
*[_id == "yourDocId" */
