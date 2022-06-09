//Just a quick responsive component 
import styled from "styled-components";

export const StyledInner = styled.div`
display: flex;
flex-direction: row;
gap: "25px";
@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 20px;
  gap: 30px;
  align-items: center;
}
`;