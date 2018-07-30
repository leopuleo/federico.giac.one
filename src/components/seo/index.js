import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import { createExcerpt } from '../../utils'

const Seo = ({ title, description, image }) => {
  return (
    <Helmet>
      <title>{title + ' - Federico Giacone'}</title>
      <meta name='description' content={createExcerpt(description, 250)} />
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default Seo
