import React from 'react'
import { Route, Routes } from 'react-router'
import MovieTest from '../Pages/MovieList'
import MovieDetails from '../Pages/MovieDetails'
import NotFound from '../Pages/NotFound'
function RouteList() {
  return (
    <Routes>
        <Route path='/'                 element={<MovieTest/>}/>
        <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>
        <Route path='*'                element={<NotFound/>}/>
    </Routes>
  )
}

export default RouteList


