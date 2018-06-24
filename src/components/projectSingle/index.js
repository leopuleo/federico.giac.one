import React from 'react'
import Helmet from 'react-helmet'

import Title from '../title'
import Content from '../content'
import Gallery from '../gallery'

export default function ProjectSingle({ data }) {
  const { title, content, gallery } = data

  return (
    <div className="project-single">
      <Title title={title.text} />
      <Content content={content.html} />
      <Gallery gallery={gallery} title={title} />
    </div>
  )
}
