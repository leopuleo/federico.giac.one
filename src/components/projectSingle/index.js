import React from 'react'
import PropTypes from 'prop-types'

import Title from '../title'
import Content from '../content'
import Gallery from '../gallery'

const ProjectSingle = ({ data }) => (
  <div className='project-single'>
    <Title title={data.title.text} cssClasses='md:text-6xl' />
    <Content content={data.content.html} />
    <Gallery gallery={data.gallery} title={data.title} />
  </div>
)

ProjectSingle.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProjectSingle
