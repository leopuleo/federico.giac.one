import React from 'react'
import Link from 'gatsby-link'

const PortfolioArchive = ({ data }) => (
  <div>
    <h1>Portfolio</h1>
    {data.allMarkdownRemark.edges.map(post => (
    	<div key={ post.node.id }>
    		<Link to={ post.node.fields.slug }>
    			<h3>{ post.node.frontmatter.title }</h3>
    			<img src={ post.node.frontmatter.featured_image } alt={ post.node.frontmatter.title } />
    		</Link>
    	</div>
    ))}
  </div>
)

export const pageQuery = graphql`
	query PortfolioIndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "singlePortfolio" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            featured_image
          }
        }
      }
    }
  }
`

export default PortfolioArchive
