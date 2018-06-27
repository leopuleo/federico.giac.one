import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { toggleDrawer as toggleDrawerAction } from '../store/actions'

import Header from '../components/header'
import Drawer from '../components/drawer'
import PhotoSwipeDom from '../components/gallery/photoswipe.js'

import './index.css'
import './tailwind.css'
import './globalStyles.js'

class Index extends Component {
  render() {
    const { drawerOpen, toggleDrawer } = this.props

    const changeClass = cssClass => {
      if (drawerOpen === true) {
        return `${cssClass} drawer_open`
      } else {
        return `${cssClass} drawer_closed`
      }
    }

    const checkPageResource = page => {
      if (this.props.location.pathname.indexOf(page)) {
        return true
      }
    }

    return (
      <div className={changeClass('root')}>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header title={this.props.data.site.siteMetadata.title} />
        <Drawer />
        <div className="wrapper flex justify-center">
          <div
            className="main-overlay"
            onClick={() => {
              toggleDrawer(false)
            }}
          ></div>
          <div className="main w-3/4 text-grey bg-grey-lightest font-sans text-antialiased">
            {this.props.children()}
          </div>
        </div>
        {checkPageResource('portfolio') && <PhotoSwipeDom />}
      </div>
    )
  }
}

Index.propTypes = {
  children: PropTypes.func,
}

const mapStateToProps = ({ drawerOpen }) => {
  return {
    drawerOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: open => dispatch(toggleDrawerAction(open)),
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
