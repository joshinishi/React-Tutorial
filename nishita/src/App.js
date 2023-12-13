import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import ScrollButton from "./Components/ScrollButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="section">
        <div className="section-content">
          <div className="home-section">
            <div className="home">
              <Home />
            </div>
          </div>
          <div className="about-section">
            <div className="about">
              <About />
            </div>
          </div>
          <div className="education-section"></div>
          <div className="education">
            <Education />
          </div>
          <div className="experience-section">
            <div className="experience">
              <Experience />
            </div>
          </div>
          <div className="skill-section">
            <div className="skills">
              <Skills />
            </div>
          </div>
          <div className="achievement-section">
            <div className="achievements">
              <Achievements />
            </div>
          </div>
          <div className="contact-section">
            <div className="contact">
              <Contact />
            </div>
          </div>
          <div className="progress">
            <div className="progress_bar">
              <ScrollButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
