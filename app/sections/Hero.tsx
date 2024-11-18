'use client'

import React, { useState, useEffect } from 'react';
import Subheadline from "@/components/Texts/Subheadline";
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Logo from "@/public/logos/1-RGB/Light/SculptedAudio-Logo-Light-RGB.png";
// import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const arrowOpacity = Math.max(0, 1 - scrollY / 200);

  return (
    <section className="w-[75%] min-h-[80vh] md:min-h-[85vh] flex mx-auto relative">
      {/* <GridBackground className="text-neutral-700 -z-50" /> */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[18vh] md:mt-[30vh]">
          <Image
            src={Logo}
            alt="Sculpted Audio Logo"
            width={400}
            height={400}
          />
          <Subheadline className="text-red text-2xl md:text-5xl text-left mt-20 md:mt-0">
            elevating sonic <br /> experiences/
          </Subheadline>
        </div>
        {/* <div 
        className="absolute left-1/2 transform -translate-x-1/2 translate-y-32 md:translate-y-60 transition-opacity duration-300 ease-in-out"
        style={{ opacity: arrowOpacity }}
      >
        <ChevronDown className="w-12 h-12 text-white animate-bounce" />
      </div> */}
      </SectionWrapper>

    </section>
  );
};

export default Hero;