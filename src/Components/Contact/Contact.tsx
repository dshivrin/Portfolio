import { Container } from "../Shared/StyledComponents/Container";
import { StyledInner } from "../Shared/StyledComponents/InnerContainer";
import Title from "../Title/Title";
import gmailLogo from "Media/logo-gmail.png";
import whatsAppLogo from "Media/whatsapp-logo.png";
import linkedInLogo from "Media/linkedin-logo.png";
import configData from "Data/configs.json";
import styled from "styled-components";
import "./Contact.scss";
import Morty from "Components/Shared/Morty/Morty";

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

const ContactContainer = styled(Container)`
  max-width: 900px;
  height: auto; //overides 10vh/ todo: investigate
  margin: 0 auto;
`;

const Contact = () => {
  const contactInfo = configData.CONTACT_INFO;
  const externalUrls = configData.EXTERNAL_URLS;

  const whatsapp = `${externalUrls.WHATSAPP_API}/send?phone=${contactInfo.MOBILE}"`;
  const email = `mailto:${contactInfo.EMAIL}?subject=Hello World!`;
  const linkedIn = contactInfo.LINKEDIN;

  //Slice();
  return (
    <ContactContainer id="contact">
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
      {/* TODO: consider adding some animated charachter  */}
      <div className="links-container">
        <a
          target="blank"
          href={email}
          className="contact-url email"
          style={{ backgroundImage: `url(${gmailLogo})` }}
        ></a>
        <a
          target="blank"
          href={whatsapp}
          className="contact-url whatsapp"
          style={{ backgroundImage: `url(${whatsAppLogo})` }}
        ></a>
        <a
          target="blank"
          href={linkedIn}
          className="contact-url linkedIn"
          style={{ backgroundImage: `url(${linkedInLogo})` }}
        ></a>
      </div>
    </ContactContainer>
  );
};

export default Contact;
