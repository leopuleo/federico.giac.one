import React, { Component } from 'react'

import GalleryImage from './galleryImage'

class Gallery extends Component {
	render() {
		const { gallery } = this.props

		return (
	     <div className="single-project__gallery">
	     	{ gallery.map((image) => {
					return(
						<GalleryImage image={ image } />
					)
				}) }
	     </div>
	  );
	}
}

export default Gallery

