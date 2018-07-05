import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Content = ({ content }) => (
  <div
    className='entry-content w-2/3 mb-13'
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

Content.propTypes = {
  content: PropTypes.string
}

export default Content
