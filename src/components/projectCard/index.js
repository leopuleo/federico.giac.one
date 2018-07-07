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
    cssClass: PropTypes.string.isRequired,
    tags: PropTypes.array
  }

  render () {
    const {
      link,
      title,
      featuredImage,
      featuredImageMobile,
      excerpt,
      cssClass,
      tags,
    } = this.props

    return (
      <div className={cssClass} data-groups={JSON.stringify(tags)}>
        <Link to={link}>
          <div className='project-card-wrapper'>
            <Img
              sizes={featuredImageMobile}
              fadeIn
              className='image--mobile'
              outerWrapperClassName='image-wrapper image-wrapper--mobile block lg:hidden xl:hidden xxl:hidden'
              alt={title}
            />
            <Img
              sizes={featuredImage}
              fadeIn
              className='image--desktop'
              outerWrapperClassName='image-wrapper image-wrapper--desktop hidden lg:block xl:block xxl:block'
              alt={title}
            />
            <div className='project-card-content flex flex-col items-start justify-end p-4 md:p-6 lg:p-8'>
              <h2 className='title font-accent-bold text-white text-lowercase'>
                {title}
              </h2>
              <div
                className='excerpt text-white mt-3'
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
