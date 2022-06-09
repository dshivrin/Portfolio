import "./Navigation.scss";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <span className="logo">
        <a href="#intro">logo</a>
      </span>
      <div className="navigation">
        <NavItem href="#about" text="About"/>
        <NavItem href="#experience" text="Experience"/>
        <NavItem href="#contact" text="Contact"/>
      </div>
    </div>
  );
};

export default Navigation;
