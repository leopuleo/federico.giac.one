import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Content = ({ content }) => (
  <div
    className='entry-content mb-6 text-base leading-normal md:w-2/3 md:mb-8 md:text-xl lg:mb-13'
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

Content.propTypes = {
  content: PropTypes.string,
}

export default Content
