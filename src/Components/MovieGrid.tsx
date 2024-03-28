import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import CardSceleton from "./CardSceleton";
import useMovies, { Movie } from "../hooks/useMovies";



const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={10} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => <CardSceleton key={skeleton} />)}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
