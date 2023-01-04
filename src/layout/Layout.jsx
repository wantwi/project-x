import React from 'react'
import {Outlet } from "react-router-dom"
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Main>
          {
            <Outlet/>
          }
        </Main>
        
        <Footer/>
    </div>
  )
}

export default Layout