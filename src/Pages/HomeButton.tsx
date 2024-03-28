import { Button, LinkBox } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../hooks/useMovies";
import MovieGrid from "../Components/MovieGrid";
import Layout from "../Components/Layout";

const HomeButton = () => {
  
  

  return (
    <Link to={"/"}>
     <Button width={100} marginBottom={5}>
      Home
    </Button>
    
    </Link>
   
  );
};

export default HomeButton;
