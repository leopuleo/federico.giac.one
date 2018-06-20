import React from 'react'

const Content = ({ content }) => (
  <div className="entryContent">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

export default Content
