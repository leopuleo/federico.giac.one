import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'

import { toggleDrawer as toggleDrawerAction } from '../../store/actions'

import Hamburger from '../drawer/hamburger'

import './style.css'

class Header extends Component {
  render() {
    const { title, toggleDrawer } = this.props

    return (
      <div className="header relative px-5 lg:fixed bg-white">
        <Link
          className="brand inline-block lg:fixed text-grey-darkest font-sans uppercase bg-white text-antialiased no-underline hover:no-underline"
          to="/"
          onClick={() => {
            toggleDrawer(false)
          }}
        >
          {title}
        </Link>
        <div className="header-toggle absolute inline-block lg:hidden">
          <Hamburger />
        </div>
      </div>
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
)(Header)
