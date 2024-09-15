import * as React from "react";
import { Mic, Headphones, Music, Users } from "lucide-react";
import { cn, Props } from "@/utils/cn";
import ServiceItem from "./ServiceItem";

const Services: React.FC<Props> = ({ className }) => {
  const services = [
    {
      icon: <Mic className="h-8 w-8 text-red" />,
      title: "STEREO MASTERING",
      description: "We specialize in making sure your music transfers flawlessly to its final destination—whether that's digital distribution, vinyl, tape, or CD—while preserving every detail. Mastering is the crucial final step in enhancing and refining your audio. We also perform error checking and prepare the audio in its final form, ready for production, duplication, or digital distribution. Our goal is to optimize your sound and deliver a polished professional result that's ready to be shared with the world.",
    },
    {
      icon: <Music className="h-8 w-8 text-red" />,
      title: "STEM MASTERING",
      description: "Has the same goal as traditional mastering: to enhance and prepare your track for final distribution. The difference lies in the process—rather than working with a single stereo file, you send us grouped stems (like vocals, synths, or drums). While the track should already be fully mixed, stem mastering gives us more control over specific elements, allowing for greater precision and flexibility in achieving a refined, professional master.",
    },
    {
      icon: <Headphones className="h-8 w-8 text-red" />,
      title: "MIXING",
      description: "Our mixing service takes your fully arranged and structured track and blends all its elements into a cohesive, professional mix. For the best results, creative effects like reverb, delay, or chorus should remain on, but we recommend leaving compression and limiting to our engineers. To help us understand your vision, please send your demo mix or self-master, along with one or two reference tracks. Any specific preferences or ideas for the sound can be discussed beforehand to ensure we're aligned from the start.",
    },
    {
      icon: <Users className="h-8 w-8 text-red" />,
      title: "OPTIONAL EXTRAS",
      description: "CD DDP Image and Vinyl Premaster services available.",
    },
  ]

  return (
    <section className={cn("flex flex-col w-full py-20", className)} id="services">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="w-20 h-1 bg-red-500 mb-4" />
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={cn(
              "lg:col-span-1",
              index === services.length - 1 && services.length % 3 === 1 && "lg:col-start-2"
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
      </div>
    </section>
  )
}

export default Services