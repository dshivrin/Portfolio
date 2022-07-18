import ButtonLink from "Components/Shared/ButtonLink/ButtonLink";
import { PositionProps } from "Core/types";

const Position = (props: PositionProps) => {
  const { workplace, styles } = props;
  const basicStyles = {
    display: "flex", gap: "10px"
  };

  return (
    <div style={{...basicStyles, ...styles}}>
      <h1 className="position">{workplace.position} at</h1>
      <ButtonLink {...workplace} />
    </div>
  );
};

export default Position;
