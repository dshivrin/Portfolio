import styled from "styled-components";
import { Container } from "../Shared/StyledComponents/Container";

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
        <br />
        <span>Hi there! I am</span>
      </Header>
      <Name className="name">Dima Shivrin</Name>
      <div>I am a senior Full-Stack Engineer</div>
    </IntroContainer>
  );
};

export default Intro;
