import styled from "styled-components";

export const StyledPayment = styled.div`
  padding: 2rem;
  background-color: #121212;
  display: flex !important;
  justify-content: space-between;
  flex-direction: row !important;
  align-items: flex-start !important;
  color: #bfbfbf;
  width: 100%;

  .payment__container {
    width: 100%;

    h1 {
      text-align: center;
      font-size: 2rem;
    }
  }

  .payment__section {
    background: #212529;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 1rem;
  }

  .payment__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-row-gap: 2rem;
    place-items: center;
  }

  p {
    margin: 0;
  }
  h3 {
    border-bottom: 2px solid #bfbfbf26;
    padding-bottom: 0.4rem;
  }
`;
