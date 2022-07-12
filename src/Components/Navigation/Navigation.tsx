import { Link } from "react-router-dom";
import "./Navigation.scss";
import NavItem from "./NavItem/NavItem";
import logo from "Media/logo_adobe_express.png";
import configData from "Data/configs.json";

const externalUrls = configData.EXTERNAL_URLS;

const Navigation = () => {
  return (
    <div className="nav-bar">
      <a
        //href="main"
        className="logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></a>
      {/* TODO: make those of Link type and pass the needed div ID in the url */}
      <div className="navigation">
        <NavItem href="#about" text="About" />
        <NavItem href="#experience" text="Experience" />
        <NavItem href="#contact" text="Contact" />
        <a className="download" href={externalUrls.RESUME_URL}>RESUME</a>
      </div>
    </div>
  );
};

export default Navigation;
