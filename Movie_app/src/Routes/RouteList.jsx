<<<<<<< HEAD
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
=======
import React from 'react'
import { Route, Routes } from 'react-router'
import MovieTest from '../Pages/MovieList'
import MovieDetails from '../Pages/MovieDetails'
import Footer from '../components/Footer'
function RouteList() {
  return (
    
    <>
      <Routes>
          <Route path='/'                  element={<MovieTest/>}/>
          <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>
      </Routes>
      <Footer/>
    </>
  )
>>>>>>> 14e8dcd233763015412a3ee917b3c79bb4d7c959
}

export default RouteList;