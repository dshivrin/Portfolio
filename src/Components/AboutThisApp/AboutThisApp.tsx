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

const listStyle = {
  listStyle: "none",
};

const innerStyles = {
  padding: "25px 15px",
  // textAlign: "flex-start"
};

//Logos are taken from https://www.freepnglogos.com/
const AboutThisApp = () => {
  return (
    <AboutContainer id="projects">
      <Title text={"About This App"} />
      <div style={innerStyles}>
        <p>This is my playground, where I learn and experiment.</p>
        <br />
        <p>
          Upcoming: I'm currently working on 2 projects.
          <ul style={listStyle}>
            <li>1.Conway's game of life</li>
            <li>
              2. A new arduino leds project (previous one accidentally destroyed
              during renovations)
            </li>
          </ul>
        </p>
        <br />
        <p>
          If you wish to view the source code for this project, you can go to my{" "}
          <Link
            cssClass="link"
            href="https://github.com/dshivrin/Portfolio"
            text="github account"
          />
          .
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
