import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'

import { toggleDrawer as toggleDrawerAction } from '../../../store/actions'

import './style.css'

class Navigation extends Component {

  render() {
    const { toggleDrawer } = this.props

    const items = [
      { url: '/', name: 'home', description: 'Casa dolce casa' },
      { url: '/portfolio/', name: 'portfolio', description: 'Lorem ipsum docet' },
      { url: '/curriculum/', name: 'curriculum', description: 'Lorem ipsum docet' },
      { url: '/contatti/', name: 'contatti', description: 'Lorem ipsum docet' }
    ];

    return(
      <nav className="navigation text-right text-antialiased">
        <ul className="menu">

        {items.map( (item) => (
          <li className="menu-item">
            <Link
              className="menu-link"
              key={item.url}
              to={ item.url }
              onClick={() => {
                toggleDrawer(false);
              }}
            >
              <span className="big-link font-accent-bold text-grey-darkest">{ item.name }</span>
              <span className="small-link font-sans text-grey">{ item.description }</span>
            </Link>
          </li>
        ))}
        </ul>
      </nav>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    toggleDrawer: open => dispatch(toggleDrawerAction(open))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navigation)
