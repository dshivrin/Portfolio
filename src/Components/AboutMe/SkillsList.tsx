import { SkillsListProps } from "../../Core/types";
import { StyledList } from "../Shared/StyledComponents/List";

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
