import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

function LayoutsWithNavFooter() {
  return (
    <div>
        <Navbar/>
            <div className="container mt-4">
                <Outlet/>
            </div>
        <Footer/>
    </div>
    
  )
}

export default LayoutsWithNavFooter