import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import { createExcerpt } from '../../utils'

const Seo = ({ title, description, image }) => {
  const siteName = 'Federico Giacone'
  const siteDomain = 'https://federico.giac.one'
  const separator = ' - '

  const seoTitle = title ? title + separator + siteName : siteName
  const seoDesc = description ? createExcerpt(description, 250) : siteName
  const seoImgSrc = image ? `${siteDomain}${image.src}` : `${siteDomain}/static/federico-giacone.jpg`
  const seoImgWidth = image ? image.width : '1600'
  const seoImgHeight = image ? image.height : '943'

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name='description' content={seoDesc} />
      <meta property='og:title' content={seoTitle} />
      <meta property='og:description' content={seoDesc} />
      <meta property='og:type' content='article' />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:image' content={seoImgSrc} />
      <meta property='og:image:width' content={seoImgWidth} />
      <meta property='og:image:height' content={seoImgHeight} />
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
