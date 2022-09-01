import { StyledAnchor } from "../StyledComponents/Anchor";
import "./Link.scss";

const Link = (props: any) => {
  const { cssClass, href, text } = props;

  return (
    <StyledAnchor className={cssClass} href={href} target="blank">
      {text}
    </StyledAnchor>
  );
};

export default Link;
