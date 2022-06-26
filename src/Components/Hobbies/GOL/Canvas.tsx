import { useState } from "react";
import Cell from "./Cell";

//create 2 2D arrays and initialize with 0 (dead cells)
//the reason for the second array is state managment.
//I will clac the next life state into the second arrays and then use it to update the canvas
const Init = () => {};

const updateLifeCycle = () => {};

const skillsStyle = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  margin: "0 auto",
  marginTop: "30px",
};

function getRandomBool(): number {
  return Math.random() > 0.5 ? 1 : 0;
}

const fillRandomValues = (rows: number, columns: number) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => getRandomBool())
  );
};

//TODO: create type for props
const Canvas = (props: any) => {
  const [rows, setRows] = useState(150);
  const [columns, setColumns] = useState(65);

  //useEffect for start the game loop
  let board = fillRandomValues(150, 65);
  
  //todo: dynamic canvas
  //todo: use default styled container
  return (
    <div style={skillsStyle}>
      {board.map((rows, RIndex) => {
        return (
          <div>
            {rows.map((subItems, CIndex) => {
              return (
                <Cell
                  key={(RIndex + 2) ^ CIndex}
                  size="10px"
                  isAlive={subItems}
                  shape="circle"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Canvas;
