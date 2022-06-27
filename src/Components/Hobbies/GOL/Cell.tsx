import { useState } from "react";

const getBorderRadius = (shape: string) => {
  if(shape === "circle"){
    return "5px";
  }
  if(shape === "square"){
    return "1px";
  }
  return "1px";//default square
}


const Cell = (props: any) => {
  const [size, setWidth] = useState(props.size);
  const [bgColor, setBgColor] = useState(props.isAlive ? "#570505" : "#908f8f");
  const [cellShape, setCellShape] = useState(getBorderRadius(props.shape));

  //todo add useEffect hook and do all the style descitions in a dedicated method when "zoom" feature introduced
  const cellStyle = {
    width: size,
    height: size,
    backgroundColor: bgColor,
    margin : "1px",//calc on zoom lvl
    borderRadius: cellShape,
  };

  return <div style={cellStyle}></div>;
};

export default Cell;
