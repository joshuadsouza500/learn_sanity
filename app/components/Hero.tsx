import { getHero } from "@/sanity/sanity.query";
import Image from "next/image";
import React from "react";

const Hero = async () => {
  const Hero = await getHero();

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 ">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {Hero.title}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {Hero.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="p-3 border rounded-md hover:bg-gray-800">
                Our Projects
              </button>
              <button className="p-3 border rounded-md hover:bg-gray-800">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={Hero.image}
              width={550}
              height={550}
              alt={Hero.alt}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
