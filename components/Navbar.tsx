import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImInstagram } from "react-icons/im";
import Icon from "@/public/icons/1-RGB/Light/SculptedAudio-Icon-Light-RGB.png";
import IconDark from "@/public/icons/1-RGB/Dark/SculptedAudio-Icon-Dark-RGB.png";
import HamburgerMenu from "./Hamburger";


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
          <li className="border-b border-transparent hover:border-red transition duration-300">Portfolio/Clients</li>
        </Link>
        <Link href="#about">
          <li className="border-b border-transparent hover:border-red transition duration-300">About Us/Team</li>
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
        className={`fixed h-screen p-20 ease-in duration-500 top-0 w-[65%] ${
          menuOpen ? "left-0 bg-black-100" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col items-center w-full h-full gap-5 text-white-100 text-lg">
          <Link href="#top">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>Home</li>
          </Link>
          <Link href="#services">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>Services</li>
          </Link>
          <Link href="#portfolio">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>Portfolio/Clients</li>
          </Link>
          <Link href="#about">
            <li className="border-b border-transparent hover:border-red transition duration-300" onClick={handleClose}>About Us/Team</li>
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
        <div>
          {/* <Image src={Icon} alt="sculpted audio icon light" width={50} height={50}/> */}
          {/* <Image src={IconDark} alt="sculpted audio icon dark" width={500} height={500}/> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
