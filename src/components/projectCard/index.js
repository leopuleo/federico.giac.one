import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class ProjectCard extends Component {
  render() {
    const { link, title, featuredImage, excerpt } = this.props
    return (
      <div className="projectCard">
        <Link to={ link }>
          <Img
            sizes={ featuredImage }
            fadeIn={ true }
            className="image"
            outerWrapperClassName="imageWrapper"
            alt={ title }
          />
          <h2 className="title">{ title }</h2>
          <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Link>
      </div>
    )
  }
}

export default ProjectCard
