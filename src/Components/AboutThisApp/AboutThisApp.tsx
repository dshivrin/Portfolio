import { Container } from "../Shared/StyledComponents/Container";
import styled from "styled-components";
import Title from "../Shared/Title/Title";
import Link from "Components/Shared/Link/Link";

const AboutContainer = styled(Container)`
  //height: 100vh;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 15%;
  text-align: left;
  @media (max-width: 768px) {
    width: auto;
    height: 100vh;
  }
`;

const innerStyles = {
  padding: "25px 15px",
  // textAlign: "flex-start"
};

//Logos are taken from https://www.freepnglogos.com/
const AboutThisApp = () => {
  return (
    <AboutContainer id="projects">
      <Title text={"Projects"} />
      <div style={innerStyles}>
        <p></p>
        <br />
        <br />
        <p>
          Visit my{" "}
          <Link
            cssClass="link"
            href="https://github.com/dshivrin/"
            text="github account"
          />{" "}
          to view the sourcecode of this ptoject and others.
        </p>
        <p>
          {" "}
          If you wish to explore some of the anmimations used here you can
          explore my{" "}
          <Link
            cssClass="link"
            href="https://codepen.io/dshivrin"
            text="codepen"
          />
          .
        </p>
      </div>
    </AboutContainer>
  );
};

export default AboutThisApp;
