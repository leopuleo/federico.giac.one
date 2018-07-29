import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/main'
import Title from '../components/title'
import Content from '../components/content'
import Img from 'gatsby-image'
import Experiences from '../components/experiences'

const About = ({ data, pathContext }) => {
  const { prismicAbout: about } = data
  return (
    <Main>
      <div className='about-content'>
        <Title title={about.data.title.text} cssClasses='lg:text-7xl' />
        {about.data.body &&
          about.data.body.map((slice) => {
            switch (slice.slice_type) {
              case 'testo':
                return <Content key={slice.prismicId} content={slice.primary.content.html} />
              case 'immagine':
                return (
                  <Img
                    key={slice.prismicId}
                    sizes={slice.primary.image.localFile.childImageSharp.sizes}
                    fadeIn
                    className='image'
                    outerWrapperClassName='image-wrapper xl:w-2/3'
                    alt={slice.primary.image.alt}
                  />
                )
              case 'esperienze':
                return (
                  <Experiences
                    key={slice.prismicId}
                    title={slice.primary.title_experience}
                    items={slice.items}
                  />
                )
            }
          })
        }
      </div>
    </Main>
  )
}

About.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object,
}
export default About

export const aboutQuery = graphql`
query AboutQuery {
  prismicAbout {
    data {
      title {
        text
      }
      body {
        __typename
        ... on PrismicAboutBodyTesto {
          slice_type
          prismicId
          primary  {
            content {
              html
            }
          }
        }
        ... on PrismicAboutBodyImmagine {
          slice_type
          prismicId
          primary {
            image {
              alt
              localFile {
                childImageSharp {
                  sizes(
                    maxWidth: 1200
                    quality: 70
                  ) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
        ... on PrismicAboutBodyEsperienze {
          slice_type
          prismicId
          primary {
            title_experience 
          }
          items {
            position_experience
            content_experience {
              html
            }
          }
        }
      }
    }
  }
}
`
