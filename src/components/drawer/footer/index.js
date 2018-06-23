import React from 'react'
import Link from 'gatsby-link'

import './style.css'

const Footer = ({}) => (
  <div className="footer text-right text-grey">
    <div className="footer-presentation text-antialiased">
    	<p><strong className="text-grey-darkest">Mi chiamo Federico Giacone</strong></p>
    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum nisi, dictum sit amet venenatis et.</p>
    </div>
    <div className="footer-info">
      <p>email: <a href="mailto:federico@giac.one">federico@giac.one</a> – telefono: <a href="tel:+393295356947">+39 329 53 56 947</a></p>
      <p>partita iva: IT0123456789 – <Link to="/cookie-policy/">Cookie policy</Link></p>
    </div>
  </div>
)

export default Footer
