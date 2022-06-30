import { Container } from "../StyledComponents/Container";
import { StyledInner } from "../StyledComponents/InnerContainer";
import Title from "../Title/Title";
import gmailLogo from "Media/logo-gmail.png";
import whatsAppLogo from "Media/whatsapp-logo.png";
import linkedInLogo from "Media/linkedin-logo.png";
import charachter from "Media/dancing-business-character.jpg";
import "./Contact.scss";

// const Slice = () => {
//   const imgContainer = document.getElementById("image-container");
//   const slices = 4;
//   const w = imgContainer!.offsetWidth;
//   const h = imgContainer!.offsetHeight;
//   //const img = document.querySelectorAll("#image-container img")[0]?.src;
//   const delay = 0.05;

//console.log(charachter);

//refactor
//   const create = () => {
//     for (let x = 0; x < slices; x++) {
//       const width = (x * w) / slices + "px";
//       const div = document.createElement("div");

//       imgContainer?.appendChild(div);

//       div.style.left = width;
//       div.style.top = "0px";
//       div.style.width = w / slices + "px";
//       div.style.height = h + "px";
//       div.style.backgroundImage = "url(" + charachter + ")";
//     }
//   };

//   create();
// };

//TODO: use icons for each contact option
const Contact = () => {
  const whatsappApiAddr = `https://api.whatsapp.com/send?phone=972544907782"`;
  //Slice();
  return (
    <Container id="contact">
      <Title text="So Now What?" />
      <h3>Say Hello</h3>
      <br />
      <StyledInner>
        <p>
          I'm currently looking for my next challenge! If you have an
          interesting suggestion for me
        </p>
        <br />
        <br />
      </StyledInner>
      {/* <StyledInner>
        <div id="image-container" className="image-container">
          <img id="" src={charachter} />
        </div>
      </StyledInner> */}
      <div className="links-container">
        <a
          target="blank"
          href="mailto:dshivrin@gmail.com?subject=Hello World!"
          className="email"
          style={{ backgroundImage: `url(${gmailLogo})` }}
        ></a>
        <a
          target="blank"
          href="https://api.whatsapp.com/send?phone=972544907782"
          className="whatsapp"
          style={{ backgroundImage: `url(${whatsAppLogo})` }}
        ></a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/dima-shivrin/"
          className="linkedIn"
          style={{ backgroundImage: `url(${linkedInLogo})` }}
        ></a>
      </div>
    </Container>
  );
};

export default Contact;
