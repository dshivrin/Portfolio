// import ButtonLink from "Components/Shared/ButtonLink/ButtonLink";
import Link from "Components/Shared/Link/Link";
import { TitleContainer } from "Components/Shared/StyledComponents/Container";
import { PositionProps } from "Core/types";
import "./Position.scss"

const Position = (props: PositionProps) => {
  const { workplace, styles } = props;


  return (
    <TitleContainer style={{...styles}}>
      <h1 className="position">{workplace.position} at</h1>
      {/* <ButtonLink {...workplace} /> */}
      <Link
                  cssClass="link company-link"
                  href={workplace.website}
                  text={workplace.name}
                />
    </TitleContainer>
  );
};

export default Position;
