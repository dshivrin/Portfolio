import { NavItemProps } from "../../../Core/types";
import { StyledNavItem } from "../../StyledComponents/NavItem";

const NavItem = (props: NavItemProps) => {
  return (
    <StyledNavItem>
      <a href={props.href}>{props.text}</a>
    </StyledNavItem>
  );
};

export default NavItem;
