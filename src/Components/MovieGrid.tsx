import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import CardSceleton from "./CardSceleton";
import useMovies from "../hooks/useMovies";
import { useLikedMovies } from "./LikedMoviesContext";

interface Props {
  displayLikedMovies: boolean;
}

const MovieGrid = ({ displayLikedMovies }: Props) => {
  const { likedMovies } = useLikedMovies();
  const { movies, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {displayLikedMovies ? (
        <div>
          <Text>My Favorite Movies</Text>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3 }}
            padding={10}
            spacing={10}
          >
            {likedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </SimpleGrid>
        </div>
      ) : (
        <div>
          {error && <Text>{error}</Text>}
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3 }}
            padding={10}
            spacing={10}
          >
            {isLoading &&
              skeletons.map((skeleton) => <CardSceleton key={skeleton} />)}
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </SimpleGrid>
        </div>
      )}
    </>
  );
};

export default MovieGrid;
