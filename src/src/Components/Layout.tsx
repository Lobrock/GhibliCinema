import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import MovieGrid from "./MovieGrid";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MyFavs from "../Pages/MyFavs";
import MyTickets from "../Pages/MyTickets";
import HomeButton from "../Pages/HomeButton";
import { useState } from "react";

const Layout = () => {
  const [displayLikedMovies, setDisplayLikedMovies] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDisplayLikedMovies = () => {
    setDisplayLikedMovies(true);
  };

  const toggleDisplayLikedMovies1 = () => {
    setDisplayLikedMovies(false);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  return (
    <div>
      <Router>
        <Grid
          padding={5}
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav">
            <NavBar onSearch={handleSearch}/>
          </GridItem>

          <Show above="lg">
            <GridItem bg="gray.900" width={150} area="aside" borderRadius={30}>
              <VStack padding={5} marginTop={150}>
                <HomeButton toggleDisplayLikedMovies={toggleDisplayLikedMovies1}/>
                <MyFavs toggleDisplayLikedMovies={toggleDisplayLikedMovies} />
                <MyTickets />
              </VStack>
            </GridItem>
          </Show>

          <GridItem area="main" fontSize="25px" padding="0 20px">
            <Routes>
              <Route
                path="/"
                element={<MovieGrid displayLikedMovies={displayLikedMovies} searchTerm={searchTerm} />}
              />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </GridItem>
        </Grid>
      </Router>
    </div>
  );
};

export default Layout;
