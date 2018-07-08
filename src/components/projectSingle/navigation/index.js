import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Icon from '../../icon'

const ProjectNavigation = ({ next, prev }) => (
  <div className='project-navigation'>
    {prev && (
      <div className='project-prev'>
        <Link to={prev.uid}>
          <Icon icon='arrow-slim-left' />
          <small>Progetto precedente: </small>
          {prev.data.title.text}
        </Link>
      </div>
    )}
    {next && (
      <div className='project-next'>
        <Link to={next.uid}>
          <small>Progetto successivo: </small>
          {next.data.title.text}
          <Icon icon='arrow-slim-right' />
        </Link>
      </div>
    )}
  </div>
)

ProjectNavigation.propTypes = {
  next: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  prev: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired
}

export default ProjectNavigation
