import "./Intro.scss";
import "../../Fonts/StylishCalligraphy.ttf";

const Intro = () => {
  return (
    <div id="intro" className="container">
      <div className="header">
        <span>Hi there!</span>
        <br />
        <span>My name is</span>
      </div>
      <h1 className="name">Dima Shivrin</h1>
      <div>I am a Full-Stack web developer</div>
    </div>
  );
};

export default Intro;
