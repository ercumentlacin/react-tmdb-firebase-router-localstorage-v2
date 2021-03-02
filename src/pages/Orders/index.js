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
  // const movie = {
  //   adult: false,
  //   backdrop_path: "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
  //   genre_ids: [10749, 35],
  //   id: 761053,
  //   original_language: "en",
  //   original_title: "Gabriel's Inferno Part III",
  //   overview:
  //     "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
  //   popularity: 32.599,
  //   poster_path: "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
  //   release_date: "2020-11-19",
  //   title: "Gabriel's Inferno Part III",
  //   video: false,
  //   vote_average: 8.9,
  //   vote_count: 702,
  // };

  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <StyledOrders>
      <PageHeading name={"Orders"} />
      <section className="order__item">
        <div className="d-flex flex-column">
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