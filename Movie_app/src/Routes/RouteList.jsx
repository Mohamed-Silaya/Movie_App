import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieTest from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';
import FavoritesPage from '../Pages/FavoritesPage';
import Watchlist from '../Pages/Watchlist';
import NotFound from '../Pages/NotFound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TVShowList from "../Pages/TVShowList";

function RouteList() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MovieTest />} />
         <Route path="/TVShowList" element={<TVShowList />} />
        <Route path='/MovieDetails/:id' element={<MovieDetails />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouteList;
