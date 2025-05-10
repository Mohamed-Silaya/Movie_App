import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "../Pages/MovieList"; 
import MovieDetails from "../Pages/MovieDetails";
import SearchPage from "../Pages/SearchPage";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default RouteList;
