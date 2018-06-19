import React , { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

import Drawer from '../components/drawer'

import "./index.css"
import "./globalStyles.js"

class Index extends Component {
  render() {

    const { drawerOpen } = this.props

    const wrapperClass = () => {
      if(drawerOpen === true) {
        return 'drawer_open'
      } else {
        return 'drawer_closed'
      }
    }

    return (
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

export default connect(
  mapStateToProps,
  null
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
