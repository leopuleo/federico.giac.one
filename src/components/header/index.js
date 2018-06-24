import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'

import { toggleDrawer as toggleDrawerAction } from '../../store/actions'

import './style.css'

class Header extends Component {
  render() {
    const { title, toggleDrawer } = this.props

    return (
      <div className="header bg-white font-sans">
        <Link
          className="brand text-grey-darkest bg-white text-antialiased"
          to="/"
          onClick={() => {
            toggleDrawer(false)
          }}
        >
          {title}
        </Link>
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
