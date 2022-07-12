import { Link } from "react-router-dom";
import "./Navigation.scss";
import NavItem from "./NavItem/NavItem";
import logo from "Media/logo_adobe_express.png";

const logoStyle = {
  backgroundImage: `url(${logo})`,
};

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
      </div>
    </div>
  );
};

export default Navigation;
