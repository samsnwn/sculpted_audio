import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Icon from "@/public/icons/1-RGB/Light/SculptedAudio-Icon-Light-RGB.png";
import Logo from "@/public/logos/1-RGB/Light/SculptedAudio-Logo-Light-RGB.png";
import HamburgerMenu from "./Hamburger";
import { gtPressuraMono } from "@/app/styles/fonts";
import { cn } from "@/utils/cn";

const links = [
  {
    title: "Services",
    slug: "#services",
  },
  // {
  //   title: "Portfolio",
  //   slug: "#portfolio",
  // },
  {
    title: "Clients",
    slug: "#clients",
  },
  {
    title: "About",
    slug: "#about",
  },
  {
    title: "FAQs",
    slug: "#faqs",
  },
  {
    title: "Contact",
    slug: "#contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={cn("flex items-center font-light", gtPressuraMono.className)}
    >
      <ul className="hidden md:flex gap-14 justify-between items-center h-full md:pr-3">
        {links.map((link, index) => (
          <Link href={link.slug} key={index}>
            <li className="border-b border-transparent hover:border-red transition duration-300">
              {link.title}
            </li>
          </Link>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Hamburger Menu */}
      <div
        className={`flex flex-col fixed h-screen ease-in-out duration-500 top-0 w-[85%] items-center justify-center gap-32 pb-24 text-center rounded-md shadow shadow-red ${
          menuOpen ? "left-0 bg-black-100" : "left-[-100%]"
        }`}
      >
        <div onClick={handleClose}>
          <Link href="#home">
            <Image
              src={Logo}
              alt="sculpted audio logo light"
              width={125}
              height={125}
              className="w-auto h-auto"
            />
          </Link>
        </div>
        <ul className="flex flex-col items-center w-full gap-5 text-white text-lg font-light">
          {links.map((link, index) => (
            <Link href={link.slug} key={index}>
              <li
                className="border-b border-transparent hover:border-red transition duration-300"
                onClick={handleClose}
              >
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-5 px-6">
          <Image
            src={Icon}
            alt="sculpted audio icon light"
            width={25}
            height={25}
          />
          <h3 className="text-xs">
            Sculpted Audio© {currentYear}. All rights reserved.
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
