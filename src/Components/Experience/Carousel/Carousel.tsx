import Carousel from "react-bootstrap/Carousel";
import { ExperienceTabsProps } from "Core/types";
import DateRange from "Components/Shared/Date-range/Date-range";
import Position from "../Switchable/Position/Position";

import bgImage from 'Media/calm-dark-blue-sea-background-picjumbo-com.jpg';

function CarouselMobile(props: ExperienceTabsProps) {
  const workplaces = props.tabs.sort((a, b) => {
    return b.id - a.id;
  });

  const additionalStyles = {
    fontSize: "0.45em",
    alignItems: "center",
  };

  return (
    <Carousel interval={null}>
      {workplaces.map((wp, index) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={bgImage}/>
            <Carousel.Caption>
              <Position workplace={wp} styles={additionalStyles} />
              <DateRange from={wp.from} to={wp.to} format="MMM YYYY" />
              <p>{wp.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselMobile;
