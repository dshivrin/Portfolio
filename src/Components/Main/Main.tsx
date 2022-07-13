import AboutMe from "Components/AboutMe/AboutMe";
import AboutThisApp from "Components/AboutThisApp/AboutThisApp";
import Contact from "Components/Contact/Contact";
import Experience from "Components/Experience/Experience";
import Footer from "Components/Footer/Footer";
import Intro from "Components/Intro/Intro";

const Main = () => {
  return (
    <div className="main-container">
      <Intro />
      <AboutMe />
      <Experience />
      <AboutThisApp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
