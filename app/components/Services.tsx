import { getServices } from "@/sanity/sanity.query";
import {
  Code,
  ImageIcon,
  Megaphone,
  ChartNoAxesCombined,
  Palette,
} from "lucide-react";

const Services = async () => {
  const services = await getServices();

  const serviceIcons = {
    web: Code,
    design: Palette,
    camera: ImageIcon,
    seo: ChartNoAxesCombined,
    marketing: Megaphone,
  };

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-slate-800"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We offer a wide range of creative services to help your brand
              stand out.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon =
              serviceIcons[service?.icon as keyof typeof serviceIcons];
            return (
              <div
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"
                key={service._id}
              >
                <div className="rounded-full bg-primary p-3">{<Icon />}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-center text-muted-foreground">
                  {service.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
