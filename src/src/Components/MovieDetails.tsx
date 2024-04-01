import {
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../hooks/useMovies";

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

  const duration = movieDetails?.running_time;

  const convert = (duration: any) => {
    const hours = Math.floor(duration / 60);
    const remainingMinutes = duration % 60;

    return `${hours}h: ${remainingMinutes}m: 00s`;
  };

  return (
    <div>
      <Grid
        padding={5}
        bg={movieDetails?.movie_banner}
        templateAreas={{
          lg: ` "aside main" "footer footer" `,
        }}
      >
        <GridItem marginRight={5} area="aside">
          <Image height="500px" src={movieDetails?.image} />
        </GridItem>
        <VStack>
          <GridItem area="main">
            <Text fontSize="2xl">
              {movieDetails?.title} ({movieDetails?.release_date})
            </Text>
          </GridItem>
          <GridItem area="main">
            <Text>{movieDetails?.description}</Text>
          </GridItem>
          <GridItem area="main">
            <Text>Original title: {movieDetails?.original_title}</Text>
          </GridItem>
          <GridItem area="main">
            <Text>Director: {movieDetails?.director}</Text>
          </GridItem>

          <GridItem area="main">
            <Text>Rating: {movieDetails?.rt_score} </Text>
          </GridItem>

          <GridItem area="main">
            <Text>Duration: {convert(duration)}</Text>
          </GridItem>
          <GridItem area="main">
            <Text>Price: 700 Leke</Text>
          </GridItem>
        </VStack>

        <GridItem area="footer" p={50}>
          <HStack justifyContent="space-between">
            <Button bg="tomato">Watch Trailer</Button>
            <Button bg="tomato" width="110px">
              Buy
            </Button>
            <Button bg="tomato" width="110px">
              Rezerve
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MovieDetails;
