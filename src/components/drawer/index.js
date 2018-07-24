import React from 'react'
import PropTypes from 'prop-types'

import Navigation from './navigation'
import Hamburger from './hamburger'
import Footer from './footer'

import './style.css'

const Drawer = ({ navigation, footer }) => (
  <div className='drawer h-screen w-screen fixed px-5 lg:px-11 lg:py-11 lg:pl-14 bg-white font-sans'>
    <div className='drawer-toggle fixed hidden lg:inline-block'>
      <Hamburger />
    </div>
    <Navigation navigation={navigation} />
    <Footer footer={footer} />
  </div>
)

Drawer.propTypes = {
  navigation: PropTypes.object,
  footer: PropTypes.object,
}

export default Drawer
