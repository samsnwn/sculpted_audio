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
      {/* <GridBackground className="text-neutral-700 -z-50" /> */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between xs:gap-8 mt-[-160px] md:mt-[-120px] lg:mt-[-20vh]">

            <Image
              src={Logo}
              alt="Sculpted Audio Logo"
              priority
              width={300}
              height={300}
            />

          <Subheadline className="text-red text-2xl md:text-4xl text-center lg:text-left">
            elevating sonic <br /> experiences /
          </Subheadline>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;
