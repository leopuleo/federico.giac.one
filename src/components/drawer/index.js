import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setWindowHeight as setWindowHeightAction } from '../../store/actions'

import Navigation from './navigation'
import Hamburger from './hamburger'
import Footer from './footer'

import './style.css'

class Drawer extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    navigation: PropTypes.object,
    footer: PropTypes.object,
    setWindowHeight: PropTypes.func,
    windowHeight: PropTypes.string
  }

  // Set window height + add event listener
  componentDidMount () {
    this.handleWindowSizeChange() // Set height
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  // Handle window height value
  handleWindowSizeChange = () => {
    const { setWindowHeight } = this.props
    setWindowHeight(window.innerHeight)
  }

  render () {
    const { navigation, footer, windowHeight } = this.props

    return (
      <div style={{ height: windowHeight }} className='drawer w-screen fixed px-5 lg:px-11 lg:py-11 lg:pl-14 bg-white font-sans'>
        <div className='drawer-toggle fixed hidden lg:inline-block'>
          <Hamburger />
        </div>
        <Navigation navigation={navigation} />
        <Footer footer={footer} />
      </div>
    )
  }
}

const mapStateToProps = ({ windowHeight }) => {
  return {
    windowHeight,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setWindowHeight: open => dispatch(setWindowHeightAction(open)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer)
