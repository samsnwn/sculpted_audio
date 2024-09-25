import React from 'react';
import GridBackground from "@/components/GridBackground";
import Headline from "@/components/Texts/Headline";
import Subheadline from "@/components/Texts/Subheadline";

const Hero = () => {
  return (
    <section className="w-full min-h-screen max-w-[1680px] flex items-center m-auto">
      {/* <GridBackground className="text-neutral-700" /> */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-2/3 flex flex-col gap-8 md:gap-12 text-center lg:text-left mt-[-160px] md:mt-[-120px] lg:mt-[-20vh]">
          <div className="space-y-4">
            <div className="w-20 h-1 bg-red-500 mx-auto lg:mx-0" />
            <Headline className="text-white-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">
              Sculpted Audio
            </Headline>
          </div>

          <div className="max-w-2xl mx-auto lg:mx-0">
            <Subheadline className="text-red text-sm sm:text-base md:text-lg text-center lg:text-left">
              elevating sonic <br /> experiences /
            </Subheadline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
