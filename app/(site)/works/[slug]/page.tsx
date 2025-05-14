import { getWork } from "@/sanity/sanity.query";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
type Props = {
  params: { slug: string };
};

const list = {
  branding: "Branding & Design",
  web: "Web Development",
  content: "Content Creation",
  seo: "SEO",
  marketing: "Marketing",
};

const page = async ({ params }: Props) => {
  const slug = params.slug;
  const Work = await getWork(slug);
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{Work.title}</h1>

      <div className="mb-6">
        <Image
          src={Work.image}
          alt={Work.alt || "Work image"}
          height={200}
          width={400}
          loading="lazy"
          className=" rounded-xl shadow w-full"
        />
      </div>
      <p className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
        Service Type:{" "}
        {Work.service_type.map((service, index) => {
          const display = list[service];
          return (
            <span
              key={index}
              className="text-lg text-gray-800 dark:text-gray-100 px-2 p-2 rounded-3xl bg-gray-600 mx-2"
            >
              {display}
            </span>
          );
        })}
      </p>
      <div className="prose prose-lg text-lg max-w-none text-gray-800 dark:text-gray-100">
        {/* To display rich-text (portable text) need to install portabletext/react */}
        <PortableText value={Work.content} />
      </div>
    </div>
  );
};

export default page;
