import React from 'react'

import ProjectSingle from '../components/projectSingle'

export default function SinglePortfolio({
  data: { prismicPortfolio: projectNode },
  postBodyComponents,
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
                  quality: 70
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpSizes
                }
                vertical: sizes(
                  maxWidth: 565
                  maxHeight: 770
                  quality: 70
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpSizes
                }
                square: sizes(
                  maxWidth: 420
                  maxHeight: 420
                  quality: 30
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpSizes
                }
                original: resize(
                  width: 1800
                  jpegProgressive: true
                  quality: 80
                ) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`
