import AnimatedText from "Components/Shared/AnimatedTyping/AnimatedTyping";
import styled from "styled-components";
import { Container } from "../Shared/StyledComponents/Container";
import { StyledInner } from "../Shared/StyledComponents/InnerContainer";
import "./Intro.scss";

const Header = styled.div`
  //justify-items: start;
  color: var(--light-green);
  font-weight: 400;
`;

const IntroContainer = styled(Container)`
  text-align: left;
  width: 800px;
  margin: 0 auto;
  padding-top: 80px;
  @media (max-width: 768px) {
    margin: 0 auto;
    height: 100vh;
    width:auto;
  }
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
      <StyledInner>
        <div>
          <Header>
            {/* <AnimatedText {...animatedTextData} /> */}
            <h4 className="intro">Hi there! I am</h4>
          </Header>
          {/* <Name className="name">Dima Shivrin</Name> */}
          <h3 className="name">Dima Shivrin.</h3>
          <h3 className="description">A Senior Full-Stack Engineer.</h3>
        </div>
      </StyledInner>
    </IntroContainer>
  );
};

export default Intro;
