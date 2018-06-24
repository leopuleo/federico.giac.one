import React from 'react'

import './style.css'

const Content = ({ content }) => (
  <div className="entry-content w-2/3 mb-13" dangerouslySetInnerHTML={{ __html: content }} />
)

export default Content
