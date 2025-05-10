import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "../Pages/MovieList";
import MovieDetails from "../Pages/MovieDetails";
import SearchPage from "../Pages/SearchPage";
import FavoritesPage from "../Pages/FavoritesPage";
import NotFound from "../Pages/NotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TVShowList from "../Pages/TVShowList";
import TVShowDetails from "../Pages/TVShowDetails";

function RouteList() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/TVShowList" element={<TVShowList />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/TVShowDetails/:id" element={<TVShowDetails />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouteList;
