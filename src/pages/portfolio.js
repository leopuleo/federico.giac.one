import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Title from '../components/title'
import Content from '../components/content'
import ProjectCard from '../components/cardProject'

class PortfolioArchive extends Component {
  render() {
    const { data } = this.props

    const getImageFormat = (image, i) => {
      if((i % 5 === 0 && i !== 0 && i % 10 !== 0) || ((i - 1) % 10 === 0)) {
        return image.horizontal
      } else {
        return image.vertical
      }
    }

    return (
      <div className="portfolioArchive">
        <Title title="Portfolio" />
        <Content content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed rhoncus lacus. Aenean laoreet ligula nec justo venenatis, non molestie mi sagittis. Curabitur condimentum dolor orci, vitae sagittis metus consequat nec." />
        { data.portfolio.edges.map((project, i) => {
          return (
            <ProjectCard
              key={ project.node.uid }
              link={ project.node.uid }
              title={ project.node.data.title.text }
              featuredImage={getImageFormat(project.node.data.featured_image.localFile.childImageSharp, i)}
              excerpt={ project.node.data.excerpt.html }
            />
          )
        })}
      </div>
    )
  }
}

export default PortfolioArchive

export const pageQuery = graphql`
  query IndexQuery {
    portfolio: allPrismicPortfolio(sort: { fields: [last_publication_date], order: ASC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            excerpt {
              html
            }
            category {
              document {
                uid
              }
            }
            featured_image {
              localFile {
                childImageSharp {
                  horizontal: sizes(maxWidth: 1200, maxHeight: 770, quality: 80, cropFocus: CENTER) {
                    ...GatsbyImageSharpSizes
                  }
                  vertical: sizes(maxWidth: 565, maxHeight: 770, quality: 80, cropFocus: CENTER) {
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
`;
