import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/main'
import ProjectSingle from '../components/projectSingle'

const SinglePortfolio = ({ data, pathContext }) => {
  const { prismicPortfolio: project } = data
  return (
    <Main>
      <ProjectSingle
        data={project.data}
        next={pathContext.next}
        prev={pathContext.prev}
      />
    </Main>
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object,
}
export default SinglePortfolio

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
