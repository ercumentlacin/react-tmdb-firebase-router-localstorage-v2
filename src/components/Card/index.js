import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { StyledCard } from "./styles";

const Card = ({ movie }) => {
  if (!movie) {
    const backdrop_path = "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg";
    const title = "test";
    const vote_average = 10;
    return (
      <StyledCard title={title} backdrop_path={backdrop_path}>
        <Link className="card__main" to={"/product"}>
          <h4>{title}</h4>
          <span className="card__price">
            price: <strong>{vote_average * 10} TL</strong>
          </span>
          <span className="card__hover">{title}</span>
        </Link>
        <Button />
      </StyledCard>
    );
  }
  const {
    backdrop_path,
    popularity,
    release_date,
    title,
    vote_average,
    vote_count,
  } = movie;
  return (
    <StyledCard title={title} backdrop_path={backdrop_path}>
      <Link className="card__main" to={"/product"}>
        <h4>{title}</h4>
        <span className="card__price">
          price: <strong>{vote_average * 10} TL</strong>
        </span>
        <span className="card__hover">{title}</span>
      </Link>
      <Button />
    </StyledCard>
  );
};

export default Card;
