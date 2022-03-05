import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="App">
      <Navbar isOpen={isNavbarOpen} clickHandler={handleClick} />
      <Header clickHandler={handleClick} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
