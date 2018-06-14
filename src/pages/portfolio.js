import React from 'react'
import Link from 'gatsby-link'

const PortfolioArchive = ({ data }) => (
  <div>
    <h1>Portfolio</h1>
    {data.portfolio.edges.map(post => (
      <div key={ post.node.id }>
        <Link to={ post.node.uid }>
          <h3>{ post.node.data.title.text }</h3>
          <img src={ post.node.data.featured_image.localFile.childImageSharp.sizes.src } alt={ post.node.data.title.text } />
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
            featured_image {
              localFile {
                childImageSharp {
                  sizes(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 70
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    src
                  }
                }
              }
            }
            title {
              text
            }
            excerpt {
              text
            }
          }
        }
      }
    }
  }
`;