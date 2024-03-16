import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";
import MovieGrid from "./MovieGrid";

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

        <GridItem area="main" fontSize="25px" padding="0 20px">
          <h1>Home Page</h1>
          <MovieGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Layout;
