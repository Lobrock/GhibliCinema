import { Button, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
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

  const duration = movieDetails?.running_time;

  const convert = (duration: any) => {
    const hours = Math.floor(duration / 60);
    const remainingMinutes = duration % 60;

    return `${hours}h: ${remainingMinutes}m: 00s`;
  };

  return (
    <div>
      <Grid
        bg={movieDetails?.movie_banner}
        templateAreas={{
          lg: ` "aside main" "footer footer" `,
        }}
      >
        {/* <GridItem area='nav'>
        <Image opacity={0.3} width="100%" height='50%' src={movieDetails?.movie_banner} />
        </GridItem > */}
        <GridItem area="aside">
          <Image height="500px" src={movieDetails?.image} />
        </GridItem>
        <VStack>
          <GridItem area="main">
            <Text fontSize="2xl">
              Title: {movieDetails?.title} ({movieDetails?.release_date})
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
            <Text>Release date: {movieDetails?.release_date}</Text>
          </GridItem>
          <GridItem area="main">
            <Text>Rating: {movieDetails?.rt_score} </Text>
          </GridItem>
          <GridItem area="main">
            <Text>Duration: {convert(duration)}</Text>
          </GridItem>
        </VStack>
        <GridItem area="footer" p={50}>
          <Button mr={50} bg="aquamarine">
            Watch Now
          </Button>
          <Button mr={50} bg="aquamarine" width="110px">
            Buy
          </Button>
          <Button bg="aquamarine" width="110px">
            Rezerve
          </Button>
        </GridItem>

      
      </Grid>
    </div>
  );
};

export default MovieDetails;
