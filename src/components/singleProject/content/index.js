import React from 'react'

const Content = ({ content }) => (
  <div className="single-project__content">
    <div dangerouslySetInnerHTML={{ __html: content.html }} />
  </div>
)

export default Content
