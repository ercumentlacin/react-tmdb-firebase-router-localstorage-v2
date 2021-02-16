import styled from "styled-components";

export const StyledOrders = styled.span`
  list-style: none;
  display: flex;
  padding-left: 30px;

  &:hover {
    background-color: #212529;
    transition: all 250ms ease;
  }

  a {
    display: block;
    width: 100%;
    padding: 1rem 0;
  }

  .order__icon {
    position: relative;

    &__count {
      position: absolute;
      background: white;
      top: -1ch;
      left: 1ch;
      zoom: 1;
      width: 20px;
      height: 20px;
      display: block;
      padding-bottom: 1px;
      line-height: 15px;
      text-align: center;
      border-radius: 10px;
      color: black;
      font-weight: 700;
      border: 2px solid #121212;
      font-size: 12px;
    }
  }
`;
