import React from 'react'
import { connect } from 'react-redux'

import { toggleDrawer as toggleDrawerAction } from '../../store/actions'

import './style.css'

const Hamburger = ({ drawerOpen, toggleDrawer }) => (
  <div className="drawer__toogle">
    <button 
      type="button" 
      className="drawer-toogle__button"
      onClick={() => toggleDrawer(!drawerOpen)}
    >
      <span className="sr-only">Toggle navigation</span>
      <span className="drawer-toogle__-bar"></span>
      <span className="drawer-toogle__-bar"></span>
      <span className="drawer-toogle__-bar"></span>
    </button>
  </div>
)

const mapStateToProps = ( { drawerOpen } ) => {
  return {
    drawerOpen
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return { 
  	toggleDrawer: open => dispatch(toggleDrawerAction(open))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hamburger)
