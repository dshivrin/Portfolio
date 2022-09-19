
import { StyledInner } from "../Shared/StyledComponents/InnerContainer";
import Title from "../Shared/Title/Title";
import SkillsList from "./SkillsList";
import { Container } from "../Shared/StyledComponents/Container";
import styled from "styled-components";
import Link from "Components/Shared/Link/Link";

const profileImage = require("../../Media/profile picture.jpg");

const AboutContainer = styled(Container)`
  text-align: left;
  width: 800px;
  margin: 0 auto;
  height: 100vh;
  @media (max-width: 768px) {
    width: auto;
    height: 100%; //this component is heigher than 100vh
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
  gap: 35px;
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
                <Link
                  cssClass="link company-url"
                  href="https://www.niloosoft.com/?lang=en"
                  text="HR solutions"
                />
                , then dived into a{" "}
                <Link
                  cssClass="link company-url"
                  href="https://www.sag121.com/"
                  text="big data company"
                />
                ,{" "}
                <Link
                  cssClass="link company-url"
                  href="https://aeronautics-sys.com/"
                  text="a security contracter"
                />
                {" "}
                and a{" "}
                <Link
                  cssClass="link company-url"
                  href="https://www.smoove.io/"
                  text="marketing automation company"
                />
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
            <img width={280} height={360} src={profileImage} alt="Profile" />
          </div>
        </StyledInner>
      </StyledInnerColumn>
    </AboutContainer>
  );
};

export default AboutMe;
