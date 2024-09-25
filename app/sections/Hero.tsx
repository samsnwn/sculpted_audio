import React from 'react';
import GridBackground from "@/components/GridBackground";
import Headline from "@/components/Texts/Headline";
import Subheadline from "@/components/Texts/Subheadline";
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Logo from "@/public/logos/1-RGB/Light/SculptedAudio-Logo-Light-RGB.png";


const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center m-auto">
      {/* <GridBackground className="text-neutral-700" /> */}
      <SectionWrapper>
        <div className="lg:w-2/3 flex flex-col items-center lg:items-start gap-8 md:gap-12 lg:text-left mt-[-160px] md:mt-[-120px] lg:mt-[-20vh]">
          <div className="space-y-4">
            <Image
            src={Logo}
            alt="Sculpted Audio Logo"
            width={550}
            height={550}
            priority
            className="w-auto h-auto"
          />
          </div>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <Subheadline className="text-red text-sm sm:text-base md:text-lg text-center lg:text-left sm:ml-10">
              elevating sonic <br /> experiences /
            </Subheadline>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;
