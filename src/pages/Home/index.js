import React from "react";
import Card from "../../components/Card";
import PageHeading from "../../components/PageHeading";
import { StyledHome } from "./styles";

const Home = () => {
  return (
    <StyledHome>
      <PageHeading name={"Home"} />
      <Card />
    </StyledHome>
  );
};

export default Home;
