import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './style.css'

class ProjectCard extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    featuredImage: PropTypes.object.isRequired,
    featuredImageMobile: PropTypes.object.isRequired,
    excerpt: PropTypes.string,
    tags: PropTypes.array,
  }

  render () {
    const {
      link,
      title,
      featuredImage,
      featuredImageMobile,
      excerpt,
      tags,
    } = this.props

    return (
      <div className='project-card portfolio-card__vertical w-full mb-5 sm:w-1/2 xl:w-1/3 sm:px-2 sm:my-2 lg:px-5 lg:my-5' data-groups={JSON.stringify(tags)}>
        <Link to={link}>
          <div className='project-card-wrapper rounded overflow-hidden block md:rounded-lg'>
            <Img
              sizes={featuredImageMobile}
              fadeIn
              className='image--mobile'
              outerWrapperClassName='image-wrapper image-wrapper--mobile block xl:hidden xxl:hidden'
              alt={title}
            />
            <Img
              sizes={featuredImage}
              fadeIn
              className='image--desktop'
              outerWrapperClassName='image-wrapper image-wrapper--desktop hidden xl:block xxl:block'
              alt={title}
            />
            <div className='project-card-content flex flex-col items-start justify-end p-6 md:p-6 lg:p-8'>
              <h2 className='title font-accent-bold text-white text-lowercase'>
                {title}
              </h2>
              <div
                className='excerpt text-white text-base md:text-lg leading-tight mt-3 mb-0'
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default ProjectCard
