
import { elementType } from "Core/types";
import { StyledInner } from "../Shared/StyledComponents/InnerContainer";
import Title from "../Title/Title";
import SkillsList from "./SkillsList";
const profileImage = require("../../Media/profile picture.jpg");

//todo: make one component with that style
const ContainerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
};

const skillsStyle = {
  display: "flex",
  alignContent: "center",
  justifyContent: "space-evenly",
};

const FrontEndSkills = ["Angular (JS/2+)", "React", "JQuery"];
const BackEndSkills = ["ASP.NET", ".NET core", "Node.js"];
const DBSkills = ["SQL", "MongoDB"];



const AboutMe = () => {
  return (
    <div id="about" style={ContainerStyle}>
      
      <Title text="About Me" />
      <StyledInner>
        <div>
          <p>
            I'm a full-stack web developer based in Israel. Professionally I
            code since 2015. I'm an autodidact person, experienced with variaty
            of technologies and approaches.
          </p>
          <br />
          <div>
            <p>
              In my journey I had an amazing experience working with small,
              meduim and large companies, using variety of tools. I started at a
              small company that provides the most effective{" "}
              <a
                className="link company-url"
                target="blank"
                href="https://www.niloosoft.com/?lang=en"
              >
                HR solutions
              </a>
              , then dived into a{" "}
              <a
                className="link company-url"
                target="blank"
                href="https://www.sag121.com/"
              >
                big data company
              </a>
              ,{" "}
              <a
                className="link company-url"
                target="blank"
                href="https://aeronautics-sys.com/"
              >
                a security contracter
              </a>{" "}
              and a{" "}
              <a
                className="link company-url"
                target="blank"
                href="https://www.smoove.io/"
              >
                marketing automation company
              </a>
              .
            </p>
            <br />
            <p>Here are the main technologies I’ve been working with:</p>
            <br />
            <div style={skillsStyle}>
              <SkillsList skills={FrontEndSkills} />
              <SkillsList skills={BackEndSkills} />
              <SkillsList skills={DBSkills} />
            </div>
          </div>
        </div>
        <div>
          <img width={350} height={350} src={profileImage} />
        </div>
      </StyledInner>
    </div>
  );
};

export default AboutMe;
