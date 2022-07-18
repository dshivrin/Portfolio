import { NavItemProps } from "../../../Core/types";
import { StyledNavItem } from "../../Shared/StyledComponents/NavItem";

const NavItemMobile = (props: NavItemProps) => {

const {cssclass, href, text} = props;

  return (
    <StyledNavItem>
      <a className={cssclass} href={href}>{text}</a>
    </StyledNavItem>
  );
};

export default NavItemMobile;