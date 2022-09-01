import Carousel from "react-bootstrap/Carousel";
import { ExperienceTabsProps } from "Core/types";
import DateRange from "Components/Shared/Date-range/Date-range";
import Position from "../Switchable/Position/Position";
import bgImage from "Media/Backgroung-Image.png";
import "./Carousel.scss";

function CarouselMobile(props: ExperienceTabsProps) {
  const workplaces = props.tabs.sort((a, b) => {
    return b.id - a.id;
  });

  const additionalStyles = {
    fontSize: "0.45em",
    alignItems: "center",
    flexDirection: "row",
  };

  return (
    <Carousel interval={null}>
      {workplaces.map((wp, index) => {
        return (
          <Carousel.Item key={`carousel-item-${index}`}>
            {/* This images is what gives the casousel height.*/}
            <img className="d-block w-100 card" src={bgImage} />
            <Carousel.Caption className={wp.name}>
              <Position workplace={wp} styles={additionalStyles} />
              <p>{wp.description}</p>
              <DateRange from={wp.from} to={wp.to} format="MMM YYYY" />
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselMobile;
