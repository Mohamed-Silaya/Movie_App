import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "../Pages/MovieList";
import MovieDetails from "../Pages/MovieDetails";
import SearchPage from "../Pages/SearchPage";
import FavoritesPage from "../Pages/FavoritesPage";
import NotFound from "../Pages/NotFound";
import TVShowList from "../Pages/TVShowList";
import TVShowDetails from "../Pages/TVShowDetails";
import LayoutsWithNavFooter from "../components/LayoutsWithNavFooter";

function RouteList() {
  return (
    <>
      <Routes>
        <Route element={<LayoutsWithNavFooter/>}>
          <Route path="/" element={<MovieList />} />
          <Route path="/TVShowList" element={<TVShowList />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/TVShowDetails/:id" element={<TVShowDetails />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteList;
