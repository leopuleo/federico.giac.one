import React from 'react'
import Link from 'gatsby-link'

import Navigation from './navigation'
import Hamburger from './hamburger'
import Footer from './footer'

import './style.css'

const Drawer = ({ siteName }) => (
  <div className="drawer h-screen font-sans">
    <Hamburger />
    <Navigation />
    <Footer />
  </div>
)

export default Drawer
