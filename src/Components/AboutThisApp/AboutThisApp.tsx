import { Container } from "../Shared/StyledComponents/Container";
import styled from "styled-components";
import Title from "../Title/Title";

const AboutContainer = styled(Container)`
  height: 100vh;
  flex-direction: column;
`;

const listStyle = {
  listStyle: "none",
};

//Logos are taken from https://www.freepnglogos.com/
const AboutThisApp = () => {
  return (
    <AboutContainer>
      <Title text={"About This App"} />
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
        <a className="link" target="blank" href="https://github.com/dshivrin/Portfolio">
          github account
        </a>
        .
      </p>
      <p>
        {" "}
        If you wish to explore some of the anmimations used here you can explore
        my{" "}
        <a className="link" target="blank" href="https://codepen.io/dshivrin">
          codepen
        </a>
        .
      </p>
    </AboutContainer>
  );
};

export default AboutThisApp;
