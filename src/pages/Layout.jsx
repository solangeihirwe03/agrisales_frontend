import React from 'react'
import Header from "./Header.jsx"
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
