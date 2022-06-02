import "./App.css";
import Intro from "./Components/Intro/Intro";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Hobbies from "./Components/Hobbies/Hobbies";
import Contact from "./Components/Contact/Contact";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Intro />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
