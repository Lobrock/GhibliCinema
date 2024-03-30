import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { Movie } from "../hooks/useMovies";
import { useLikedMovies } from "./LikedMoviesContext";

interface LikeButtonProps {
  movie: Movie;
}


const HeartButton = ({movie}: LikeButtonProps) => {
  const { addToLikedMovies, removeLikedMovie, likedMovies } = useLikedMovies();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (likedMovies.some(m => m.id === movie.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [movie.id, likedMovies]);

  const handleClick = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setLiked(!liked);
    if (!liked) {
      addToLikedMovies(movie);
    } else {
      removeLikedMovie(movie.id)
    }
  };
  return (
    <Button onClick={handleClick}>
      <IoIosHeart
        cursor="pointer"
        size="30"
        color={liked ? "red" : "black"}
      />
    </Button>
  );
};

export default HeartButton;
