import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

class Gallery extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    gallery: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    const { gallery, title } = this.props

    // Immagini 1, 5, 11, 15, 21, 25 etc...
    const getCardFormat = (image, i) => {
      if ((i % 5 === 0 && i !== 0 && i % 10 !== 0) || (i - 1) % 10 === 0) {
        return {
          image: image.horizontal,
          outerWrapperClassName:
            'image-wrapper image-wrapper__horizontal w-2/3 px-5 my-5 ',
          className: 'image image__horizontal',
        }
      } else {
        return {
          image: image.vertical,
          outerWrapperClassName:
            'image-wrapper image-image__vertical w-1/3 px-5 my-5',
          className: 'image image__vertical',
        }
      }
    }

    return (
      <div className='gallery'>
        <div
          className='gallery-grid flex flex-wrap -mx-5'
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
                >
                  <Img
                    sizes={image.gallery_image.localFile.childImageSharp.square}
                    fadeIn
                    className={card.className}
                    outerWrapperClassName='image-wrapper image-wrapper--mobile block lg:hidden xl:hidden xxl:hidden'
                    alt={`${title.text} - ${i}`}
                  />
                  <Img
                    sizes={card.image}
                    fadeIn
                    className={card.className}
                    outerWrapperClassName='image-wrapper image-wrapper--desktop hidden lg:block xl:block xxl:block'
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

export default Gallery
