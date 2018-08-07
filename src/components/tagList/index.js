import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { filterByTag as filterByTagAction } from '../../store/actions'

import BottomBar from '../bottomBar'

import './style.css'

class TagList extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    tags: PropTypes.array.isRequired,
    filterByTag: PropTypes.func.isRequired,
    activeTag: PropTypes.string,
  }

  componentWillUnmount () {
    const { filterByTag } = this.props
    filterByTag('')
  }

  render () {
    const { tags, filterByTag, activeTag } = this.props
    const activeClass = tag => {
      return tag === activeTag
        ? 'active bg-grey-darkest text-white'
        : 'bg-white text-grey-darkest'
    }

    return (
      <BottomBar cssClasses='tag-list-bottom-bar'>
        <div className='tag-list whitespace-no-wrap overflow-x-auto px-4 pr-8 py-3 lg:whitespace-normal md:px-0 md:py-0'>
          <button
            className={`${activeClass(
              ''
            )} font-sans-bold uppercase text-sm py-1 px-2 rounded-full hover:bg-grey-darkest hover:text-white md:py-4 md:px-6 md:text-base`}
            onClick={() => filterByTag('')}
          >
            Tutti i progetti
          </button>
          {tags.map(tag => {
            return (
              <button
                key={tag}
                className={`${activeClass(
                  tag
                )} font-sans-bold rounded-full uppercase text-sm py-1 px-2 ml-1 hover:bg-grey-darkest hover:text-white md:py-4 md:px-6 md:ml-3 md:text-base`}
                onClick={() => filterByTag(tag)}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </BottomBar>
    )
  }
}

const mapStateToProps = ({ activeTag }) => {
  return {
    activeTag,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterByTag: tag => dispatch(filterByTagAction(tag)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagList)
