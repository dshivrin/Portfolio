import { DateRangeProps } from "Core/types";
import moment from 'moment'

const DateRange = (props: DateRangeProps) =>{
const {from, to, format} = props;

const start = moment(from).format(format);
const end = moment(to).format(format);

    return (
        <div>
            <span>{start} - {end}</span>
        </div>
    );
}

export default DateRange;