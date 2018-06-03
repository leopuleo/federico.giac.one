import React from 'react'
import Link from 'gatsby-link'

export default function SinglePortfolio({data}) {
	const post = data.markdownRemark

	return(
		<div>
			<Link to='/portfolio'>Go Back</Link>
			<h1>{post.frontmatter.title}</h1>
			<h4>{post.frontmatter.date}</h4>
			<img src={ post.frontmatter.featured_image.childImageSharp.sizes.src } alt={post.frontmatter.title} />
			<div dangerouslySetInnerHTML={{ __html: post.frontmatter.content }} />
		</div>
	)
}

export const postQuery = graphql`
	query PortfolioByPath($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html, 
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
        		title
        		content
        		featured_image {
        			childImageSharp {
        				sizes(maxWidth: 630) {
        					src
        				}
        			}
        		}
			}
		}
	}
`
