import { clients } from "@/app/data/data";
import ClientCard from "./ClientCard";
import { cn, Props } from "@/utils/cn";

const Clients: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("flex flex-col w-full py-20 bg-gray", className)} id="clients">
      <div className="mx-auto px-4 ">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <h2 className="text-black text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start mb-10">
          Clients
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
