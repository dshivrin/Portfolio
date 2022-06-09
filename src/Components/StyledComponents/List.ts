import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  //instead of ::before psuedo element there is now a marker alement
  li::marker {
    content: "🠚";
    color: var(--light-green);
    unicode-bidi: isolate;
    //padding:10px <== padding and margin has no effect on marker
  }
`;
