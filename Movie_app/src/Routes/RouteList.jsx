import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../Pages/MovieList'; 
import MovieDetails from '../Pages/MovieDetails';
import SearchPage from '../Pages/SearchPage';
import FavoritesPage from '../Pages/FavoritesPage';
import Watchlist from '../Pages/Watchlist';
import NotFound from '../Pages/NotFound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RouteList() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouteList;
