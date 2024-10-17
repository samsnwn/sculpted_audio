'use client'

import React, { useState, useEffect } from 'react';
import Subheadline from "@/components/Texts/Subheadline";
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Logo from "@/public/logos/1-RGB/Light/SculptedAudio-Logo-Light-RGB.png";
import { ChevronDown } from 'lucide-react';

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

  const arrowOpacity = Math.max(0, 1 - scrollY / 200);

  return (
    <section className="w-full min-h-screen flex m-auto relative">
      {/* <GridBackground className="text-neutral-700 -z-50" /> */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-14 mt-[20vh] md:mt-[30vh]">
          <Image
            src={Logo}
            alt="Sculpted Audio Logo"
            width={300}
            height={300}
          />
          <Subheadline className="text-red text-2xl md:text-4xl text-center lg:text-left">
            elevating sonic <br /> experiences /
          </Subheadline>
        </div>
        <div 
        className="absolute left-1/2 transform -translate-x-1/2 translate-y-48 lg:translate-y-80 transition-opacity duration-300 ease-in-out"
        style={{ opacity: arrowOpacity }}
      >
        <ChevronDown className="w-12 h-12 text-white animate-bounce" />
      </div>
      </SectionWrapper>

    </section>
  );
};

export default Hero;