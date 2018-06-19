import React from 'react'
import Link from 'gatsby-link'

import Navigation from './navigation'
import Hamburger from './hamburger'
import Footer from './footer'

import './style.css'

const Drawer = ({ siteTitle }) => (
  <div className="drawer">
    <h1 className="brand">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Hamburger />
    <Navigation />
    <Footer />
  </div>
)

export default Drawer
