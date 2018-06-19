import React, { Component } from 'react'

class GalleryImage extends Component {
	render() {
		const { image } = this.props
		return (
      <img src={ image.gallery_image.localFile.childImageSharp.sizes.src } />
	  );
	}
}

export default GalleryImage
