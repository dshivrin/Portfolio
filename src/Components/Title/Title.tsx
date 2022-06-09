//The purpose of this component is to have a CSS counter for all the section titles in the app
import "./Title.scss";

interface TitleProps {
  text: string;
  style?: object | {};
}

const Title = (props: TitleProps) => {
  return (
    <h1 className="section-title" >
      {props.text}
    </h1>
  );
};

export default Title;
