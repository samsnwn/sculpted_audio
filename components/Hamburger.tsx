// components/HamburgerMenu.js
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex flex-col h-7 w-8 justify-between items-center group"
      >
        {/* Top bun */}
        <span
          className={`h-1 w-full rounded-lg transition-transform duration-300 ease-in-out bg-white ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        />
        {/* Meat */}
        <span
          className={`h-1 w-full rounded-lg transition-opacity duration-300 ease-in-out bg-white ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        {/* Bottom bun */}
        <span
          className={`h-1 w-full rounded-lg transition-transform duration-300 ease-in-out bg-white ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </button>
     
    </div>
  );
};

export default HamburgerMenu;
