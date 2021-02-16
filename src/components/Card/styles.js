import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 175px;
  align-items: center;
  .card__main {
    background-color: grey;
    width: 175px;
    height: 140px;
    border-radius: 3px;
    padding: 8px;
  }

  a {
    display: flex;
    flex-direction: column;

    &:hover {
      color: white;
    }

    h4 {
      margin-top: auto;
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
`;
