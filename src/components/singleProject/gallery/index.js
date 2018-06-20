import React, { Component } from 'react'
import Img from 'gatsby-image'

class Gallery extends Component {
	render() {
		const { gallery } = this.props

		return (
      <div className="single-project__gallery">
      	{ gallery.map((image, i) => {
          // Immagini 1, 5, 11, 15, 21, 25 etc...
          if((i % 5 === 0 && i !== 0 && i % 10 !== 0) || ((i - 1) % 10 === 0)) {
            return(
              <Img key={`image-${i}`} sizes={ image.gallery_image.localFile.childImageSharp.horizontal } />
            )
          } else {
            return(
              <Img key={`image-${i}`} sizes={ image.gallery_image.localFile.childImageSharp.vertical } />
            )
          }
        }) }
      </div>
	  );
	}
}

export default Gallery

