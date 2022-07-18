import Title from "../Title/Title";
import {
  Container,
  DesktopContainer,
  MobileContainer,
} from "../Shared/StyledComponents/Container";
import styled from "styled-components";
import { useState } from "react";
import data from "../../Data/data.json";
import ExperienceContent from "./Switchable/ExperienceContent";
import { Workplace } from "../../Core/types";
import Tabs from "./Switchable/Tabs/Tabs";
import Carousel from "./Carousel/Carousel";
import { StyledInner } from "../Shared/StyledComponents/InnerContainer";

const StyledInnerColumn = styled(StyledInner)`
  flex-direction: column;
  margin: 0 auto;
`;

//todo: mobile version
const Experience = () => {
  const initialData = data.workPlaces as Array<Workplace>;

  const selectedWP = initialData.find((w) => w.selected);
  const [workplaces, setWorkplaces] = useState(initialData);
  const [selectedWorkPlace, setSelectedWorkPlace] = useState(selectedWP);

  //use memo?
  //For some reason VS code claims 'event' es depricated, so I use 'any'
  const OnTitleClick = (event: any): void => {
    const selectedSectionId = event.target.id;
    const selectedWP = workplaces.find((w) => w.id === +selectedSectionId);

    //Todo: add global error page
    if (!selectedWP) return;

    const newState = workplaces.map((wp) => {
      if (wp.id !== +selectedSectionId) wp.selected = false;
      else wp.selected = true;
      return wp;
    });

    setSelectedWorkPlace(selectedWP);
    setWorkplaces(newState);
  };

  const ExperienceContainer = styled(Container)`
    max-width: 900px;
    text-align: left;
    margin: 0 auto;
    flex-direction: column;
  `;

  const innerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-evenly",
    maxWidth: "900px",
    gap: "15px",
    margin: "0 auto",
  };

  //to match the gap between the flex items
  const titleStyle = {
    marginBottom: "15px",
  };

  return (
    <ExperienceContainer id="experience">
      <StyledInnerColumn>
        <Title style={titleStyle} text="Work experience" />
        <DesktopContainer style={innerStyles}>
          <Tabs tabs={workplaces} OnClick={OnTitleClick} />
          <ExperienceContent selectedWorkplace={selectedWorkPlace} />
        </DesktopContainer>
        <MobileContainer>
          <Carousel OnClick={() => console.log("hey")} tabs={workplaces} />
        </MobileContainer>
      </StyledInnerColumn>
    </ExperienceContainer>
  );
};

export default Experience;
