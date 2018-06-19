import React from 'react'

import Title from './title'
import Content from './content'
import Gallery from './gallery'

export default function SingleProject({ data }) {
	const { title, content, gallery } = data

	return(
		<div className="single-project">
			<Title title={ title } />
			<Content content={ content } />
			<Gallery gallery={ gallery } />
		</div>
	)
}