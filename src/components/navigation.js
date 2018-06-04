import React from 'react'
import Link from 'gatsby-link'

const Navigation = ({}) => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio/">Portfolio</Link></li>
            <li><Link to="/contatti/">Contatti</Link></li>
        </ul>
    </nav>
)

export default Navigation