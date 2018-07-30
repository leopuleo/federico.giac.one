import React from 'react'
import PropTypes from 'prop-types'

import Seo from '../seo'
import Title from '../title'
import Content from '../content'
import Gallery from '../gallery'
import ProjectNavigation from './navigation'

const ProjectSingle = ({ data, next, prev }) => (
  <div className='project-single'>
    <Seo title={data.title.text} description={data.content.text} />
    <Title title={data.title.text} cssClasses='md:text-6xl' />
    <Content content={data.content.html} />
    <Gallery gallery={data.gallery} title={data.title} />
    <ProjectNavigation prev={prev} next={next} />
  </div>
)

ProjectSingle.propTypes = {
  data: PropTypes.object.isRequired,
  next: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  prev: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
}

export default ProjectSingle
