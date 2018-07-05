import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Title = ({ title }) => (
  <header className='page-header w-2/3 mb-10'>
    <h1 className='page-title text-lowercase font-accent-bold text-grey-darkest text-6xl'>
      {title}
    </h1>
  </header>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
