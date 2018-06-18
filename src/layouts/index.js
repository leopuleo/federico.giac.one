import React , { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

import Header from '../components/header'
import Footer from '../components/footer'

import "./index.css"
import "./globalStyles.js"

import { loadingFonts as loadingFontsAction } from '../store/actions'

class Index extends Component {
  render() {

    const { loadingFonts } = this.props

    // webfontloader configuration object. *REQUIRED*.
    const fontConfig = {
      custom: {
        families: ['titilliumregular', 'titilliumitalic', 'titilliumbold', 'gilroyextrabold'],
      },
    };

    // Callback receives the status of the general webfont loading process. *OPTIONAL*
    const fontCallback = status => {
      console.log(status)
      loadingFonts(status)
    };

    return (
      <WebfontLoader config={fontConfig} onStatus={fontCallback}>
        <div className="font-sans">
          <Helmet
            title={this.props.data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header siteTitle={this.props.data.site.siteMetadata.title} />
          <div>
            {this.props.children()}
          </div>
          <Footer />
        </div>
      </WebfontLoader>
    )
  }
}

Index.propTypes = {
  children: PropTypes.func,
}

const mapDispatchToProps = ( dispatch ) => {
  return { 
    loadingFonts: status => dispatch(loadingFontsAction(status))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Index)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
