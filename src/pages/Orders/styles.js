import styled from "styled-components";

export const StyledOrders = styled.section`
  background-color: #121212;
  > .order__item {
    display: flex !important;
    justify-content: space-between;
    flex-direction: row !important;
    align-items: flex-start !important;
    color: #bfbfbf;

    .dropdown-divider {
      height: 2px;
      width: 100%;
    }
  }

  > section {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    color: #bfbfbf;

    .dropdown-divider {
      height: 2px;
      width: 100%;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: #ffc107;
    display: inline-block;
    padding: 3px 0.5rem;
    margin-bottom: 2rem;
    border-radius: 3px;
    font-weight: 700;
    font-size: 12px;

    &:hover {
      background-color: #ffcf3d;
    }
  }

  .order__item__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-row-gap: 2rem;
    place-items: center;
    width: 100%;
  }
`;
