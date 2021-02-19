import React from "react";
import { StyledSubTotal } from "./styles";
import CurrencyFormat from "react-currency-format";
import Button from "../Button";

const SubTotal = () => {
  return (
    <StyledSubTotal className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"TL"}
      />
      <Button>Proced to Checkout</Button>
    </StyledSubTotal>
  );
};

export default SubTotal;
