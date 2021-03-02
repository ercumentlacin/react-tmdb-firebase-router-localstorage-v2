import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import PageHeading from "../../components/PageHeading";
import { StyledHome } from "./styles";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const URL = process.env.REACT_APP_TMDB_API;
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${URL}`)
      .then((response) => response.json())
      .then((result) => {
        setMovies(result.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <StyledHome>
      <PageHeading name={"Home"} />
      <section>
        {movies.length > 1 &&
          movies?.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
      </section>
    </StyledHome>
  );
};

export default Home;
