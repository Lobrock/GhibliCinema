import { useState, useEffect } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import CardSkeleton from "./CardSceleton";
import useMovies, { Movie } from "../hooks/useMovies";
import { useLikedMovies } from "./LikedMoviesContext";

interface Props {
  displayLikedMovies: boolean;
  searchTerm: string;
}

const MovieGrid: React.FC<Props> = ({ displayLikedMovies, searchTerm }) => {
  const { likedMovies } = useLikedMovies();
  const { movies, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    setLoading(true);

    if (searchTerm) {
      timer = setTimeout(() => {
        const filtered = movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
        setLoading(false);
      }, 500);
    } else {
      setFilteredMovies(movies);
      setLoading(false);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchTerm, movies]);

  return (
    <>
      {isLoading || loading ? (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          padding={10}
          spacing={10}
        >
          {skeletons.map((skeleton) => (
            <CardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      ) : (
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
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </SimpleGrid>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MovieGrid;
