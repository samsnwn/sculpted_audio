import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImInstagram } from "react-icons/im";
import Icon from "@/public/icons/1-RGB/Light/SculptedAudio-Icon-Light-RGB.png";
import IconDark from "@/public/icons/1-RGB/Dark/SculptedAudio-Icon-Dark-RGB.png";
import HamburgerMenu from "./Hamburger";
import { gtPressuraMono } from "@/app/styles/fonts";
import { cn } from "@/utils/cn";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center">
      <ul className="hidden md:flex gap-5 justify-between items-center h-full md:pr-3">
        <Link href="#services">
          <li className="border-b border-transparent hover:border-red transition duration-300">Services</li>
        </Link>
        <Link href="#portfolio">
          <li className="border-b border-transparent hover:border-red transition duration-300">Clients</li>
        </Link>
        <Link href="#about">
          <li className="border-b border-transparent hover:border-red transition duration-300">About</li>
        </Link>
        <Link href="#contact">
          <li className="border-b border-transparent hover:border-red transition duration-300">Contact</li>
        </Link>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
  
      

      {/* Hamburger Menu */}
      <div
        className={`flex flex-col fixed h-screen pt-24 ease-in duration-500 top-0 w-[65%] items-center text-center ${
          menuOpen ? "left-0 bg-black-100" : "left-[-100%]"
        }`}
      >
        <ul className={cn("flex flex-col items-center w-full h-full gap-5 text-white text-lg", gtPressuraMono.className)}>
          <Link href="#top">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>Home</li>
          </Link>
          <Link href="#services">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>Services</li>
          </Link>
          <Link href="#portfolio">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>Clients</li>
          </Link>
          <Link href="#about">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>About</li>
          </Link>
          <Link href="#contact">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>Contact</li>
          </Link>
        </ul>
        {/* <div>
          <Link href="https://www.instagram.com" className="text-white">
          <ImInstagram />
          </Link>
        </div> */}
        <div className="pb-28">
          <Image src={Icon} alt="sculpted audio icon light" width={50} height={50}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
