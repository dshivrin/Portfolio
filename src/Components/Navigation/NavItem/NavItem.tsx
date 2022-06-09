import { NavItemProps } from "../../../Core/Interfaces";
import { StyledNavItem } from "../../StyledComponents/NavItem";

const NavItem = (props: NavItemProps) => {
  return (
    <StyledNavItem>
      <a href={props.href}>{props.text}</a>
    </StyledNavItem>
  );
};

export default NavItem;
