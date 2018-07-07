import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Content = ({ content }) => (
  <div
    className='entry-content mb-6 text-base leading-normal lg:w-2/3 lg:mb-13 lg:text-xl'
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

Content.propTypes = {
  content: PropTypes.string
}

export default Content
