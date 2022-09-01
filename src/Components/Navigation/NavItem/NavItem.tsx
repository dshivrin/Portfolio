import { NavItemProps } from "../../../Core/types";
import { StyledNavItem } from "../../Shared/StyledComponents/NavItem";

const NavItem = (props: NavItemProps) => {

const {cssClass, href, text} = props;

  return (
    <StyledNavItem>
      <a className={cssClass} href={href}>{text}</a>
    </StyledNavItem>
  );
};

export default NavItem;
