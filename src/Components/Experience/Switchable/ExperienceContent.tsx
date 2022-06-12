import { ExperienceContentProps } from "../../../Core/types";

//todo: investigate why the type returns undefined sometimes
const ExperienceContent = (props: any) => {
  const workplace = props.selectedWorkplace;
  return (
    <div className="content-container">
      <p id={workplace.name}>
        <span className="job-title">{workplace.position}</span>{" "}
        {workplace.description}
        <span>{workplace.dates}</span>
      </p>
    </div>
  );
};

export default ExperienceContent;
