import React from "react";
import moment from "moment";
import OrderProduct from "../OrderProduct";
import { StyledOrderss } from "./styles";
import CurrencyFormat from "react-currency-format";

const Orderss = ({ order }) => {
  return (
    <StyledOrderss>
      <h2>Order</h2>
      <p>{moment.unix(order?.data?.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      <div className="onOrders">
        {order?.data?.basket?.map((item, index) => (
          <OrderProduct
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            backdrop_path={item.backdrop_path}
          />
        ))}
      </div>
      <CurrencyFormat
        renderText={(value) => <h3>Order Total: {value || 0} TL</h3>}
        decimalScale={2}
        value={order?.data?.amount / 100}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={""}
      />
    </StyledOrderss>
  );
};

export default Orderss;
