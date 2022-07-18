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
