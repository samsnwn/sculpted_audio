"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logos/1-RGB/Light/SculptedAudio-Logo-Light-RGB.png";
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
      className={`flex justify-between sticky top-0 transition-background duration-300 rounded-md text-white p-2 md:p-3 lg:p-4 z-50 ${
        isScrolled ? "bg-gray shadow-2xl" : "bg-black "
      }`}
    >
      <Link href="#home">
        <Image src={Logo} alt="Sculpted Audio Logo" width={125} height={125} priority className="w-auto h-auto"/>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;