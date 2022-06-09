import { NavItemProps } from "../../../Core/Interfaces";
import "./NavItem.scss";

const NavItem = (props: NavItemProps) => {
  return (
    <span className="nav-item">
      <a href={props.href}>{props.text}</a>
    </span>
  );
};

export default NavItem;
