import { Button } from "@chakra-ui/react";
import { Link, } from "react-router-dom";

interface HomeButtonProps {
  toggleDisplayLikedMovies: (display: boolean) => void;
}


const HomeButton: React.FC<HomeButtonProps> = ({ toggleDisplayLikedMovies }) => {

  const handleClick = () => {
    toggleDisplayLikedMovies(false);
  };

  return (
    <Link to={"/"}>
      <Button width={100} marginBottom={5} onClick={handleClick}>
        Home
      </Button>
    </Link>
  );
};

export default HomeButton;
