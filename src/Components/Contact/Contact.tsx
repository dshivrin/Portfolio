import { Container } from "../StyledComponents/Container";
import Title from "../Title/Title";

//TODO: use icons for each contact option
const Contact = () =>{
  return (
    <Container id="contact">
     <Title text={"Contact Me"}/>
      <div className="contact">Email: dshivrin@hmail.com</div>
      <div className="contact">Mobile: +972544907782</div>
    </Container>
  );
}

export default Contact;