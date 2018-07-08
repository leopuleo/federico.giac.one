import React from 'react'
import PropTypes from 'prop-types'

import './fontface.js'
import './style.css'

const Icon = ({ icon }) => (
  <span className={`icn-${icon}`} />
)

Icon.propTypes = {
  icon: PropTypes.string,
}

export default Icon
