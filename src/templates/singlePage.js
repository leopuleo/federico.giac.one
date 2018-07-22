import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/main'
import Title from '../components/title'
import Content from '../components/content'

const SinglePage = ({ data }) => {
  const { prismicPage: page } = data

  return (
    <Main>
      <div className='page-single'>
        <Title title={page.data.title.text} cssClasses='lg:text-7xl' />
        <Content content={page.data.content.html} />
      </div>
    </Main>
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
