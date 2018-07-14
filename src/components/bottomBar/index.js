import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const BottomBar = ({ children }) => (
  <div
    className='bottom-bar fixed w-screen bg-white overflow-x-scroll md:relative md:w-full md:bg-transparent md:mb-6 md:overflow-x-auto'
  >
    { children }
  </div>
)

BottomBar.propTypes = {
  children: PropTypes.element.isRequired
}

export default BottomBar
