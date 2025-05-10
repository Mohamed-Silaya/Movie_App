import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieTest from "../Pages/MovieList";
import MovieDetails from "../Pages/MovieDetails";
import FavoritesPage from "../Pages/FavoritesPage";
import NotFound from "../Pages/NotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TVShows from "../Pages/TVShows";
function RouteList() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieTest />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="/FavoritesPage" element={<FavoritesPage />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouteList;
