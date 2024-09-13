import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Headphones, Music, Users } from "lucide-react";
import { cn, Props } from "@/utils/cn";
import ServiceItem from "./ServiceItem";

const Services: React.FC<Props> = ({ className }) => {
  const services = [
    {
      icon: <Mic className="h-8 w-8 mb-4 text-red" />,
      title: "STEREO MASTERING",
      description:
        "At our mastering studio, we specialize in making sure your music transfers flawlessly to its final destination—whether that's digital distribution, vinyl, tape, or CD—while preserving every detail. Mastering is the crucial final step in enhancing and refining your audio. This process involves techniques like EQing, compression, limiting, and correcting minor pops and glitches, ensuring your music sounds its best. We also perform error checking and prepare the audio in its final form, ready for production, duplication, or digital distribution. If you haven’t yet reached the point where your music is ready for mastering, we’re happy to provide guidance on how to get there—at no extra. Our goal is to optimize your sound and deliver a polished, professional result that’s ready to be shared with the world.",
    },
    {
      icon: <Headphones className="h-8 w-8 mb-4 text-red" />,
      title: "MIXING",
      description:
        "Our mixing service takes your fully arranged and structured track and blends all its elements into a cohesive, professional mix. For the best results, creative effects like reverb, delay, or chorus should remain on, but we recommend leaving compression and limiting to our engineers. To help us understand your vision, please send your demo mix or self-master, along with one or two reference tracks. Any specific preferences or ideas for the sound can be discussed beforehand to ensure we’re aligned from the start.",
    },
    {
      icon: <Music className="h-8 w-8 mb-4 text-red" />,
      title: "STEM MASTERING (Up to 6 stems)",
      description:
        "Has the same goal as traditional mastering: to enhance and prepare your track for final distribution. The difference lies in the process—rather than working with a single stereo file, you send us grouped stems (like vocals, synths, or drums). While the track should already be fully mixed, stem mastering gives us more control over specific elements, allowing for greater precision and flexibility in achieving a refined, professional master.",
    },
    {
      icon: <Users className="h-8 w-8 mb-4 text-red" />,
      title: "OPTIONAL EXTRAS ",
      description: "	- CD DDP Image \n - Vinyl Premaster",
    },
  ];
  return (
    <section
      className={cn("flex flex-col w-full bg-black h-full pt-20", className)}
      id="services"
    >
      <div className="w-5 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-4 border border-red" />
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {services.map((service, index) => (
          <ServiceItem key={index} index={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
