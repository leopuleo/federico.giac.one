import React from 'react'
import PropTypes from 'prop-types'

import './fontface.js'
import './style.css'

const Icon = ({ icon, cssClasses }) => (
  <span className={`icn-${icon} ${cssClasses}`} />
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  cssClasses: PropTypes.string
}

export default Icon
