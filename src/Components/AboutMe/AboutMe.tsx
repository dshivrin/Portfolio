import { elementType } from "Core/types";
import { StyledInner } from "../Shared/StyledComponents/InnerContainer";
import Title from "../Title/Title";
import SkillsList from "./SkillsList";
import { Container } from "../Shared/StyledComponents/Container";
import styled from "styled-components";

const profileImage = require("../../Media/profile picture.jpg");

const AboutContainer = styled(Container)`
  text-align: left;
  width: 800px;
  margin: 0 auto;
  height: 100vh;
  @media (max-width: 768px) {
    width: auto;
    height: 100%;//this component is heigher than 100vh
    margin: 20px auto;
  }
`;

const StyledInnerColumn = styled(StyledInner)`
  flex-direction: column;
`;

const SkillsStyled = styled(Container)`
  display: "flex";
  align-content: "center";
  justify-content: "space-evenly";
  display: flex;
  @media (max-width: 768px) {
    font-size: 1 em;
    font-size: 0.8em;
    gap: 20px;
    margin: 0 auto;
    padding: 0 7px;
    height: auto;
  }
`;

const FrontEndSkills = ["Angular (JS/2+)", "React", "JQuery"];
const BackEndSkills = ["ASP.NET", ".NET core", "Node.js"];
const DBSkills = ["SQL", "MongoDB"];

const AboutMe = () => {
  return (
    <AboutContainer id="about">
      <StyledInnerColumn>
        <Title text="About Me" />
        <StyledInner>
          <div>
            <p>
              I'm a full-stack web developer based in Israel. Professionally I
              code since 2015. I'm an autodidact person, experienced with
              variaty of technologies and approaches.
            </p>
            <br />
            <div>
              <p>
                In my journey I had an amazing experience working with small,
                meduim and large companies, using variety of tools. I started at
                a small company that provides the most effective{" "}
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
              <SkillsStyled>
                <SkillsList skills={FrontEndSkills} />
                <SkillsList skills={BackEndSkills} />
                <SkillsList skills={DBSkills} />
              </SkillsStyled>
            </div>
          </div>
          <div>
            <img width={350} height={350} src={profileImage} />
          </div>
        </StyledInner>
      </StyledInnerColumn>
    </AboutContainer>
  );
};

export default AboutMe;
