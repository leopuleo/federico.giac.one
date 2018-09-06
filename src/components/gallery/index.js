import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { setPhotoswipe as setPhotoswipeAction } from '../../store/actions'

class Gallery extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    gallery: PropTypes.array.isRequired,
    title: PropTypes.object.isRequired,
    setPhotoswipe: PropTypes.func
  }

  /*
   * Setting PhotoSwipe as true in order to render the PhotoSwipe DOM
   */
  componentDidMount () {
    const { setPhotoswipe } = this.props
    setPhotoswipe(true)
  }

  /*
   * Unsetting PhotoSwipe as false in order to remove the PhotoSwipe DOM
   */
  componentWillUnmount () {
    const { setPhotoswipe } = this.props
    setPhotoswipe(false)
  }

  render () {
    const { gallery, title } = this.props

    // Immagini 1, 5, 11, 15, 21, 25 etc...
    const getCardFormat = (image, i) => {
      if ((i % 5 === 0 && i !== 0 && i % 10 !== 0) || (i - 1) % 10 === 0) {
        return {
          image: image.horizontal,
          outerWrapperClassName:
            'image-wrapper image-wrapper__horizontal w-full mb-5 sm:w-1/2 xl:w-2/3 sm:px-2 sm:my-2 lg:px-5 lg:my-5',
          className: 'image image__horizontal',
        }
      } else {
        return {
          image: image.vertical,
          outerWrapperClassName:
            'image-wrapper image-image__vertical w-full mb-5 sm:w-1/2 xl:w-1/3 sm:px-2 sm:my-2 lg:px-5 lg:my-5',
          className: 'image image__vertical',
        }
      }
    }

    return (
      <div className='gallery'>
        <div
          className='gallery-grid flex flex-wrap sm:-mx-2 lg:-mx-5'
          itemScope
          itemType='http://schema.org/ImageGallery'
        >
          {gallery.map((image, i) => {
            const card = getCardFormat(
              image.gallery_image.localFile.childImageSharp,
              i
            )
            return (
              <figure
                itemProp='associatedMedia'
                itemScope
                itemType='http://schema.org/ImageObject'
                className={card.outerWrapperClassName}
                key={`image-${i}`}
              >
                <a
                  href={
                    image.gallery_image.localFile.childImageSharp.original.src
                  }
                  data-size={`${
                    image.gallery_image.localFile.childImageSharp.original.width
                  }x${
                    image.gallery_image.localFile.childImageSharp.original
                      .height
                  }`}
                  className='rounded overflow-hidden block md:rounded-lg'
                >
                  <Img
                    sizes={image.gallery_image.localFile.childImageSharp.square}
                    fadeIn
                    className={card.className}
                    outerWrapperClassName='image-wrapper image-wrapper--mobile block xl:hidden xxl:hidden'
                    alt={`${title.text} - ${i}`}
                  />
                  <Img
                    sizes={card.image}
                    fadeIn
                    className={card.className}
                    outerWrapperClassName='image-wrapper image-wrapper--desktop hidden xl:block xxl:block'
                    alt={`${title.text} - ${i}`}
                  />
                </a>
              </figure>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPhotoswipe: value => dispatch(setPhotoswipeAction(value)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Gallery)
