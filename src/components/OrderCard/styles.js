import styled from "styled-components";

export const OrderCardStyle = styled.div`
  width: 70%;
  padding-right: 1rem;
  .order__card__main {
    display: flex !important;
    flex-direction: row !important;

    img {
      height: 200px;
    }

    .order__card__info {
      color: #bfbfbf;
      display: flex !important;
      flex-direction: column !important;
      margin-left: 2rem;
    }
  }
`;
