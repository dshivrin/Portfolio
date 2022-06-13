import Title from "../Title/Title";
import { Container } from "./../StyledComponents/Container";
import styled from "styled-components";

import { useState, useEffect } from "react";
//TODO: build a dedicated hook to fetch data from json file
import data from "../../Data/data.json";
import ExperienceContent from "./Switchable/ExperienceContent";
import { Workplace } from "../../Core/types";
import Tabs from "./Switchable/Tabs/Tabs";

const ExperienceContainer = styled(Container)`
  max-width: 900px;
  text-align: left;
  margin: 0 auto;
`;

const innerStyles = {
  display: "flex",
  alignContent: "center",
  justifyContent: "space-evenly",
  maxWidth: "900px",
  gap: "25px",
  margin: "0 auto",
};

const Experience = () => {
  const initialData = data.workPlaces as Array<Workplace>;

  const selectedWP = initialData.find((w) => w.selected);
  const [workplaces, setWorkplaces] = useState(initialData);
  const [selectedWorkPlace, setSelectedWorkPlace] = useState(selectedWP);

  //use memo?
  //For some reason VS code claims 'event' es depricated, so I use 'any'
  const OnTitleClick = (event: any): void => {
    const selectedSectionId = event.target.id;
    const selectedWP = workplaces.find((w) => w.id == selectedSectionId);
    if (!selectedWP) {
      console.log("something went terribly wrong: ", selectedSectionId);
      return;
    }
    const newState = workplaces.map((wp) => {
      if (wp.id != +selectedSectionId) wp.selected = false;
      else wp.selected = true;
      return wp;
    });

    setSelectedWorkPlace(selectedWP);
    setWorkplaces(newState);
    console.log("newState");
    console.table(newState);
  };

  return (
    <ExperienceContainer id="experience">
      <Title text="Work experience" />
      <div style={innerStyles}>
        <Tabs tabs={workplaces} OnClick={OnTitleClick} />
        <ExperienceContent selectedWorkplace={selectedWorkPlace} />
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
