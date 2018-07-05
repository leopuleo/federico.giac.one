import React from 'react'
import PropTypes from 'prop-types'

import Title from '../components/title'
import Content from '../components/content'

const SinglePage = ({ data }) => {
  const { prismicPage: page } = data

  return (
    <div className='page-single'>
      <Title title={page.data.title.text} />
      <Content content={page.data.content.html} />
    </div>
  )
}

SinglePage.propTypes = {
  data: PropTypes.object,
}

export default SinglePage

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
