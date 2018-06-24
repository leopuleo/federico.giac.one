import React, { Component } from 'react'
import Img from 'gatsby-image'

class Gallery extends Component {
	render() {
		const { gallery, title } = this.props

    // Immagini 1, 5, 11, 15, 21, 25 etc...
    const getCardFormat = (image, i) => {
      if ((i % 5 === 0 && i !== 0 && i % 10 !== 0) || (i - 1) % 10 === 0) {
        return {
          image: image.horizontal,
          outerWrapperClassName: 'image-wrapper image-wrapper__horizontal w-2/3 p-5',
          className: 'image image__horizontal',
        }
      } else {
        return {
          image: image.vertical,
          outerWrapperClassName: 'image-wrapper image-image__vertical w-1/3 p-5',
          className: 'image image__vertical',
        }
      }
    }

		return (
      <div className="gallery">
        <div className="gallery-grid flex flex-wrap -mx-5 -mx-5">
        	{ gallery.map((image, i) => {

            const card = getCardFormat(
              image.gallery_image.localFile.childImageSharp,
              i
            )
            return(
              <Img
                key={ `image-${i}` }
                sizes={ card.image }
                fadeIn={ true }
                className={ card.className}
                outerWrapperClassName={ card.outerWrapperClassName}
                alt={ `${title.text} - ${i}` }
              />
            )
          }) }
        </div>
      </div>
	  );
	}
}

export default Gallery

