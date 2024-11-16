import { clients } from "@/app/data/data";
import ClientCard from "./ClientCard";
import { cn } from "@/utils/cn";
import AltSubheadline from "@/components/Texts/AltSubheadline";
import Numbers from "@/components/Texts/Numbers";
import SectionWrapper from "@/components/SectionWrapper";

const Clients = () => {
  return (
    <section className="w-full" id="clients">
      <SectionWrapper className="py-20">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <div className="w-[90%] flex mx-auto justify-between items-center mb-16">
          <AltSubheadline className="font-light leading-tight">
            CLIENTS
          </AltSubheadline>
          <Numbers>
            [02]
          </Numbers>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mx-auto md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div
              key={index}
              className={cn(
                index === 2 && clients.length === 4 ? "sm:col-span-1 lg:col-span-1" :
                index === 2 && "sm:col-span-2 lg:col-span-1",
                index > 2 && "sm:col-span-1"
              )}
            >
              <ClientCard client={client} index={index} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Clients;
