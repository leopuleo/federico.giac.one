import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/main'
import HomeSlider from '../components/homeSlider'

const IndexPage = ({ data }) => (
  <Main cssClasses='w-full h-full'>
    <HomeSlider slides={data.home.data.slider} />
  </Main>
)

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    home: prismicHome {
      data {
        slider {
          slider_title
          slider_excerpt
          slider_link {
            url
            raw {
              link_type
            }
          }
          slider_image {
            localFile {
              childImageSharp {
                horizontal: sizes(
                  maxWidth: 1800
                  maxHeight: 1000
                  quality: 90
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpSizes
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`
