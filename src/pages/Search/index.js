import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import PageHeading from "../../components/PageHeading";
import { StyledHome } from "./styles";

const Search = () => {
  let { search } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const URL = process.env.REACT_APP_TMDB_API;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${URL}&language=en-US&page=1&include_adult=false&query=${search}`
    )
      .then((response) => response.json())
      .then((result) => {
        setMovies(result.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [movies]);

  return (
    <StyledHome>
      <PageHeading name={`${search} search results`} />
      <section>
        {movies.length > 1 &&
          movies?.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
      </section>
    </StyledHome>
  );
};

export default Search;
