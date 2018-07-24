import React from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'

const Link = ({ href, to, children, ...others }) => {
  if (to) {
    return (
      <GatsbyLink {...others} to={to}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a {...others} href={href}>
      {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.element.isRequired,
}

export default Link
