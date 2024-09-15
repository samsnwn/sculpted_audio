import * as React from "react";
import { cn, Props } from "@/utils/cn";
import ServiceItem from "./ServiceItem";
import { services } from "@/app/data/data";
import AltSubheadline from "@/components/Texts/AltSubheadline";
import Numbers from "@/components/Texts/Numbers";

const Services: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("flex flex-col w-full py-20 bg-gray", className)} id="services">
        <div className="flex justify-between w-[85%] mx-auto text-white-100">
          <Numbers className="text-7xl text-white">[01]</Numbers>
          {/* OUR 4 SERVICES title */}
          <div className="text-right mb-16 pt-8">
            <AltSubheadline className="text-6xl md:text-7xl lg:text-8xl font-light">
              OUR
              {/* <br />
              <span className="text-8xl">4</span> */}
              <br />
              SERVICES
            </AltSubheadline>
            {/* <h2 className="text-6xl md:text-7xl lg:text-8xl font-light">
              OUR
              <br />
              SERVICES
            </h2> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto">
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
    </section>
  )
}

export default Services