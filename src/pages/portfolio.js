import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Shuffle from 'shufflejs'

import { flatten, unique } from '../utils'

import Main from '../components/main'
import Seo from '../components/seo'
import ContactButton from '../components/contactButton'
import Title from '../components/title'
import Content from '../components/content'
import TagList from '../components/tagList'
import ProjectCard from '../components/projectCard'

class PortfolioArchive extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    activeTag: PropTypes.string,
    data: PropTypes.object,
  }

  componentDidMount () {
    // The elements are in the DOM, initialize a shuffle instance.
    this.shuffle = new Shuffle(this.element, {
      itemSelector: '.project-card',
      sizer: this.sizer,
    })
  }

  componentDidUpdate (prevProps) {
    const { activeTag } = this.props

    // Notify shuffle to dump the elements it's currently holding and consider
    // all elements matching the `itemSelector` as new.
    if (!activeTag) {
      this.shuffle.resetItems()
    }

    if (activeTag !== prevProps.activeTag) {
      if (activeTag === '') {
        this.shuffle.filter()
      } else {
        this.shuffle.filter(activeTag)
      }
    }
  }

  componentWillUnmount () {
    // Dispose of shuffle when it will be removed from the DOM.
    this.shuffle.destroy()
    this.shuffle = null
  }

  render () {
    const {
      data: { projects, page },
    } = this.props

    const getTagList = list => {
      let tagList = list.map(el => el.node.tags).filter(el => el.length !== 0)
      return unique(flatten(tagList))
    }

    return (
      <Main>
        <Seo
          title={page.data.seo_title ? page.data.seo_title : page.data.title.text}
          description={page.data.seo_description ? page.data.seo_description : page.data.title.text}
        />
        <ContactButton />
        <div className='portfolio-archive'>
          <Title
            title={page.data.title.text}
            cssClasses='md:text-6xl lg:text-7xl'
          />
          <Content content={page.data.content.html} />

          <TagList tags={getTagList(projects.edges)} />

          <div
            ref={element => (this.element = element)}
            className='portfolio-grid flex flex-wrap sm:-mx-2 lg:-mx-5'
          >
            {projects.edges.map((project, i) => {
              return (
                <ProjectCard
                  key={project.node.uid}
                  link={project.node.fields.slug}
                  title={project.node.data.title.text}
                  featuredImage={
                    project.node.data.featured_image.localFile.childImageSharp
                      .vertical
                  }
                  featuredImageMobile={
                    project.node.data.featured_image.localFile.childImageSharp
                      .square
                  }
                  excerpt={project.node.data.excerpt.html}
                  tags={project.node.tags}
                />
              )
            })}
          </div>
        </div>
      </Main>
    )
  }
}

const mapStateToProps = ({ activeTag }) => {
  return {
    activeTag,
  }
}

export default connect(
  mapStateToProps,
  null
)(PortfolioArchive)

export const pageQuery = graphql`
  query IndexQuery {
    page: prismicPortfolioArchive {
      data {
        title {
          text
        }
        content {
          html
        }
        seo_title
        seo_description
      }
    }
    projects: allPrismicPortfolio(
      sort: { fields: [data___order], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          uid
          tags
          data {
            title {
              text
            }
            excerpt {
              html
            }
            featured_image {
              localFile {
                childImageSharp {
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
                }
              }
            }
          }
        }
      }
    }
  }
`
