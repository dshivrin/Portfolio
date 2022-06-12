//The purpose of this component is to have a CSS counter for all the section titles in the app
//All counters are initialized in App.scss under body tag
import { TitleProps } from "../../Core/types";
import "./Title.scss";

const Title = (props: TitleProps) => {
  return (
    <h1 className="section-title" >
      {props.text}
    </h1>
  );
};

export default Title;
