import { Button, LinkBox } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../hooks/useMovies";
import MovieGrid from "../Components/MovieGrid";
import Layout from "../Components/Layout";

const HomeButton = () => {
  const handleClick = () => {
    return <Layout />;
  };

  return (
    <Button onClick={handleClick} width={100} marginBottom={5}>
      Home
    </Button>
  );
};

export default HomeButton;
