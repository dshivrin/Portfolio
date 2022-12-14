import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
 
  li {
    text-align: left;
    @media (min-width: 768px) {
      padding-left: 5px; //<== because the marker pseudo element refused to move
    }
  }

  li::marker {
    content: "🠚";
    color: var(--light-green);
    unicode-bidi: isolate;
  }
`;
