import { clients } from "@/app/data/data";
import ClientCard from "./ClientCard";
import SlideUpHoverCard from "./SlideUpHoverCard";
import { cn, Props } from "@/utils/cn";
import AltSubheadline from "@/components/Texts/AltSubheadline";

const Clients: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("w-full", className)} id="clients">
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <AltSubheadline className="text-white-100 text-4xl md:text-5xl lg:text-6xl font-light ml-5 md:items-start mb-16">CLIENTS</AltSubheadline>
        <div className="text-white p-4 md:p-8 mb-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={cn(
                "flex justify-center",
                index === 2 && "sm:col-span-2 lg:col-span-1",
                index > 2 && "sm:col-span-1"
              )}
            >
              {/* <ClientCard client={client} index={index} /> */}
              <SlideUpHoverCard client={client} index={index}/>
            </div>
          ))}
        </div>
      </div>∏
    </section>
  );
};

export default Clients;
