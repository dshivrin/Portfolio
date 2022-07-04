import AboutMe from "Components/AboutMe/AboutMe";
import AboutThisApp from "Components/AboutThisApp/AboutThisApp";
import Contact from "Components/Contact/Contact";
import Experience from "Components/Experience/Experience";
import Footer from "Components/Footer/Footer";
import Hobbies from "Components/Hobbies/Hobbies";
import Intro from "Components/Intro/Intro";
import Projects from "Components/Projects/Projects";


const Main = () => {
  return (
    <div className="main-container">
      <Intro />
      <AboutMe />
      <Experience />
      {/* <Projects />
      <Hobbies /> */}
      <AboutThisApp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
