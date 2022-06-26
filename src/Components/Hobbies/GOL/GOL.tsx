//this will contain board/canvas, and controls for different types of start shapes
import Canvas from "./Canvas";

const styles={
  backgroundColor:"#0a192f",
  height: "100vh",
};

const GameOfLife = () => {
  return (
    <div style={styles}>
      <h1>Game of life</h1>
      <Canvas />
    </div>
  );
};

export default GameOfLife;
