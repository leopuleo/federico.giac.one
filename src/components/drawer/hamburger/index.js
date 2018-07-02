import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hamburger from 'react-hamburgers'

import { toggleDrawer as toggleDrawerAction } from '../../../store/actions'

import 'hamburgers/dist/hamburgers.css'
import './style.css'

class HamburgerButton extends Component {
  render() {
    const { drawerOpen, toggleDrawer } = this.props

    return (
      <div className="hamburger-outer rounded-full bg-white d-block">
        <Hamburger
          active={drawerOpen}
          type="stand"
          onClick={() => toggleDrawer(!drawerOpen)}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ drawerOpen }) => {
  return {
    drawerOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: open => dispatch(toggleDrawerAction(open)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerButton)
