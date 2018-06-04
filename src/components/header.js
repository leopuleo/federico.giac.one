import React from 'react'
import Link from 'gatsby-link'

import Navigation from '../components/navigation'

const Header = ({ siteTitle }) => (
  <div>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Navigation />
  </div>
)

export default Header
