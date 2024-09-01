import React from "react";
import { FaUser, FaBriefcase, FaDisplay, FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
  var accentColor = "#59acb5";

  var navLinkClass =
    "flex items-center px-6 py-4 mx-4 cursor-default transition-all " +
    "border-b-[3px] border-transparent hover:border-accent hover:-translate-y-1";

  return (
    <nav className="bg-white w-full py-2 fixed">
      <ul className="flex font-semibold justify-end">
        <a href="#about" className={navLinkClass}>
          <FaUser className="mr-2" size={20} color={accentColor} />
          About
        </a>
        <a href="#experience" className={navLinkClass}>
          <FaBriefcase className="mr-2" size={20} color={accentColor} />
          Experience
        </a>
        <a href="#projects" className={navLinkClass}>
          <FaDisplay className="mr-2" size={20} color={accentColor} />
          Projects
        </a>
        <a href="#contact" className={navLinkClass}>
          <FaEnvelope className="mr-2" size={20} color={accentColor} />
          Contact
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
