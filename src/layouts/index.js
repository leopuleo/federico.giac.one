import React , { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

import Drawer from '../components/drawer'

import "./index.css"
import "./globalStyles.js"

import { loadingFonts as loadingFontsAction } from '../store/actions'

class Index extends Component {
  render() {

    const { loadingFonts, drawerOpen } = this.props

    // webfontloader configuration object. *REQUIRED*.
    const fontConfig = {
      custom: {
        families: ['titilliumregular', 'titilliumitalic', 'titilliumbold', 'gilroyextrabold'],
      },
    };

    // Callback receives the status of the general webfont loading process. *OPTIONAL*
    const fontCallback = status => {
      // console.log(status)
      loadingFonts(status)
    };

    const wrapperClass = () => {
      if(drawerOpen === true) {
        return 'drawer_open'
      } else {
        return 'drawer_closed'
      }
    }

    return (

      <WebfontLoader config={fontConfig} onStatus={fontCallback}>
        <div className={ wrapperClass() }>
          <Helmet
            title={this.props.data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Drawer siteTitle={this.props.data.site.siteMetadata.title} />
          <div className="main">
            {this.props.children()}
          </div>
        </div>
      </WebfontLoader>
    )
  }
}

Index.propTypes = {
  children: PropTypes.func,
}

const mapStateToProps = ( { drawerOpen } ) => {
  return {
    drawerOpen
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return { 
    loadingFonts: status => dispatch(loadingFontsAction(status))
  }
}

export default connect(
  mapStateToProps,
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
