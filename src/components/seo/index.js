import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import { createExcerpt } from '../../utils'

const Seo = ({ title, description, image }) => {
  const siteName = 'Federico Giacone'
  const separator = ' - '
  const seoTitle = title + separator + siteName
  const seoDesc = createExcerpt(description, 250)

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name='description' content={seoDesc} />
      <meta property='og:title' content={seoTitle} />
      <meta property='og:description' content={seoDesc} />
      <meta property='og:type' content='article' />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:image' content={`${process.env.SITE_DOMAIN}${image.src}`} />
      <meta property='og:image:width' content={image.width} />
      <meta property='og:image:height' content={image.height} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seoTitle} />
      <meta name='twitter:description' content={seoDesc} />
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object
}

export default Seo
