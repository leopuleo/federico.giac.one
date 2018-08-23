import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    height: PropTypes.string
  }

  defaultProps = {
    height: '100vh'
  };

  constructor (props) {
    super(props)
    this.state = { height: props.height }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentWillMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  // Update window height
  updateWindowDimensions () {
    this.setState({
      height: window.innerHeight
    })
  }

  render () {
    const { navigation, footer } = this.props

    return (
      <div style={{ height: this.state.height }} className='drawer w-screen fixed px-5 lg:px-11 lg:py-11 lg:pl-14 bg-white font-sans'>
        <div className='drawer-toggle fixed hidden lg:inline-block'>
          <Hamburger />
        </div>
        <Navigation navigation={navigation} />
        <Footer footer={footer} />
      </div>
    )
  }
}

export default Drawer
