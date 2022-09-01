import { ExperienceContentProps, Workplace } from "Core/types";
import DateRange from "../../Shared/Date-range/Date-range";
import Position from "./Position/Position";

//todo: investigate why the type returns undefined sometimes
const ExperienceContent = (props: any) => {
  const workplace = props.selectedWorkplace as Workplace;
  return (
    <div id={workplace.name} className="content-container">
      <Position workplace={workplace} />
      <br />
      <p>{workplace.description}</p>
      <br />
      <DateRange from={workplace.from} to={workplace.to} format="MMM YYYY" cssClass="date-range" />
    </div>
  );
};

export default ExperienceContent;
