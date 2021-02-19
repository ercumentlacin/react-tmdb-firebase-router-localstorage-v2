import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Icon from "../Icon";
import { OrderCardStyle } from "./styles";

const OrderCard = ({ movie }) => {
  const {
    backdrop_path,
    popularity,
    release_date,
    title,
    vote_average,
    vote_count,
  } = movie;
  return (
    <OrderCardStyle backdrop_path={backdrop_path}>
      <div className="order__card__main" to={"/product"}>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`}
          alt={title}
        />
        <div className="order__card__info">
          <h4>{title}</h4>
          <span className="order__card__price">
            price: <strong>{vote_average * 10} TL</strong>
          </span>
          <div className="d-flex order__card__icons py-4 align-items-center">
            <Icon name={"fas fa-plus mr-4"} />
            <span>1</span>
            <Icon name={"fas fa-trash-alt ml-4"} />
          </div>
        </div>
      </div>
    </OrderCardStyle>
  );
};

export default OrderCard;
