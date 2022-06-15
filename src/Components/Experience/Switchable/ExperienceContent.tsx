import { ExperienceContentProps, Workplace } from "Core/types";
import DateRange from "./Date-range/Date-range";
import Position from "./Position/Position";

//todo: investigate why the type returns undefined sometimes
const ExperienceContent = (props: any) => {
  const workplace = props.selectedWorkplace as Workplace;
  console.log(workplace);
  return (
    <div id={workplace.name} className="content-container">
      <Position workplace={workplace} />
      <br />
      <p>{workplace.description}</p>
      <br />
      <DateRange workplace={workplace} />
    </div>
  );
};

export default ExperienceContent;
