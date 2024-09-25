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
        <div className="w-[90%] flex mx-auto justify-between md:items-center mb-16">
          <AltSubheadline className="font-light leading-tight">
            CLIENTS
          </AltSubheadline>
          <Numbers>
            [02]
          </Numbers>
        </div>
        <div className="text-white p-4 md:p-8 mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                FOR CREATORS WITH A UNIQUE VISION,
                TRUE COLLABORATORS EAGER TO
                ELEVATE THEIR CREATION TO THE NEXT
                LEVEL ALONGSIDE PROFESSIONALS.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex">
                <div className="text-red font-bold text-2xl mr-2">a/</div>
                <div>
                  <h3 className="text-red text-lg sm:text-xl font-normal mb-1">
                    ELECTRONIC<br />MUSIC PRODUCERS
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Sound innovators seeking perfection in every beat.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="text-red font-bold text-2xl mr-2">b/</div>
                <div>
                  <h3 className="text-red text-lg sm:text-xl font-normal mb-1">
                    MUSICAL<br />ARTISTS
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Passionate to bring their art to life with exceptional quality.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="text-red font-bold text-2xl mr-2">c/</div>
                <div>
                  <h3 className="text-red text-lg sm:text-xl font-normal mb-1">
                    RECORD<br />LABELS
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Industry leaders committed to releasing impeccable productions.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="text-red font-bold text-2xl mr-2">d/</div>
                <div>
                  <h3 className="text-red text-lg sm:text-xl font-normal mb-1">
                    VIDEO GAME<br />DEVELOPERS
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Creators of immersive worlds seeking the finest sound design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className={cn(
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
