import { clients } from "@/app/data/data";
import ClientCard from "./ClientCard";
import { cn, Props } from "@/utils/cn";
import AltSubheadline from "@/components/Texts/AltSubheadline";

const Clients: React.FC<Props> = ({ className }) => {
  return (  
    <section className={cn("flex flex-col w-full py-20 bg-gray", className)} id="clients">
      <div className="w-[90%] mx-auto">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <AltSubheadline className="text-white-100 text-4xl md:text-5xl lg:text-6xl font-light ml-5 md:items-start mb-16">OUR CLIENTS</AltSubheadline>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mx-auto">
          {clients.map((client, index) => (
            <div key={index} className={cn(
              "flex justify-center",
              index === clients.length - 1 && clients.length % 3 === 1 && "lg:col-start-2"
            )}>
              <ClientCard client={client} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
