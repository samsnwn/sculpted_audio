import * as React from "react";
import { cn, Props } from "@/utils/cn";
import ServiceItem from "./ServiceItem";
import GridBackground from "@/components/GridBackground";
import { services } from "@/app/data/data";

const Services: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("flex flex-col w-full py-20", className)} id="services">
      {/* <GridBackground className="text-neutral-700" /> */}
      <div className="container mx-auto px-2 sm:px-4">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className={cn(
              "lg:col-span-1 w-full",
              index === services.length - 1 && services.length % 3 === 1 && "lg:col-start-2"
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
      </div>
    </section>
  )
}

export default Services