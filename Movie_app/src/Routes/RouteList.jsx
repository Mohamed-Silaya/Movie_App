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
}

export default RouteList


