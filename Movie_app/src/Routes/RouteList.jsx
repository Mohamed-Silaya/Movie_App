import React from 'react'
import { Route, Routes } from 'react-router'
import MovieTest from '../Pages/MovieList'
import MovieDetails from '../Pages/MovieDetails'
function RouteList() {
  return (
    <Routes>
        <Route path='/' element={<MovieTest/>}/>
        <Route path='/movie-details/:id' element={<MovieDetails/>}/>
    </Routes>
  )
}

export default RouteList