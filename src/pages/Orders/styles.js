import styled from "styled-components";

export const StyledOrders = styled.section`
  background-color: #121212;
  > .order__item {
    display: flex !important;
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
`;
