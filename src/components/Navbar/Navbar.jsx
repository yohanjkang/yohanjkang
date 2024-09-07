import NavbarItem from "./NavbarItem";

const Navbar = ({ theme, mostVisibleSection }) => {
  const navbarItems = [
    { id: "home", label: "Home", isVisible: mostVisibleSection === "Home" },
    { id: "about", label: "About", isVisible: mostVisibleSection === "About" },
    {
      id: "experience",
      label: "Experience",
      isVisible: mostVisibleSection === "Experience",
    },
    {
      id: "projects",
      label: "Projects",
      isVisible: mostVisibleSection === "Projects",
    },
    {
      id: "contact",
      label: "Contact",
      isVisible: mostVisibleSection === "Contact",
    },
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
