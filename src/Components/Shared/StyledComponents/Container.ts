import styled from "styled-components";

//Component container
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

export const DesktopContainer = styled(Container)`
  flex-direction: row;
  height: auto;
  display: "flex";
  align-content: "center";
  justify-content: "space-evenly";
  max-width: "900px";
  gap: "15px";
  margin: "0 auto";
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileContainer = styled(Container)`
  height: auto;
  @media (min-width: 768px) {
    display: none;
  }
`;
