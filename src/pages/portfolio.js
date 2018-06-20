import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Title from '../components/title'
import Content from '../components/content'

const PortfolioArchive = ({ data }) => (
  <div>
    <Title title="Portfolio" />
    <Content content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed rhoncus lacus. Aenean laoreet ligula nec justo venenatis, non molestie mi sagittis. Curabitur condimentum dolor orci, vitae sagittis metus consequat nec." />
    {data.portfolio.edges.map(post => (
      <div key={ post.node.id }>
        <Link to={ post.node.uid }>
          <h3>{ post.node.data.title.text }</h3>
          <Img
            sizes={ post.node.data.featured_image.localFile.childImageSharp.horizontal }
            fadeIn={ true }
            className="image image-horizontal"
            outerWrapperClassName="imageWrapper imageWrapper-horizontal"
            alt={ post.node.data.title.text }
          />
        </Link>
      </div>
    ))}

  </div>
)

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
