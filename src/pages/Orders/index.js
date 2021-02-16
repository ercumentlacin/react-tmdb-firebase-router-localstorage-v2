import React from "react";
import Card from "../../components/Card";
import PageHeading from "../../components/PageHeading";
import { StyledOrders } from "./styles";

const Orders = () => {
  return (
    <StyledOrders>
      <PageHeading name={"Orders"} />
      <section>
        <Card />
        <Card />
        <Card />
      </section>
    </StyledOrders>
  );
};

export default Orders;
