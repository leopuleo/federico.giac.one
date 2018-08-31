import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { toggleDrawer as toggleDrawerAction } from '../store/actions'

import Seo from '../components/seo'
import Header from '../components/header'
import Drawer from '../components/drawer'
import CookieBar from '../components/cookieBar'
import PhotoSwipeDom from '../components/photoswipe'

import './index.css'
import './tailwind.css'
import './globalStyles.js'

class Index extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    children: PropTypes.element.isRequired,
    drawerOpen: PropTypes.bool,
    toggleDrawer: PropTypes.func,
    hasPhotoswipe: PropTypes.bool,
    data: PropTypes.object.isRequired,
  }

  render () {
    const { drawerOpen, toggleDrawer, hasPhotoswipe } = this.props

    const changeClass = cssClass => {
      if (drawerOpen === true) {
        return `${cssClass} drawer_open`
      } else {
        return `${cssClass} drawer_closed`
      }
    }

    return (
      <div className={changeClass('root')}>
        <Helmet
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover'
            }
          ]}
        >
          <html lang='en' />
        </Helmet>
        <Seo
          title={this.props.data.siteMeta.siteMetadata.title}
          description={this.props.data.siteMeta.siteMetadata.title}
        />
        <Header title={this.props.data.siteMeta.siteMetadata.title} />
        <Drawer
          navigation={this.props.data.navigation}
          footer={this.props.data.footer}
        />
        <div className='wrapper flex justify-center'>
          <div
            className='main-overlay'
            onClick={() => {
              toggleDrawer(false)
            }}
          />
          {this.props.children()}
        </div>
        <CookieBar />

        { hasPhotoswipe &&
          // Setting PhotoSwipe DOM only where is needed - Check Gallery component
          <PhotoSwipeDom />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ drawerOpen, hasPhotoswipe }) => {
  return {
    drawerOpen,
    hasPhotoswipe
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
  query MainSiteQuery {
    siteMeta: site {
      siteMetadata {
        title
      }
    }
    footer: prismicDrawer {
      ...footer
    }
    navigation: prismicDrawer {
      ...navigation
    }
  }
`
