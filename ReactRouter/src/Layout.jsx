import React from 'react'
import Headers from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    <Headers/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Layout
