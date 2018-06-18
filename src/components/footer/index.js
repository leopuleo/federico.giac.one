import React from 'react'
import Link from 'gatsby-link'

const Footer = ({}) => (
  <div className="footer">
    <div className="footer__presentation">
    	<p><strong>Mi chiamo Federico Giacone</strong></p>
    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum nisi, dictum sit amet venenatis et.</p>
    </div>
    <div className="footer__info">
    	<p><strong>email:</strong> <a href="mailto:federico@giac.one">federico@giac.one</a> – <strong>telefono:</strong> <a href="tel:+393295356947">+39 329 53 56 947</a></p>
			<p><strong>partita iva:</strong> IT0123456789 – <Link to="/cookie-policy/">Cookie policy</Link></p>
    </div>
  </div>
)

export default Footer
