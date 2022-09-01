import "./Navigation.scss";
import NavItem from "./NavItem/NavItem";
import logoImg from "Media/DS_logo.png";
import configData from "Data/configs.json";
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  LeftContainer,
  RightContainer,
  NavbarLinkContainer,
  OpenLinksButton,
  Logo,
  DownloadResumeButton,
  DownloadResumeButtonExtended,
} from "../Shared/StyledComponents/Navbar.style";
import { useState } from "react";

const externalUrls = configData.EXTERNAL_URLS;

const Navigation = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavItem cssClass="link" href="#about" text="About" />
            <NavItem cssClass="link" href="#experience" text="Experience" />
            <NavItem cssClass="link" href="#contact" text="Contact" />
            <DownloadResumeButton href={externalUrls.RESUME_URL}>
              RESUME
            </DownloadResumeButton>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo onClick={scrollToTop} src={logoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <a
            className="link-mobile"
            href="#about"
            onClick={() => setExtendNavbar(false)}
          >
            About
          </a>
          <a
            className="link-mobile"
            href="#experience"
            onClick={() => setExtendNavbar(false)}
          >
            Experience
          </a>
          <a
            className="link-mobile"
            href="#contact"
            onClick={() => setExtendNavbar(false)}
          >
            Contact
          </a>
          <DownloadResumeButtonExtended href={externalUrls.RESUME_URL}>
            {" "}
            RESUME
          </DownloadResumeButtonExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navigation;
