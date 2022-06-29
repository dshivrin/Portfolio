import { Matrix } from "Core/types";
import { useState } from "react";
import Cell from "./Cell";
import { v4 as uuidv4 } from 'uuid';

const skillsStyle = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  margin: "0 auto",
  marginTop: "30px",
};

//the reason for the second array is state managment.
//I will clac the next life state into the second arrays and then use it to update the canvas
const Init = () => {};

function getRandomBool(): boolean {
  return Math.random() > 0.5 ? true : false;
}

const fillRandomValues = (rows: number, columns: number) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => getRandomBool())
  );
};

const getEmptyGrid = (rows: number, columns: number) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => false)
  );
};

//counting the neighbors for each cell by the offset
const xOffset = [0, 1, 1, 1, 0, -1, -1, -1];
const yOffset = [-1, -1, 0, 1, 1, 1, 0, -1];
// const xOffset = [0, 1, 1];
// const yOffset = [-1, -1, 0];
//Summary of the values will give me the living neighbors count since alive = 1
const sumNeighbors = (board: Matrix, x: number, y: number) => {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    //8 neighbors
    const nx = x + xOffset[i];
    const ny = y + yOffset[i];
    //egde cases
    if (nx < 0 || nx > 2 || ny < 0 || ny > 2) {
      continue;
    }
    //result += board[ny][nx]; // <== this is because the first select on the array is on the Y axis aka board[nx] = a row
    try {
      result += +board[nx][ny];
    } catch (ex) {
      debugger;
    }
  }

  return result;
};

function addOne(x: number) {
  let m = 1;

  // Flip all the set bits
  // until we find a 0
  while (x & m) {
    x = x ^ m;
    m <<= 1;
  }

  // flip the rightmost 0 bit
  x = x ^ m;
  return x;
}

const sumNeighborsBin = (board: Matrix, x: number, y: number) => {
  let result = 0b0000;
  for (let i = 0; i < 3; i++) {
    //8 neighbors
    const nx = x + xOffset[i];
    const ny = y + yOffset[i];
    //egde cases
    if (nx < 0 || nx > 2 || ny < 0 || ny > 2) {
      continue;
    }
    //result += board[ny][nx]; // <== this is because the first select on the array is on the Y axis aka board[nx] = a row
    try {
      //result += board[nx][ny];
      //(result >>> 0);
      result = addOne(result);
    } catch (ex) {
      debugger;
    }
  }
  //console.log(Number(result));
  return Number(result);
};

//TODO: create type for props
//todo: improve the updateLifeCycle method
const Canvas = (props: any) => {

  const [rows, setRows] = useState(50);
  const [columns, setColumns] = useState(50);
  let grid = fillRandomValues(rows, columns);
  const [board, setBoard] = useState(grid);
  //useEffect for start the game loop

  const manualUpdate = () => {
    updateLifeCycle(grid);
  };

  const updateLifeCycle = (board: Matrix) => {
    const markStart = "mark_start";
    const mark1 = "i iteration";
    const mark2 = "i iteretion finished";
    const mark3 = "mark_finish";
   
    performance.mark(markStart);
    const width = board.length;
    const height = board[0].length;
    let newState = getEmptyGrid(width, height); //creating an empty grig that will hold the new state

    for (let i = 0; i < board.length; i++) {
      //performance.mark(mark1);
      for (let j = 0; j < board[i].length; j++) {
        const isAlive = board[i][j];
        const livingNeighbors = sumNeighbors(board, i, j);

        //console.log("livingNeighbors: ", livingNeighbors);
        //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        if (isAlive && livingNeighbors < 2) {
          newState[i][j] = false;
          continue;
        }
        //Any live cell with two or three live neighbours lives on to the next generation.
        if ((isAlive && livingNeighbors === 2) || livingNeighbors === 3) {
          continue;
        }
        //Any live cell with more than three live neighbours dies, as if by overpopulation.
        if (isAlive && livingNeighbors > 3) {
          newState[i][j] = false;
          continue;
        }
        //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        if (!isAlive && livingNeighbors === 3) {
          newState[i][j] = true;
          continue;
        }
        newState[i][j] = true; //cell survives
      }
      //performance.mark(mark2);
    }
    performance.mark(mark3);
    setBoard(newState);

    performance.measure("measure from start to end", markStart, mark3);
    //performance.measure("measure from 1 to 2", mark1, mark2);
    console.log(performance.getEntriesByType("measure"));
  };

  //todo: dynamic canvas
  //todo: use default styled container
  return (
    <div>
      <div style={skillsStyle}>
        {board.map((rows, i) => {
          return (
            <div>
              {rows.map((cell, j) => {
                return (
                  <Cell
                    key={uuidv4()}
                    size="10px"
                    isAlive={cell}
                    shape="circle"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <button type="button" onClick={manualUpdate}>
          updateLifeCycle
        </button>
      </div>
    </div>
  );
};

export default Canvas;
