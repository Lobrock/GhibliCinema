import { Movie } from "../hooks/useMovies";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import HeartButton from "./HeartButton";
import RatingScore from "./RatingScore";


interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card width='390px' borderRadius={10} overflow="hidden" className="card">
        <Image height="350px" src={movie.image} />

        <CardBody>
          <Heading whiteSpace="nowrap" fontSize="1.3rem">
            {movie.title} ({movie.release_date})
          </Heading>
          <HStack justifyContent="space-between">
            <Heading whiteSpace='nowrap' color="gray.400" fontSize="1xl">
              {movie.original_title}
            </Heading>
            <RatingScore score={movie.rt_score} />
          </HStack>

          <HeartButton movie={movie}/>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MovieCard;
