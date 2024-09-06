import NavbarItem from "./NavbarItem";

const Navbar = ({
  theme,
  isHomeVisible,
  isAboutVisible,
  isExperienceVisible,
  isProjectsVisible,
  isContactVisible,
}) => {
  const navbarItems = [
    { id: "home", label: "Home", isVisible: isHomeVisible },
    { id: "about", label: "About", isVisible: isAboutVisible },
    { id: "experience", label: "Experience", isVisible: isExperienceVisible },
    { id: "projects", label: "Projects", isVisible: isProjectsVisible },
    { id: "contact", label: "Contact", isVisible: isContactVisible },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <nav
      data-theme={theme}
      className="bg-primary opacity-100 w-full pt-2 fixed z-10"
    >
      <ul className="flex font-semibold justify-end">
        {navbarItems.map(({ id, label, isVisible }) => {
          return (
            <NavbarItem
              key={id}
              id={id}
              label={label}
              isVisible={isVisible}
              onClick={() => scrollToSection(id)}
              theme={theme}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
