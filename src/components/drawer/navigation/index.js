import React from 'react'
import Link from 'gatsby-link'

const Navigation = ({}) => (
  <nav>
    <ul>
      <li>
      	<Link to="/">
      		<span className="big-link">home</span>
      		<span className="small-link">Casa dolce casa</span>
      	</Link>
      </li>
      <li>
      	<Link to="/portfolio/">
      		<span className="big-link">portfolio</span>
      		<span className="small-link">Lorem ipsum docet</span>
      	</Link>
      </li>
    	<li>
    		<Link to="/curriculum/">
    			<span className="big-link">curriculum</span>
      		<span className="small-link">Lorem ipsum docet</span>
    		</Link>
    	</li>
      <li>
    		<Link to="/contatti/">
    			<span className="big-link">contatti</span>
      		<span className="small-link">Lorem ipsum docet</span>
    		</Link>
    	</li>
    </ul>
  </nav>
)

export default Navigation