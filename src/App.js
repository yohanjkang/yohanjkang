import "./App.css";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ResumePage from "./components/ResumePage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <a id="about">
        <AboutPage />
      </a>
      <a id="resume">
        <ResumePage />
      </a>
      <a id="contact">
        <ContactPage />
      </a>
    </div>
  );
}

export default App;
