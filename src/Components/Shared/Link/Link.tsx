import { StyledAnchor } from "../StyledComponents/Anchor";

const Link = (props: any) => {
  const { cssclass, href, text } = props;

  return (
    <StyledAnchor className={cssclass} href={href} target="blank">
      {text}
    </StyledAnchor>
  );
};

export default Link;
