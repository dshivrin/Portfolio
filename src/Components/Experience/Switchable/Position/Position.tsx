import ButtonLink from "Components/Shared/ButtonLink/ButtonLink";
import { PositionProps } from "Core/types";

const Position = (props: PositionProps) => {
  const { workplace } = props;
  return (
    <div style={{display: "flex", gap: "10px"}}>
      <h1 className="position">{workplace.position} at</h1>
      <ButtonLink {...workplace} />
    </div>
  );
};

export default Position;
