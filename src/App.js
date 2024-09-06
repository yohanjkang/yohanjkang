import { useInView } from "react-intersection-observer";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";

function App() {
  const theme = "dark";

  const [homeRef, homeInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [experienceRef, experienceInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <>
      <Navbar
        theme={theme}
        isHomeVisible={homeInView}
        isAboutVisible={aboutInView}
        isExperienceVisible={experienceInView}
        isProjectsVisible={projectsInView}
        isContactVisible={contactInView}
      />
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
