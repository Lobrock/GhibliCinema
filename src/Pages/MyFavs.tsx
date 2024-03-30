import { Button, Card, CardBody, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLikedMovies } from "../Components/LikedMoviesContext";
import LikedMovies from "../Components/LikedMovies";



const MyFavs = () => {
  const { likedMovies } = useLikedMovies();
  const [showLikedMovies, setShowLikedMovies] = useState(false);
  const toggleLikedMovies = () => {
    
    setShowLikedMovies((prevState) => !prevState);
  };
  return (
    <div>
      <Button onClick={toggleLikedMovies} width={100} marginBottom={5}>
        My Favs
      </Button>
      {showLikedMovies && (
        <div>
          <h2>My Favorite Movies</h2>
          <ul>
            {likedMovies.map((movie) => (
              // <li key={movie.id}>
              //   <img src={movie.image} alt={movie.title} />
              //   <div>
              //     <h3>{movie.title}</h3>
              //   </div>
              // </li>
              <Card>
                <Image src={movie.image}/>
                <CardBody>{movie.title}</CardBody>
              </Card>
            ))}
          </ul>
        </div>

       
      )}
    </div>
  );
};

export default MyFavs;
