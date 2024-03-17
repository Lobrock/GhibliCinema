import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import MovieGrid from "./MovieGrid";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const Layout = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>

        <Router>
          <GridItem area="main" fontSize="25px" padding="0 20px">
            <Routes>
              <Route path="/" element={<MovieGrid />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </GridItem>
        </Router>
      </Grid>
    </div>
  );
};

export default Layout;
