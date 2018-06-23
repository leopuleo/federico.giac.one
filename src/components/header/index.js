import React from 'react'
import Link from 'gatsby-link'

import './style.css'

const Header = ({ title }) => (
  <div className="header bg-white font-sans">
    <Link to="/" className="brand text-grey-darkest bg-white text-antialiased">
      { title }
    </Link>
  </div>
)

export default Header
