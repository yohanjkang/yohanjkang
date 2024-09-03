import React from "react";
import {
  FaBriefcase,
  FaDisplay,
  FaEnvelope,
  FaHouse,
  FaUser,
} from "react-icons/fa6";

const NavbarItem = ({ isVisible, onClick, icon, label, theme }) => {
  const navLinkClass =
    "flex flex-col items-center px-6 pt-4 pb-2 mx-4 cursor-default transition-all " +
    "border-b-[3px] border-transparent hover:border-accent hover:-translate-y-1";
  const navLinkActiveClass =
    "flex flex-col items-center px-6 pt-4 pb-2 mx-4 cursor-default " +
    "transition-all border-b-[3px] border-accent -translate-y-1";

  const iconMap = {
    home: <FaHouse size={20} />,
    about: <FaUser size={20} />,
    experience: <FaBriefcase size={20} />,
    projects: <FaDisplay size={20} />,
    contact: <FaEnvelope size={20} />,
  };

  return (
    <li
      data-theme={theme}
      className={isVisible ? { navLinkActiveClass } : { navLinkClass }}
      onClick={onClick}
    >
      {iconMap[icon]}
      <p
        className={
          isVisible
            ? "transition-colors text-accent"
            : "transition-colors text-primary"
        }
      >
        {label}
      </p>
    </li>
  );
};

export default NavbarItem;
