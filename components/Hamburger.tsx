import { Dispatch, SetStateAction } from "react";

const HamburgerMenu = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative pr-1">
      <button
        aria-label="Hamburger"
        role="button"
        onClick={toggleMenu}
        className="flex flex-col h-6 w-8 justify-between items-center group"
      >
        {/* Top bun */}
        <span
          className={`h-0.5 w-full rounded-lg transition-transform duration-500 ease-in-out bg-white ${
            menuOpen ? "rotate-45 translate-y-3" : ""
          }`}
        />
        {/* Meat */}
        <span
          className={`h-0.5 w-full rounded-lg transition-opacity duration-500 ease-in-out bg-white ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        {/* Bottom bun */}
        <span
          className={`h-0.5 w-full rounded-lg transition-transform duration-500 ease-in-out bg-white ${
            menuOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default HamburgerMenu;
