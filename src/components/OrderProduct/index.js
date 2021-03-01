import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import { StyledOrderProduct } from "./styles";

const OrderProduct = ({ id, backdrop_path, title, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <StyledOrderProduct>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`}
        alt={title}
      />
      <div className="orderProduct__info">
        <p className="orderProduct__title">{title}</p>
        <p className="orderProduct__price">
          <strong>{price}</strong>
          <small>TL</small>
        </p>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </StyledOrderProduct>
  );
};

export default OrderProduct;
