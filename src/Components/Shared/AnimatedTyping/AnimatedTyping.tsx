import { type } from "Utils/typical";
import { AnimatedTextProps } from "Core/types";
import React from "react";
import "./AnimatedTyping.scss";

//get at array of text, if one element: type just that, if several then loop
const AnimatedText = (props: AnimatedTextProps) => {
  const {
    element,
    text,
    typeDelay,
    eraseDelay,
    nextWordDelay,
    CSSclass,
    elStyle,
    iterations,
  } = props;

  const El = React.createElement(element, {
    className: CSSclass,
    style: elStyle,
    textContent: ""
  });

  type(El, "Hello", 1000, "Hello world!");

  return El;
};

export default AnimatedText;
