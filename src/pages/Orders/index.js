import React from "react";
import Card from "../../components/Card";
import OrderCard from "../../components/OrderCard";
import PageHeading from "../../components/PageHeading";
import SubTotal from "../../components/SubTotal";
import { StyledOrders } from "./styles";
import { Dropdown } from "react-bootstrap";
import { useStateValue } from "../../contexts/StateProvider";
import OrderProduct from "../../components/OrderProduct";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <StyledOrders>
      <PageHeading name={"Orders"} />
      <h3 className="text-muted mb-4">
        Hello, {user?.email || "it's time to sign up and shop."}
      </h3>
      <section className="order__item">
        <div className="order__item__list">
          {basket?.map((item, index) => (
            <OrderProduct
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              backdrop_path={item.backdrop_path}
            />
          ))}
        </div>
        <SubTotal />
      </section>
      <Dropdown.Divider className="my-3" />
    </StyledOrders>
  );
};

export default Orders;
