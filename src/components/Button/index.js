import React from "react";
import { StyledButton } from "./styles";

const Button = ({ addToBasket, className }) => {
  if (className) {
    return (
      <div class="d-grid gap-2">
        <StyledButton className="w-100 py-2 mt-3" onClick={addToBasket}>
          Add to Basket
        </StyledButton>
      </div>
    );
  } else {
    return <StyledButton onClick={addToBasket}>Add to Basket</StyledButton>;
  }
};

export default Button;
