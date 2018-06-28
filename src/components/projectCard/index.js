import React, { Component } from 'react'

import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './style.css'

class ProjectCard extends Component {
  render() {
    const {
      link,
      title,
      featuredImage,
      excerpt,
      cssClass,
      filteringStatus,
      tags,
    } = this.props

    return (
      <div className={cssClass} data-groups={JSON.stringify(tags)}>
        <Link to={link}>
          <div className="project-card-wrapper">
            <Img
              sizes={featuredImage}
              fadeIn={true}
              className="image"
              outerWrapperClassName="image-wrapper"
              alt={title}
            />
            <div className="project-card-content flex flex-col items-start justify-end p-8">
              <h2 className="title font-accent-bold text-white text-lowercase">
                {title}
              </h2>
              <div
                className="excerpt text-white mt-3"
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
