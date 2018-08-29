import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/main'
import Seo from '../components/seo'
import HomeSlider from '../components/homeSlider'

const IndexPage = ({ data }) => (
  <Main cssClasses='w-full h-full'>
    <Seo
      title={data.home.data.seo_title ? data.home.data.seo_title : ''}
      description={data.home.data.seo_description ? data.home.data.seo_description : ''}
    />
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
        seo_title
        seo_description
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
                  quality: 60
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpSizes_withWebp
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
