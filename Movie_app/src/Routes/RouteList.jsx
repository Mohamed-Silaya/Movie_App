import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Fixed import
import MovieTest from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';
import FavoritesPage from '../Pages/FavoritesPage';

function RouteList() {
  return (
    <Routes>
      <Route path='/' element={<MovieTest />} />
      <Route path='/MovieDetails/:id' element={<MovieDetails />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>
  );
}

export default RouteList;