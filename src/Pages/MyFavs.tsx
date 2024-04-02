import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface MyFavsProps {
  toggleDisplayLikedMovies: () => void;
}

const MyFavs = ({ toggleDisplayLikedMovies }: MyFavsProps) => {
  const toggleLikedMovies = () => {
    toggleDisplayLikedMovies();
  };
  return (
    <Link to={"/"}>
      <Button onClick={toggleLikedMovies} width={100} marginBottom={5}>
        My Favs
      </Button>
    </Link>
  );
};

export default MyFavs;
