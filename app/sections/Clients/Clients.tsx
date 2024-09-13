import { clients } from "@/app/data/data";
import ClientCard from "./ClientCard";

const Clients = () => {
  return (
    <section
      className="flex flex-col w-full bg-white h-full py-20"
      id="clients"
    >
      <div className="w-5 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-4 border border-red" />
      <h2 className="text-black text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start">
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
