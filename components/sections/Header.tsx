"use client";

import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logos/1-RGB/Light/SculptedAudio-Logo-Light-RGB.png";
import LogoDark from "../../public/logos/1-RGB/Dark/SculptedAudio-Logo-Dark-RGB.png";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`flex justify-between sticky top-0 transition-background duration-300 rounded-md text-white p-2 md:p-3 lg:p-4 ${isScrolled ? 'bg-gray shadow-2xl': 'bg-black '}`}>
    {/* <header
      className="flex justify-between sticky top-0 text-white shadow-xl w-full"
      id="top"
    > */}
      <Link href="#top">
        <Image src={Logo} alt="Sculpted Audio Logo" width={125} height={125} />
        {/* {isScrolled ? <Image src={LogoDark} alt="Sculpted Audio Logo" width={150} height={150} /> : <Image src={Logo} alt="Sculpted Audio Logo" width={150} height={150} />} */}
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
