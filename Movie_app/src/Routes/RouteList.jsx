import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieTest from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';
import FavoritesPage from '../Pages/FavoritesPage';
import Footer from '../components/Footer';

function RouteList() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MovieTest />} />
        <Route path='/MovieDetails/:id' element={<MovieDetails />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouteList;
