import styled from "styled-components";

export const StyledPoster = styled.div`
  background-color: #121212;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: white;
  transition: all 250ms ease-in-out;

  .poster {
    display: flex;
    align-items: center;
  }

  img {
    cursor: pointer;
  }

  a,
  .breadcrumb-item span {
    color: #ffcb2f;
  }

  .breadcrumb {
    background: #212529;

    .breadcrumb-item span {
      cursor: pointer;

      &:hover {
        color: #ffe852;
      }
    }
  }
  .modal-content {
    background: black;
  }
`;
