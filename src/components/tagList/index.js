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
      <BottomBar cssClasses='tag-list-bottom-bar sm:mt-10'>
        <div className='tag-list whitespace-no-wrap overflow-x-auto px-4 pr-8 py-3 lg:whitespace-normal md:px-0 md:py-0'>
          <button
            className={`${activeClass(
              ''
            )} font-sans-bold uppercase text-sm py-2 px-3 rounded-full md:py-3 md:px-4 md:mb-2 md:text-base md:hover:bg-grey-darkest md:hover:text-white xl:py-4 xl:px-6`}
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
                )} font-sans-bold rounded-full uppercase text-sm py-2 px-3 ml-1 md:py-3 md:px-4 md:mb-2 md:ml-2 md:text-base md:hover:bg-grey-darkest md:hover:text-white xl:py-4 xl:px-6 xl:ml-3`}
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
