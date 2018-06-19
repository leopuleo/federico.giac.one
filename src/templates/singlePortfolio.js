import React from 'react'

import SingleProject from '../components/singleProject'

export default function SinglePortfolio({ data: { prismicPortfolio: projectNode } }) {
	const { data } = projectNode

	return(
		<SingleProject data={ data } />
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
        gallery {
          gallery_image {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200, maxHeight: 900, quality: 80,) {
                  src
                  srcSet,
                  sizes,
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  }
`;
