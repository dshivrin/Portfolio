import styled from "styled-components";

//Basic container
export const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    h1 {
      font-size: 1.5em;
    }
  }
`;
