import React from "react";
import { StyledOrders } from "./styles";
import { Link } from "react-router-dom";

const Orders = ({ url, name, icon, orderCount }) => {
  return (
    <StyledOrders>
      <Link to={`${url}`}>
        <span className="order">
          <span className="order__icon">
            {icon ? <i className={`${icon} mr-3`}></i> : null}
            <span className="order__icon__count">{orderCount}</span>
          </span>
        </span>
        <span>{name}</span>
      </Link>
    </StyledOrders>
  );
};

export default Orders;
