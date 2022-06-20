import { Link } from "react-router-dom";
import "./Navigation.scss";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <span className="logo">
        {/* <a href="#intro">logo</a> */}
        <Link to="/main">Logo</Link>
      </span>
      {/* TODO: make those of Link type and pass the needed div ID in the url */}
      <div className="navigation">
        <NavItem href="#about" text="About"/>
        <NavItem href="#experience" text="Experience"/>
        <NavItem href="#contact" text="Contact"/>
      </div>
    </div>
  );
};

export default Navigation;
