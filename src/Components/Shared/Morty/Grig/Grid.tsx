import { GridProps } from "Core/types";
import { fill } from "lodash";
import "./Grid.scss";

//todo: props
const Grid = (props: GridProps) => {
  const { size, children } = props;
  //const arr = _.fill(Array(size), null);
  //console.log(arr);
  return (
    <div className="grid-container">
      {new Array(size).map((row, index) => (
        <div key={index} className="cell"></div>
      ))}
      {children}
    </div>
  );
};

export default Grid;
