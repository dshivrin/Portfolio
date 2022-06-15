import { ExperienceProps } from "Core/types";

//todo: change to actual dates 
const DateRange = (props: ExperienceProps) =>{
const {workplace} = props;

    return (
        <div>
            <span>{workplace.dates}</span>
        </div>
    );
}

export default DateRange;