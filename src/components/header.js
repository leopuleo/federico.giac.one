import React from 'react'
import Link from 'gatsby-link'

import Navigation from '../components/navigation'
import Hamburger from '../components/hamburger'

const Header = ({ siteTitle }) => (
  <div>
    <h1 className="font-accent-bold">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Hamburger />
    <Navigation />
  </div>
)

export default Header
