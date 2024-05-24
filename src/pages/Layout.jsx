import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Layout = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
