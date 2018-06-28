import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Title from '../components/title'
import Content from '../components/content'
import TagList from '../components/tagList'
import ProjectCard from '../components/projectCard'

class PortfolioArchive extends Component {
  flatten(arr) {
    return arr.reduce(
      (a, b) => a.concat(Array.isArray(b) ? this.flatten(b) : b),
      []
    )
  }

  unique(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index)
  }

  render() {
    const {
      data: { projects },
    } = this.props

    const getCardFormat = (image, i) => {
      if ((i % 5 === 0 && i !== 0 && i % 10 !== 0) || (i - 1) % 10 === 0) {
        return {
          image: image.horizontal,
          cssClass: 'project-card portfolio-card__horizontal w-2/3 px-5 my-5',
        }
      } else {
        return {
          image: image.vertical,
          cssClass: 'project-card portfolio-card__vertical w-1/3 px-5 my-5',
        }
      }
    }

    const getTagList = list => {
      let tagList = list.map(el => el.node.tags).filter(el => el.length !== 0)
      return this.unique(this.flatten(tagList))
    }

    return (
      <div className="portfolio-archive">
        <Title title="Portfolio" />
        <Content content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed rhoncus lacus. Aenean laoreet ligula nec justo venenatis, non molestie mi sagittis. Curabitur condimentum dolor orci, vitae sagittis metus consequat nec." />

        <TagList tags={getTagList(projects.edges)} />

        <div className="portfolio-grid flex flex-wrap -mx-5">
          {projects.edges.map((project, i) => {
            const card = getCardFormat(
              project.node.data.featured_image.localFile.childImageSharp,
              i
            )

            return (
              <ProjectCard
                key={project.node.uid}
                link={project.node.uid}
                title={project.node.data.title.text}
                featuredImage={card.image}
                cssClass={card.cssClass}
                excerpt={project.node.data.excerpt.html}
                tags={project.node.tags}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default PortfolioArchive

export const pageQuery = graphql`
  query IndexQuery {
    projects: allPrismicPortfolio(
      sort: { fields: [first_publication_date], order: DESC }
    ) {
      edges {
        node {
          uid
          tags
          data {
            title {
              text
            }
            excerpt {
              html
            }
            featured_image {
              localFile {
                childImageSharp {
                  horizontal: sizes(
                    maxWidth: 1200
                    maxHeight: 770
                    quality: 80
                    cropFocus: CENTER
                  ) {
                    ...GatsbyImageSharpSizes
                  }
                  vertical: sizes(
                    maxWidth: 565
                    maxHeight: 770
                    quality: 80
                    cropFocus: CENTER
                  ) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
