import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { StyledCard } from "./styles";

const Card = () => {
  return (
    <StyledCard>
      <Link className="card__main" to={"/product"}>
        <h4>Product Name</h4>
        <span>price</span>
      </Link>
      <Button />
    </StyledCard>
  );
};

export default Card;
