import ButtonLink from "Components/Shared/ButtonLink/ButtonLink";
import { TitleContainer } from "Components/Shared/StyledComponents/Container";
import { PositionProps } from "Core/types";

const Position = (props: PositionProps) => {
  const { workplace, styles } = props;


  return (
    <TitleContainer style={{...styles}}>
      <h1 className="position">{workplace.position} at</h1>
      <ButtonLink {...workplace} />
    </TitleContainer>
  );
};

export default Position;
