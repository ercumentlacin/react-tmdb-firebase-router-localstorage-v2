import styled from "styled-components";

export const StyledPopular = styled.section`
  background-color: #121212;

  > section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-row-gap: 2rem;
    place-items: center;
  }
`;
