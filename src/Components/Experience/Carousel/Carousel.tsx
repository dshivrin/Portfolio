import { ExperienceTabsProps } from "Core/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Position from "../Switchable/Position/Position";
import DateRange from "../Switchable/Date-range/Date-range";
import ExperienceContent from "../Switchable/ExperienceContent";

const Carousel = (props: ExperienceTabsProps) => {
  const workplaces = props.tabs.sort((a, b) => {
    return b.id - a.id;
  });

  const settings = {
    dots: true,
  };

  const additionalStyles = {
    fontSize: "0.45em",
    alignItems: "center"
  }

  return (
    <div className="mobile-widget">
      <Slider {...settings}>
        {workplaces.map((wp, index) => {
          return (
            <div key={`content:${index}`}>
              <Position workplace={wp} styles={additionalStyles}/>
              <DateRange from={wp.from} to={wp.to} format="MMM YYYY" />
              <p>{wp.description}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
