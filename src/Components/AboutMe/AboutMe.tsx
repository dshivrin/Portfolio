import styled from "styled-components";
import { Container } from "../StyledComponents/Container";
const profileImage = require("../../Media/profile picture.jpg");


const ContainerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
};

const InnerStyle = {
  display: "flex",
  gap: "25px"
};

const skills = {
  display: "flex",
  alignContent: "center",
  justifyContent: "space-evenly"
}

const AboutMe = () => {
  return (
   //THIS DESIGN IS NOT RESPONSIVE!! NEED TO FIX

    <div style={ContainerStyle}>
      <h1 className="title">ABOUT ME</h1>
      <div style={InnerStyle}>
        <div>
          <p>
            I'm a full-stack web developer based in Israel. Professionally I
            code since 2015. I'm an autodidact person, experienced with variaty
            of technologies and approaches.
          </p>
          <br />
          <div>
            <p>
              Gag ipsum dolar sit amet woman puking rainbows phone vegan haters
              gonna hate. Humor portfolio ba dumm tss oh stop it, you so close
              cereal guy drink sandwich. I See What You Did There cookie monster
              viverra oh god why hitler food no bad dead space people. Ipsum
              iron man female not okay 9000 for rainbow mother of god. High
              school elephant i dont get it college derp joke fap fap genius
              bart asian.
            </p>
            <br/>
            <div style={skills}>
              <ul className="front-end">
                <li>Angular (JS/2+)</li>
                <li>React</li>
                <li>JQuery</li>
              </ul>
              <ul className="back-end">
                <li>ASP.NET</li>
                <li>.NET core</li>
                <li>Node.js</li>
              </ul>
              <ul className="back-end">
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img width={350} height={350} src={profileImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
