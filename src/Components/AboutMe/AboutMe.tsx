
import styled from "styled-components";
import { Container } from "../StyledComponents/Container";

//TODO: Write a paragraph about yourself
//Add an animated "About me" title (thinking slide from the left, large font, light color)

const AboutMeContainer = styled(Container)`
  flex-direction: row;
  align-items: center;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer className="about-me">
      <h1 className="title">ABOUT ME</h1>
      <p>
        I'm a full-stack web developer based in Israel. Professionally I code
        since 2015. I'm an autodidact person, experienced with variaty of
        technologies and approaches.
      </p>
    </AboutMeContainer>
  );
};

export default AboutMe;
