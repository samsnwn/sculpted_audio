"use client";

import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import Icon from "../public/icons/1-RGB/Light/SculptedAudio-Icon-Light-RGB.png";
import Logo from "../public/logos/1-RGB/Light/SculptedAudio-Logo-Light-RGB.png";

import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`sticky top-0 transition-all duration-300 rounded-md text-white p-2 md:p-3 lg:p-4 z-50  ${isScrolled ? "bg-gray/80 backdrop-blur-sm shadow-2xl" : "bg-transparent"
        }`}
    // className="sticky top-0 transition-background duration-300 rounded-md text-white p-2 md:p-3 lg:p-4 z-50 bg-black/90 backdrop-blur-sm shadow-2xl"
    >
      <div className="max-w-7xl w-full m-auto flex justify-between">
        <Link href="#home">
          {/* <Image
            src={isScrolled ? Logo : Icon}
            alt="Sculpted Audio Logo"
            // width={110}
            // height={110}
            priority
            className={isScrolled ? "w-40 h-12" : "w-7 h-7"}
          /> */}
          <Image
            src={Logo}
            alt="Sculpted Audio Logo"
            width={125}
            height={125}
            priority
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
