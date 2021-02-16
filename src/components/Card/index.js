import React from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "./styles";

const Card = () => {
  return (
    <StyledCard>
      <Link to={"/product"}>
        <h4>Product Name</h4>
        <span>price</span>
      </Link>
    </StyledCard>
  );
};

export default Card;
