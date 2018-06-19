import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hamburger from 'react-hamburgers'

import { toggleDrawer as toggleDrawerAction } from '../../../store/actions'

import './style.css'
import 'hamburgers/dist/hamburgers.css'

class HamburgerButton extends Component {

  render() {
    const { drawerOpen, toggleDrawer } = this.props

    return(
      <div className="drawer__toogle">
        <Hamburger
          active={ drawerOpen }
          type="spin"
          onClick={ () => toggleDrawer( !drawerOpen ) }
        />
      </div>
    )
  }
}

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
)(HamburgerButton)
