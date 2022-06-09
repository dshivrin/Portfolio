import { SkillsListProps } from "../../Core/Interfaces";
import { StyledList } from "../StyledComponents/List";

const SkillsList = (props: SkillsListProps) => {
  return (
    <StyledList>
      {props.skills.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </StyledList>
  );
};

export default SkillsList;
