import React from "react";

const NavbarItem = ({ isVisible, onClick, label, theme }) => {
  const commonClasses =
    "flex flex-col items-center px-6 pt-4 pb-2 mx-4 cursor-default transition-all border-b-[3px] ";
  const navLinkClass =
    "border-transparent hover:border-accent hover:-translate-y-1";
  const navLinkActiveClass = "border-accent -translate-y-1";

  return (
    <li
      data-theme={theme}
      className={`${commonClasses} ${
        isVisible ? navLinkActiveClass : navLinkClass
      }`}
      onClick={onClick}
    >
      <p
        className={
          isVisible
            ? "transition-colors text-accent"
            : "transition-colors text-text-primary"
        }
      >
        {label}
      </p>
    </li>
  );
};

export default NavbarItem;
