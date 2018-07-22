import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ children, cssClasses }) => {
  const customClasses = () => {
    if (cssClasses) {
      return cssClasses
    } else {
      return 'w-full px-5 pt-10 pb-10 lg:w-3/4 lg:pl-9 lg:pt-16 lg:pb-12 xl:px-0 xl:w-3/4'
    }
  }

  return (
    <div
      className={`main text-grey bg-grey-lightest font-sans text-antialiased ${customClasses()}`}
    >
      {children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  cssClasses: PropTypes.string,
}

export default Main
