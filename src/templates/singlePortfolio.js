import React from 'react'
import Link from 'gatsby-link'

export default function SinglePortfolio({ data: { prismicPortfolio: projectNode } }) {
	const { data } = projectNode;
	return(
		<div>
			<Link to='/portfolio'>Go Back</Link>
			<h1>{data.title.text}</h1>
			<div dangerouslySetInnerHTML={{ __html: data.content.html }} />
		</div>
	)
}

export const pageQuery = graphql`
  query PortfolioBySlug($uid: String!) {
    prismicPortfolio(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`;