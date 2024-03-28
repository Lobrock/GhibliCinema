import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import MovieGrid from "./MovieGrid";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MyFavs from "../Pages/MyFavs";
import MyTickets from "../Pages/MyTickets";
import HomeButton from "../Pages/HomeButton";
import { useState } from "react";
import { Movie } from "../hooks/useMovies";

const Layout = () => {
  const [selectHome, setSelectHome] = useState<Movie | null>(null);
  return (
    <div>
      <Router>
        <Grid padding={5}
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>

          <Show above="lg">
            <GridItem bg="gray.900" width={150} area="aside" borderRadius={30}>
              <VStack padding={5} marginTop={150}>
                <HomeButton />
                <MyFavs />
                <MyTickets />
              </VStack>
            </GridItem>
          </Show>

          <GridItem area="main" fontSize="25px" padding="0 20px">
            <Routes>
              <Route path="/" element={<MovieGrid />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </GridItem>
        </Grid>
      </Router>
    </div>
  );
};

export default Layout;
