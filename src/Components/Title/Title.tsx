//The purpose of this component is to have a CSS counter for all the section titles in the app
//All counters are initialized in App.scss under body tag
import { TitleProps } from "Core/types";
import "./Title.scss";

const Title = (props: TitleProps) => {
  const { text, style } = props;

  return (
    <h1 style={style} className="section-title">
      {text}
    </h1>
  );
};

export default Title;
