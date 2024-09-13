import { clients } from "@/app/data/data";
import ClientCard from "./ClientCard";
import { cn, Props } from "@/utils/cn";

const Clients: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={cn("flex flex-col w-full h-full py-20", className)}
      id="clients"
    >
      <div className="w-5 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-4 border border-red" />
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start">
        Clients
      </h2>
      <div className="flex flex-col lg:flex-row items-center m-auto justify-center gap-5 pt-5">
        {clients.map((client, index) => (
          <ClientCard client={client} index={index} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default Clients;
