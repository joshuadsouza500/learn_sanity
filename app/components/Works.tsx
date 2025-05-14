import { getWorks } from "@/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Works = async () => {
  const works = await getWorks();

  return (
    <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Works
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Check out some of our recent projects and creative solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 ">
          {works.map((work) => (
            <Link
              href={`works/${work.slug}`}
              key={work._id}
              className="group relative overflow-hidden rounded-lg shadow-lg h-72"
            >
              <Image
                src={work.image}
                width={400}
                height={300}
                alt={work.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  {work.service_type.map((service, index) => (
                    <p key={index} className="mt-2">
                      {service}
                    </p>
                  ))}

                  <button className="mt-4 text-white border-white hover:bg-white hover:text-black">
                    View Project
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
