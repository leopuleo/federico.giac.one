import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Content = ({ content }) => (
  <div
    className='entry-content mb-10 text-xl leading-normal lg:w-2/3 lg:mb-13'
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

Content.propTypes = {
  content: PropTypes.string
}

export default Content
