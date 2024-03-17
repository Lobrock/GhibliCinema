import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
  id: string;
  title: string;
  original_title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;

  release_date: string;
  running_time: string;
  rt_score: string;
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://ghibliapi.vercel.app/films/${id}`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <div>Title: {movieDetails?.title}</div>
      <div>{movieDetails?.original_title}</div>
      <Image height="500px" src={movieDetails?.image} />
      <Image opacity={0.3} width="100%" src={movieDetails?.movie_banner} />
      <div>{movieDetails?.description}</div>
      <div>{movieDetails?.director}</div>
      <div>{movieDetails?.release_date}</div>
      <div>{movieDetails?.running_time}</div>
      <div>{movieDetails?.rt_score}</div>
    </div>
  );
};

export default MovieDetails;
