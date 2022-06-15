import { PositionProps } from "Core/types";

const Position = (props: PositionProps) => {
  const { workplace } = props;

  return (
    <h1>
      {workplace.position} at <a href={workplace.website}>{workplace.name}</a>
    </h1>
  );
};

export default Position;
