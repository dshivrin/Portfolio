import { Container } from "../Shared/StyledComponents/Container";
import { StyledInner } from "../Shared/StyledComponents/InnerContainer";
import Title from "../Shared/Title/Title";
import gmailLogo from "Media/logo-gmail.png";
import whatsAppLogo from "Media/whatsapp-logo.png";
import linkedInLogo from "Media/linkedin-logo.png";
import configData from "Data/configs.json";
import styled from "styled-components";
import "./Contact.scss";

const ContactContainer = styled(Container)`
  max-width: 900px;
  //height: 80vh; //overides 100vh/ todo: investigate
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100vh;
    width: auto;
    gap: 40px;
  }
`;

const ContactInner = styled(StyledInner)`
  margin: unset;
`;

const contactInfo = configData.CONTACT_INFO;
const externalUrls = configData.EXTERNAL_URLS;

const Contact = () => {
  const whatsapp = `${externalUrls.WHATSAPP_API}/send?phone=${contactInfo.MOBILE}"`;
  const email = `mailto:${contactInfo.EMAIL}?subject=Hello World!`;
  const linkedIn = contactInfo.LINKEDIN;

  //Slice();
  return (
    <ContactContainer id="contact">
      <Title text="So Now What?" />
      <h3>Say Hello</h3>
      <br />
      <ContactInner>
        <p>
          I'm currently looking for my next challenge! If you have an
          interesting suggestion for me, say hi!
        </p>
        <br />
        <br />
      </ContactInner>
      {/* TODO: consider adding some animated charachter  */}
      <div className="links-container">
        <a
          target="blank"
          href={email}
          className="contact-url"
          style={{ backgroundImage: `url(${gmailLogo})` }}
        >
          Gmail
        </a>
        <a
          target="blank"
          href={whatsapp}
          className="contact-url"
          style={{ backgroundImage: `url(${whatsAppLogo})` }}
        >
          WatsApp
        </a>
        <a
          target="blank"
          href={linkedIn}
          className="contact-url"
          style={{ backgroundImage: `url(${linkedInLogo})` }}
        >
          LinkedIn
        </a>
      </div>
    </ContactContainer>
  );
};

export default Contact;
