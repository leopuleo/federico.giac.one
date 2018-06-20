import React, { Component } from 'react'
import Img from 'gatsby-image'

class Gallery extends Component {
	render() {
		const { gallery, title } = this.props

		return (
      <div className="singleProject__gallery">
      	{ gallery.map((image, i) => {
          // Immagini 1, 5, 11, 15, 21, 25 etc...
          if((i % 5 === 0 && i !== 0 && i % 10 !== 0) || ((i - 1) % 10 === 0)) {
            return(
              <Img
                key={ `image-${i}` }
                sizes={ image.gallery_image.localFile.childImageSharp.horizontal }
                fadeIn={ true }
                className="image image-horizontal"
                outerWrapperClassName="imageWrapper imageWrapper-horizontal"
                alt={ `${title.text} - ${i}` }
              />
            )
          } else {
            return(
              <Img
                key={ `image-${i}` }
                sizes={ image.gallery_image.localFile.childImageSharp.vertical }
                fadeIn={ true }
                className="image image-vertical"
                outerWrapperClassName="imageWrapper imageWrapper-vertical"
                alt={ `${title.text} - ${i}` }
              />
            )
          }
        }) }
      </div>
	  );
	}
}

export default Gallery

