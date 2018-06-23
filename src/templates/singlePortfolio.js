import React from 'react'

import ProjectSingle from '../components/projectSingle'

export default function SinglePortfolio({
  data: { prismicPortfolio: projectNode },
}) {
  const { data } = projectNode

  return <ProjectSingle data={data} />
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
`
