import { clients } from "@/app/data/data";
import ClientCard from "./ClientCard";
import { cn, Props } from "@/utils/cn";

const Clients: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("flex flex-col w-full py-20", className)} id="clients">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="w-20 h-1 bg-red-500 mb-4" />
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Clients
          </h2>
        </div>
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
