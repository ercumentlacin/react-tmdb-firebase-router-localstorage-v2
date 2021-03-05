import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Card from "../../components/Card";
import PageHeading from "../../components/PageHeading";
import { StyledPopular } from "./styles";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const URL = process.env.REACT_APP_TMDB_API;
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${URL}`)
      .then((response) => response.json())
      .then((result) => {
        setMovies(result.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  if (movies) {
    return (
      <StyledPopular>
        <PageHeading name={"Popular"} />
        <section>
          {movies.length > 1 &&
            movies?.map((movie) => {
              return <Card movie={movie} key={movie.id} />;
            })}
        </section>
      </StyledPopular>
    );
  } else {
    <Spinner animation="border" variant="light" />;
  }
};

export default Popular;
