import styled from "styled-components";

export const StyledNavItem = styled.span`
  &::before {
    font-family: "Fira Code", monospace;
    counter-increment: nav-counter;
    content: "0" counter(nav-counter) ". ";
    color: var(--light-green);
    font-size: 0.9em;
    font-weight: 200;
  }
`;
