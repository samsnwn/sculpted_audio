import * as React from "react";
import { cn, Props } from "@/utils/cn";
import ServiceItem from "./ServiceItem";
import { services } from "@/app/data/data";
import AltSubheadline from "@/components/Texts/AltSubheadline";
import Numbers from "@/components/Texts/Numbers";

const Services: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("flex flex-col w-full py-20 bg-gray", className)} id="services">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between md:items-center mb-16">
          <Numbers className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-0">
            [01]
          </Numbers>
            <AltSubheadline className="text-white-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
              OUR<br className="" /> SERVICES
            </AltSubheadline>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className={cn(
              "w-full",
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
      </div>
    </section>
  )
}

export default Services;