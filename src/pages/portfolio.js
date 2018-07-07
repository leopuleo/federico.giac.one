import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Shuffle from 'shufflejs'

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

  flatten (arr) {
    return arr.reduce(
      (a, b) => a.concat(Array.isArray(b) ? this.flatten(b) : b),
      []
    )
  }

  unique (arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index)
  }

  render () {
    const {
      data: { projects },
    } = this.props

    const getCardFormat = (image, i) => {
      if ((i % 5 === 0 && i !== 0 && i % 10 !== 0) || (i - 1) % 10 === 0) {
        return {
          image: image.horizontal,
          cssClass:
            'project-card portfolio-card__horizontal w-full mb-5 sm:w-1/2 xl:w-2/3 sm:px-2 sm:mb-4 lg:px-5 xl:my-5',
        }
      } else {
        return {
          image: image.vertical,
          cssClass:
            'project-card portfolio-card__vertical w-full mb-5 sm:w-1/2 xl:w-1/3 sm:px-2 sm:mb-4 lg:px-5 xl:my-5',
        }
      }
    }

    const getTagList = list => {
      let tagList = list.map(el => el.node.tags).filter(el => el.length !== 0)
      return this.unique(this.flatten(tagList))
    }

    return (
      <div className='portfolio-archive'>
        <Title title='Portfolio' cssClasses='md:text-6xl lg:text-7xl' />
        <Content content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed rhoncus lacus. Aenean laoreet ligula nec justo venenatis.' />

        <TagList tags={getTagList(projects.edges)} />

        <div
          ref={element => (this.element = element)}
          className='portfolio-grid flex flex-wrap sm:-mx-2 lg:-mx-5'
        >
          {projects.edges.map((project, i) => {
            const card = getCardFormat(
              project.node.data.featured_image.localFile.childImageSharp,
              i
            )

            return (
              <ProjectCard
                key={project.node.uid}
                link={project.node.uid}
                title={project.node.data.title.text}
                featuredImage={card.image}
                featuredImageMobile={
                  project.node.data.featured_image.localFile.childImageSharp
                    .square
                }
                cssClass={card.cssClass}
                excerpt={project.node.data.excerpt.html}
                tags={project.node.tags}
              />
            )
          })}
        </div>
      </div>
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
    projects: allPrismicPortfolio(
      sort: { fields: [first_publication_date], order: DESC }
    ) {
      edges {
        node {
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
                }
              }
            }
          }
        }
      }
    }
  }
`
