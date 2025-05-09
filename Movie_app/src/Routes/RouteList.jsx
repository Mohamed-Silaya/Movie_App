import React from 'react'
import { Route, Routes } from 'react-router'
import MovieTest from '../Pages/MovieList'
import MovieDetails from '../Pages/MovieDetails'
<<<<<<< HEAD
import NotFound from '../Pages/NotFound'
import Navbar from '../components/Navbar'
import Watchlist from '../Pages/Watchlist'


function RouteList() {
  return (
    <>
      <Navbar/>
    <Routes>
        <Route path='/'                 element={<MovieTest/>}/>
        <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>
        <Route path='/watchlist'        element={<Watchlist/>}/>
        <Route path='*'                element={<NotFound/>}/>
    </Routes>
=======
import Footer from '../components/Footer'
function RouteList() {
  return (
    
    <>
      <Routes>
          <Route path='/'                  element={<MovieTest/>}/>
          <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>
      </Routes>
      <Footer/>
>>>>>>> 63308a109ea0cee0e0da46273b29dcebea8522d4
    </>
  )
}

export default RouteList


