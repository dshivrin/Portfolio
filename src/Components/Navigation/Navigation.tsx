import "./Navigation.scss";
import NavItem from "./NavItem/NavItem";
import logo from "Media/logo_adobe_express.png";
import configData from "Data/configs.json";

const externalUrls = configData.EXTERNAL_URLS;

const Navigation = () => {
  return (
    <div className="nav-bar">
      <div className="navigation">
        <NavItem href="#about" text="About" />
        <NavItem href="#experience" text="Experience" />
        <NavItem href="#contact" text="Contact" />
        <a className="download" href={externalUrls.RESUME_URL}>
          RESUME
        </a>
      </div>
      <a
        //href="main"
        className="logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></a>
    </div>
  );
};

export default Navigation;
