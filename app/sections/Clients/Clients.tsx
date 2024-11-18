import { clients } from "@/app/data/data";
import ClientCard from "./ClientCard";
import SectionWrapper from "@/components/SectionWrapper";

const Clients = () => {
  return (
    <section className="w-full">
      <SectionWrapper className="py-20">
        <div className="grid grid-cols-1 gap-4 w-full mx-auto md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div
              key={index}
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
