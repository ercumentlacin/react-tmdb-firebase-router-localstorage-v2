import React from "react";
import { StyledSubTotal } from "./styles";
import CurrencyFormat from "react-currency-format";
import Button from "../Button";
import { useStateValue } from "../../contexts/StateProvider";
import { getBasketTotal } from "../../contexts/reducer";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <StyledSubTotal className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"TL"}
      />
      <button>Proced to Checkout</button>
    </StyledSubTotal>
  );
};

export default SubTotal;
