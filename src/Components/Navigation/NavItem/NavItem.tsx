import { NavItemProps } from "../../../Core/types";
import { StyledNavItem } from "../../Shared/StyledComponents/NavItem";

const NavItem = (props: NavItemProps) => {
  return (
    <StyledNavItem>
      <a className="link" href={props.href}>{props.text}</a>
    </StyledNavItem>
  );
};

export default NavItem;
