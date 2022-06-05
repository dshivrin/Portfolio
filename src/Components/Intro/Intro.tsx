import styled from "styled-components";
import { Container } from "../StyledComponents/Container";

const Name = styled.h1`
  font-family: Madelican;
  font-size: clamp(
    1.5em,
    12vw,
    4.5em
  ); //clamp(min, value, maximum), base value is set in
`;

const Header = styled.div`
  justify-items: start;
`;

const IntroContainer = styled(Container)`
  name {
    font-family: Madelican;
    font-size: clamp(
      1.5em,
      12vw,
      4.5em
    ); //clamp(min, value, maximum), base value is set in
  }
  header {
    justify-items: start;
  }
`;
const Intro = () => {
  return (
    <IntroContainer id="intro">
      <Header>
        <span>Hi there!</span>
        <br />
        <span>My name is</span>
      </Header>
      <Name className="name">Dima Shivrin</Name>
      <div>I am a Full-Stack web developer</div>
    </IntroContainer>
  );
};

export default Intro;
