import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title, cssClasses }) => (
  <header className='page-header w-full mb-6 lg:w-2/3 lg:mb-10'>
    <h1 className={`page-title text-lowercase font-accent-bold text-grey-darkest text-4xl leading-none lg:leading-tight ${cssClasses}`}>
      {title}
    </h1>
  </header>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
  cssClasses: PropTypes.string
}

export default Title
