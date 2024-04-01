import { Button } from "@chakra-ui/react";

interface MyFavsProps {
  toggleDisplayLikedMovies: () => void;
}

const MyFavs = ({ toggleDisplayLikedMovies }: MyFavsProps) => {
  const toggleLikedMovies = () => {
    toggleDisplayLikedMovies();
  };
  return (
    <Button onClick={toggleLikedMovies} width={100} marginBottom={5}>
      My Favs
    </Button>
  );
};

export default MyFavs;
