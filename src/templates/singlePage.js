import React from 'react'

import Title from '../components/title'
import Content from '../components/content'

export default function SinglePage({
  data: { prismicPage: pageNode },
  postBodyComponents,
}) {
  const { data } = pageNode

  return (
    <div className="page-single">
      <Title title={ data.title.text } />
      <Content content={ data.content.html } />
    </div>
  )

}

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
