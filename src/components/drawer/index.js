import React from 'react'

import Navigation from './navigation'
import Hamburger from './hamburger'
import Footer from './footer'

import './style.css'

const Drawer = () => (
  <div className='drawer h-screen w-screen fixed px-5 lg:px-11 lg:py-11 lg:pl-14 bg-white font-sans'>
    <div className='drawer-toggle fixed hidden lg:inline-block'>
      <Hamburger />
    </div>
    <Navigation />
    <Footer />
  </div>
)

export default Drawer
