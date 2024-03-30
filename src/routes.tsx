import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/HomeButton";
import MyTickets from "./Pages/MyTickets";
import MyFavs from "./Pages/MyFavs";
import MovieGrid from "./Components/MovieGrid";
import LikedMovies from "./Components/LikedMovies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieGrid />,
  },
  {
    path: "/mytickets",
    element: <MyTickets />,
  },
  {
    path: "/myfavs",
    element: <MyFavs />,
  },
]);
