import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import CardSceleton from "./CardSceleton";
import useMovies, { Movie } from "../hooks/useMovies";
import { useLikedMovies } from "./LikedMoviesContext";
import { useEffect, useState } from "react";

interface Props {
  displayLikedMovies: boolean;
  searchTerm: string;
  reservations: { movieTitle: string, numberOfTickets: number, selectedDate: string, selectedTime: string }[];
  showReservations: boolean;
}

const MovieGrid: React.FC<Props> = ({ displayLikedMovies, searchTerm, reservations, showReservations  }) => {
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
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={5}>
      {skeletons.map((skeleton) => (
        <CardSceleton key={skeleton} />
      ))}
    </SimpleGrid>
  ) : (
    <>
      {showReservations ? (
        <VStack spacing={4} padding={10} >
          <Text fontSize="xl" fontWeight="bold" textAlign="center" paddingInline={500}>My Reservations</Text>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={5}>
            {reservations.map((reservation) => (
              <Box bg='tomato' key={reservation.movieTitle} borderWidth="1px" borderRadius="20px" p={4}>
                
      <Text fontStyle='italic' fontWeight="bold">Movie Title: {reservation.movieTitle}</Text>
                <Text fontStyle='oblique'>Number of Tickets: {reservation.numberOfTickets}</Text>
                <Text >Date: {reservation.selectedDate}</Text>
                <Text>Time: {reservation.selectedTime}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      ) : (
        <>
          {displayLikedMovies ? (
            <VStack spacing={4} padding={10}>
              <Text fontSize="xl" fontWeight="bold" textAlign="center" paddingInline={500}>My Favorite Movies</Text>
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                gap={5}
              >
                {likedMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </SimpleGrid>
            </VStack>
          ) : (
            <VStack spacing={4} padding={10}>
              {error && <Text>{error}</Text>}
              {/* <Text fontSize="xl" fontWeight="bold" textAlign="center">All Movies</Text> */}
                <SimpleGrid
                  columns={{ sm: 1, md: 2, lg: 3 }}
                  gap={5}
                >
                  {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </SimpleGrid>
              </VStack>
          )}
        </>
      )}
    </>
  )}
</>

  );
};

export default MovieGrid;
