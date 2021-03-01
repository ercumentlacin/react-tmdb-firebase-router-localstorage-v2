import React from "react";
import { StyledButton } from "./styles";

const Button = ({ addToBasket }) => {
  return <StyledButton onClick={addToBasket}>Add to Basket</StyledButton>;
};

export default Button;
