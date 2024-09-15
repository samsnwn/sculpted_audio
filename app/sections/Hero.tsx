import React from 'react';
import GridBackground from "@/components/GridBackground";
import Headline from "@/components/Texts/Headline";
import Subheadline from "@/components/Texts/Subheadline";
import { cn, Props } from "@/utils/cn";
import Image from 'next/image';

const Hero: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("w-full min-h-screen flex items-center", className)}>
      {/* <GridBackground className="text-neutral-700" /> */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-2/3 flex flex-col gap-8 md:gap-12 text-center lg:text-left mt-[-160px] md:mt-[-120px] lg:mt-[-20vh]">
          <div className="space-y-4">
            <div className="w-20 h-1 bg-red-500 mx-auto lg:mx-0" />
            <Headline className="text-white-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">
              WE BELIEVE IN THE ART OF SONIC SCULPTING
            </Headline>
          </div>

          <div className="max-w-2xl mx-auto lg:mx-0">
            <Subheadline className="text-white text-sm sm:text-base md:text-lg text-center lg:text-left">
              We transform sound into art. Our state-of-the-art facilities and expert team are dedicated to delivering unmatched quality in audio mastering, mixing, and sound design. We elevate your sound to new heights, ensuring every detail is perfected.
            </Subheadline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
