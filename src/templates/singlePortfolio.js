import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/main'
import Seo from '../components/seo'
import ContactButton from '../components/contactButton'
import Title from '../components/title'
import Content from '../components/content'
import Gallery from '../components/gallery'
import ProjectNavigation from '../components/projectNavigation'

const SinglePortfolio = ({ data, pathContext }) => {
  const { prismicPortfolio: project } = data
  return (
    <Main>
      <div className='project-single'>
        <Seo
          title={project.data.seo_title ? project.data.seo_title : project.data.title.text}
          description={project.data.seo_description ? project.data.seo_description : project.data.content.text}
          image={project.data.featured_image.localFile.childImageSharp.resize}
        />
        <ContactButton />
        <Title title={project.data.title.text} cssClasses='md:text-6xl' />
        <Content content={project.data.content.html} />
        <Gallery gallery={project.data.gallery} title={project.data.title} />
        <ProjectNavigation prev={pathContext.prev} next={pathContext.next} />
      </div>
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
          text
        }
        seo_title
        seo_description
        featured_image {
          localFile {
            childImageSharp {
              resize(
                width: 1200
                height: 630
                quality: 70
                cropFocus: CENTER
                jpegProgressive: true
              ) {
                width
                height
                src
              }
            }
          }
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
                  ...GatsbyImageSharpSizes_withWebp
                }
                vertical: sizes(
                  maxWidth: 565
                  maxHeight: 770
                  quality: 70
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpSizes_withWebp
                }
                square: sizes(
                  maxWidth: 420
                  maxHeight: 420
                  quality: 30
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpSizes_withWebp
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
