import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contexts/StateProvider";
import Button from "../Button";
import { StyledCard } from "./styles";

const Card = ({ movie }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    alert("ürün sepete eklendi");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        backdrop_path,
        price: vote_average * 10,
      },
    });
  };

  const {
    backdrop_path,
    popularity,
    release_date,
    poster_path,
    title,
    vote_average,
    vote_count,
    id,
  } = movie;

  // for slug
  const regex = (str) => {
    return str
      .toLowerCase()
      .replace(
        /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,
        ""
      )
      .replace(" ", "-");
  };

  if (poster_path) {
    return (
      <StyledCard title={title} poster_path={poster_path}>
        <Link className="card__main" to={`/poster/${id}-${regex(title)}`}>
          <h4>{title}</h4>
          <span className="card__price">
            price: <strong>{vote_average * 10} TL</strong>
          </span>
          <span className="card__hover">{title}</span>
        </Link>
        <Button addToBasket={addToBasket} />
      </StyledCard>
    );
  }
};

export default Card;
