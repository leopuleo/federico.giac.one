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
      {
        url: '/portfolio/',
        name: 'portfolio',
        description: 'Lorem ipsum docet',
      },
      {
        url: '/curriculum/',
        name: 'curriculum',
        description: 'Lorem ipsum docet',
      },
      { url: '/contatti/', name: 'contatti', description: 'Lorem ipsum docet' },
    ]

    return (
      <nav className="navigation lg:text-right mt-15 lg:mt-12 text-antialiased">
        <ul className="menu list-reset">
          {items.map(item => (
            <li className="menu-item block mb-4" key={item.url}>
              <Link
                className="menu-link no-underline hover:no-underline"
                to={item.url}
                onClick={() => {
                  toggleDrawer(false)
                }}
              >
                <span className="big-link block text-4xl leading-none font-accent-bold text-grey-darkest">
                  {item.name}
                </span>
                <span className="small-link text-base hidden lg:inline-block font-sans text-grey">
                  {item.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: open => dispatch(toggleDrawerAction(open)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navigation)
