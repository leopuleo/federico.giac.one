import React from 'react'

const Content = ({ content }) => (
  <div className="entryContent" dangerouslySetInnerHTML={{ __html: content }} />
)

export default Content
