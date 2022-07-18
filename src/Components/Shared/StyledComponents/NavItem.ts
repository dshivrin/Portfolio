import styled from "styled-components";

export const StyledNavItem = styled.span`
  &::before {
    font-family: "Fira Code", monospace;
    counter-increment: nav-counter;
    content: "0" counter(nav-counter) ".";
    color: var(--light-green);
    font-size: 0.9em;
    font-weight: 200;
  }
  span {
    margin: 0 15px;
    padding: 5px 5px;
  }

  a {
    color: var(--font-color);
    margin: 0 10px;
    //padding: 5px 5px;
  }

  @media (max-width: 768px) {
    display: none;
  }

`;
