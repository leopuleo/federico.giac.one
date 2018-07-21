import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Footer = ({ footer }) => (
  <div className='footer fixed px-5 pb-5 lg:px-11 lg:py-10 lg:pl-14 text-left lg:text-right text-grey'>
    <div
      className='footer-presentation hidden lg:block pb-8 text-antialiased'
      dangerouslySetInnerHTML={{ __html: footer.data.content.html }}
    />
    <div
      className='footer-info text-antialiased'
      dangerouslySetInnerHTML={{ __html: footer.data.contacts.html }}
    />
  </div>
)

Footer.propTypes = {
  footer: PropTypes.object,
}

export default Footer

export const footerQuery = graphql`
  fragment footer on PrismicDrawer {
    data {
      content {
        html
      }
      contacts {
        html
      }
    }
  }
`
