import React from 'react'
import { Route, Routes } from 'react-router'
import MovieTest from '../Pages/MovieList'
import MovieDetails from '../Pages/MovieDetails'
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
    </>
  )
}

export default RouteList


