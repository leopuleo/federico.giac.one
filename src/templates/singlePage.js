import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/main'
import Seo from '../components/seo'
import ContactButton from '../components/contactButton'
import Title from '../components/title'
import Content from '../components/content'

const SinglePage = ({ data }) => {
  const { prismicPage: page } = data

  return (
    <Main>
      <div className='page-single'>
        <Seo
          title={page.data.seo_title ? page.data.seo_title : page.data.title.text}
          description={page.data.seo_description ? page.data.seo_description : page.data.content.text}
        />
        <ContactButton />
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
          text
        }
        seo_title
        seo_description
      }
    }
  }
`
