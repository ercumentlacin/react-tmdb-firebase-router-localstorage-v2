import styled from "styled-components";

export const StyledOrders = styled.section`
  background-color: #121212;

  > section {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;

    div {
      width: 600px !important;
      max-width: none !important;
      display: flex !important;
      flex-direction: row !important;

      &:hover {
        a {
          transform: none !important;

          &:before {
            display: none !important;
          }

          .card__price {
            display: inline-block !important;
          }

          .card__hover {
            display: none !important;
          }
        }
      }
      a {
        max-width: none !important;
        width: 600px !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: center !important;

        h4 {
          margin: 0 !important;
        }
      }
      button {
        display: none !important;
      }
    }
  }
`;
