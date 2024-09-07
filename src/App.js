import { useInView } from "react-intersection-observer";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";

function App() {
  const theme = "dark";

  // Logic to highlight the appropriate NavbarItem when the user scrolls to each section
  const threshold = Array.from({ length: 21 }, (_, i) => i * 0.05);

  const { ref: homeRef, entry: homeEntry } = useInView({
    threshold: threshold,
    triggerOnce: false,
  });
  const { ref: aboutRef, entry: aboutEntry } = useInView({
    threshold: threshold,
    triggerOnce: false,
  });
  const { ref: experienceRef, entry: experienceEntry } = useInView({
    threshold: threshold,
    triggerOnce: false,
  });
  const { ref: projectsRef, entry: projectsEntry } = useInView({
    threshold: threshold,
    triggerOnce: false,
  });
  const { ref: contactRef, entry: contactEntry } = useInView({
    threshold: threshold,
    triggerOnce: false,
  });

  const visibilityData = [
    {
      id: "Home",
      visibility: homeEntry ? homeEntry.intersectionRatio : 0,
    },
    { id: "About", visibility: aboutEntry ? aboutEntry.intersectionRatio : 0 },
    {
      id: "Experience",
      visibility: experienceEntry ? experienceEntry.intersectionRatio : 0,
    },
    {
      id: "Projects",
      visibility: projectsEntry ? projectsEntry.intersectionRatio : 0,
    },
    {
      id: "Contact",
      visibility: contactEntry ? contactEntry.intersectionRatio : 0,
    },
  ];

  const mostVisibleSection = visibilityData.reduce((max, section) =>
    section.visibility > max.visibility ? section : max
  );

  return (
    <>
      <Navbar theme={theme} mostVisibleSection={mostVisibleSection.id} />
      <div ref={homeRef}>
        <Home theme={theme} />
      </div>
      <div ref={aboutRef}>
        <About theme={theme} />
      </div>
      <div ref={experienceRef}>
        <Experience theme={theme} />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
