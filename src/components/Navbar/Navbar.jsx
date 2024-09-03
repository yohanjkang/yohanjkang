import config from "../../config";
import {
  FaHouse,
  FaUser,
  FaBriefcase,
  FaDisplay,
  FaEnvelope,
} from "react-icons/fa6";

const Navbar = ({
  theme,
  isHomeVisible,
  isAboutVisible,
  isExperienceVisible,
  isProjectsVisible,
  isContactVisible,
}) => {
  const accentColor = config.accentColor;
  const black = "#ffffff";

  const navLinkClass =
    "flex flex-col items-center px-6 pt-4 pb-3 mx-4 cursor-default transition-all " +
    "border-b-[3px] border-transparent hover:border-accent hover:-translate-y-1";
  const navLinkActiveClass =
    "flex flex-col items-center px-6 pt-4 pb-3 mx-4 cursor-default " +
    "transition-all border-b-[3px] border-accent -translate-y-1";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <nav data-theme={theme} className="bg-primary w-full pt-2 fixed">
      <ul className="flex font-semibold justify-end">
        <li
          className={isHomeVisible ? navLinkActiveClass : navLinkClass}
          onClick={() => scrollToSection("home")}
        >
          {/* <FaHouse color={isHomeVisible ? accentColor : black} size={20} /> */}
          <p
            className={
              isHomeVisible
                ? "transition-colors text-accent"
                : "transition-colors text-text-primary"
            }
          >
            Home
          </p>
        </li>
        <li
          className={isAboutVisible ? navLinkActiveClass : navLinkClass}
          onClick={() => scrollToSection("about")}
        >
          {/* <FaUser size={20} /> */}
          <p
            className={
              isAboutVisible
                ? "transition-colors text-accent"
                : "transition-colors text-text-primary"
            }
          >
            About
          </p>
        </li>
        <li
          className={isExperienceVisible ? navLinkActiveClass : navLinkClass}
          onClick={() => scrollToSection("experience")}
        >
          {/* <FaBriefcase size={20} /> */}
          <p
            className={
              isExperienceVisible
                ? "transition-colors text-accent"
                : "transition-colors text-text-primary"
            }
          >
            Experience
          </p>
        </li>
        <li
          className={isProjectsVisible ? navLinkActiveClass : navLinkClass}
          onClick={() => scrollToSection("projects")}
        >
          {/* <FaDisplay size={20} /> */}
          <p
            className={
              isProjectsVisible
                ? "transition-colors text-accent"
                : "transition-colors text-text-primary"
            }
          >
            Projects
          </p>
        </li>
        <li
          className={isContactVisible ? navLinkActiveClass : navLinkClass}
          onClick={() => scrollToSection("contact")}
        >
          {/* <FaEnvelope size={20} /> */}
          <p
            className={
              isContactVisible
                ? "transition-colors text-accent"
                : "transition-colors text-text-primary"
            }
          >
            Contact
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
