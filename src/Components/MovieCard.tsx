import { Movie } from "./MovieGrid";
import { Card, CardBody, Heading, Icon, Image } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
   
    <Card borderRadius={10} overflow="hidden">
      <Image height="350px" src={movie.image} />

      <CardBody>
        <Heading fontSize="2xl">
          {movie.title} ({movie.release_date})
        </Heading>
        <Heading color="gray.400" fontSize="1xl">
          {movie.original_title}
        </Heading>
        <AiOutlineHeart cursor="pointer" size="30" />
      </CardBody>
    </Card>
  
    
  );
};

export default MovieCard;
