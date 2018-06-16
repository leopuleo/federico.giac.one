import React from 'react'
import { connect } from 'react-redux'

import { toggleDrawer as toggleDrawerAction } from '../store/actions'

const Hamburger = ({ drawerOpen, toggleDrawer }) => (
  <div>
    <button
    	onClick={() => toggleDrawer(!drawerOpen)}
    >Toggle me!</button>
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
