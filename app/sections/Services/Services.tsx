import * as React from "react";
import { cn } from "@/utils/cn";
import ServiceItem from "./ServiceItem";
import { services } from "@/app/data/data";
import AltSubheadline from "@/components/Texts/AltSubheadline";
import Numbers from "@/components/Texts/Numbers";
import SectionWrapper from "@/components/SectionWrapper";

const Services = () => {
  return (
    <section className="w-full" id="services">
      <SectionWrapper className="py-20">
      <div className="w-5 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-4 border border-red" />
      <div className="w-[90%] flex mx-auto justify-between md:items-center mb-16">
          <Numbers>
            [01]
          </Numbers>
          <AltSubheadline className="xl:text-7xl font-light leading-tight">
            OUR<br /> SERVICES
          </AltSubheadline>
        </div>
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <div key={index} className={cn(
              "w-full ",
              index === services.length - 1 && services.length % 2 !== 0 && "md:col-span-2"
            )}>
              <ServiceItem
                index={index}
                service={service}
                isLast={index === services.length - 1}
                totalServices={services.length}
              />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Services;