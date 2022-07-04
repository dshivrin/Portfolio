import AnimatedText from "Components/Shared/AnimatedTyping/AnimatedTyping";
import styled from "styled-components";
import { Container } from "../Shared/StyledComponents/Container";
import "./Intro.scss";

const Name = styled.h1`
  font-family: Madelican;
  font-size: clamp(
    1.5em,
    12vw,
    4.5em
  ); //clamp(min, value, maximum), base value is set in
`;

const Header = styled.div`
  //justify-items: start;
  color: var(--light-green);
  font-weight: 400;
`;

const IntroContainer = styled(Container)`
  text-align: left;
  width: 800px;
  margin: 0 auto;
`;

const animatedTextData = {
  element: "h1",
  text: ["Test hello world"],
  typeDelay: 200,
  eraseDelay: 100,
  nextWordDelay: 1000,
  iterations: 1,
};

const Intro = () => {
  return (
    <IntroContainer id="intro">
      <Header>
      {/* <AnimatedText {...animatedTextData} /> */}
        <h4 className="intro">Hi there! I am</h4>
      </Header>
      {/* <Name className="name">Dima Shivrin</Name> */}
      <h3 className="name">Dima Shivrin.</h3>
      <h3 className="description">I'm a Senior Full-Stack Engineer</h3>
    </IntroContainer>
  );
};

export default Intro;
