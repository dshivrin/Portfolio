import Title from "../Shared/Title/Title";
import { Container } from "../Shared/StyledComponents/Container";
import styled from "styled-components";
import { useState } from "react";
import data from "../../Data/data.json";
import ExperienceContent from "./Switchable/ExperienceContent";
import { Workplace } from "../../Core/types";
import Tabs from "./Switchable/Tabs/Tabs";
import { StyledInner } from "../Shared/StyledComponents/InnerContainer";
import Carousel from "./Carousel/Carousel";
import "./Experience.scss";

const StyledInnerColumn = styled(StyledInner)`
  flex-direction: column;
  margin: 0 auto;
`;

const StyledInnerRow = styled(StyledInner)`
  flex-direction: row;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
    margin-bottom: 15%;
    @media (max-width: 768px) {
      height: 100vh;
      width: auto;
      gap: 40px;
    }
  `;

  //to match the gap between the flex items
  const titleStyle = {
    marginBottom: "15px",
  };

  let width = globalThis.screen.availWidth;

  const renderMobile = () => {
    return (
      <StyledInnerColumn>
        <Carousel tabs={workplaces} OnClick={OnTitleClick} />
      </StyledInnerColumn>
    );
  };

  const renderDesktop = () => {
    return (
        <StyledInnerRow>
          <Tabs tabs={workplaces} OnClick={OnTitleClick} />
          <ExperienceContent selectedWorkplace={selectedWorkPlace} />
        </StyledInnerRow>
    );
  };

  return (
    <ExperienceContainer id="experience">
      <Title style={titleStyle} text="Work experience" />
      {width > 768 ? renderDesktop() : renderMobile()}
    </ExperienceContainer>
  );
};

export default Experience;
