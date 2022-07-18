import "./Navigation.scss";
import NavItem from "./NavItem/NavItem";
import logoImg from "Media/logo_adobe_express.png";
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
import NavItemMobile from "./NavItem/NavItemMobile";

const externalUrls = configData.EXTERNAL_URLS;

const Navigation = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavItem cssclass="link" href="#about" text="About" />
            <NavItem cssclass="link" href="#experience" text="Experience" />
            <NavItem cssclass="link" href="#contact" text="Contact" />
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
          <Logo src={logoImg}></Logo>
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
