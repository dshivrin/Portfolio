import "./App.scss";
import Intro from "./Components/Intro/Intro";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Hobbies from "./Components/Hobbies/Hobbies";
import Contact from "./Components/Contact/Contact";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import AboutThisApp from "./Components/AboutThisApp/AboutThisApp";

function App() {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <Intro />
        <AboutMe />
        {/* <Education /> */}
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
        <AboutThisApp/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
