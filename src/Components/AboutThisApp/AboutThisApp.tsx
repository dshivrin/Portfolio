
import { Container } from "../StyledComponents/Container";
import Title from "../Title/Title";


//Logos are taken from https://www.freepnglogos.com/
const AboutThisApp = () =>{
  return (
    <Container>
      <Title text={"About This App"}/>
      <p className="contact">
          This potfolio project was written in React v18.1.0 
          Using Typescript and SCSS
      </p>
      <p>
          
      </p>
    </Container>
  );
}

export default AboutThisApp;