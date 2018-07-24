import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Link from '../../link'

import { toggleDrawer as toggleDrawerAction } from '../../../store/actions'

import './style.css'

class Navigation extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    toggleDrawer: PropTypes.func,
    navigation: PropTypes.object
  }

  render () {
    const { navigation, toggleDrawer } = this.props

    const NavigationLink = ({ children, link }) => {
      if (link) {
        if (link.raw.link_type === 'Document') {
          return (
            <Link
              className='menu-link no-underline hover:no-underline'
              to={link.url}
              onClick={() => {
                toggleDrawer(false)
              }}
            >
              {children}
            </Link>
          )
        } else {
          return (
            <Link
              className='menu-link no-underline hover:no-underline'
              href={link.url}
              onClick={() => {
                toggleDrawer(false)
              }}
            >
              {children}
            </Link>
          )
        }
      } else {
        return <span className='no-link'>{children}</span>
      }
    }

    return (
      <nav className='navigation lg:text-right mt-15 lg:mt-12 text-antialiased'>
        <ul className='menu list-reset'>
          {navigation.data.main_navigation.map(item => (
            <li className='menu-item block mb-4' key={item.menu_title}>
              <NavigationLink link={item.menu_link}>
                <span className='menu-link-inside'>
                  <span className='big-link block text-4xl leading-none font-accent-bold text-grey-darkest'>
                    {item.menu_title}
                  </span>
                  <span className='small-link text-base hidden lg:inline-block font-sans text-grey'>
                    {item.menu_excerpt}
                  </span>
                </span>
              </NavigationLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: open => dispatch(toggleDrawerAction(open)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navigation)

export const navigationQuery = graphql`
  fragment navigation on PrismicDrawer {
    data {
      main_navigation {
        menu_title
        menu_excerpt
        menu_link {
          url
          raw {
            link_type
          }
        }
      }
    }
  }
`
