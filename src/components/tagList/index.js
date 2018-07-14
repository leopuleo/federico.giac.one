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
  }

  render () {
    const { tags, filterByTag } = this.props

    return (
      <BottomBar>
        <div className='tag-list whitespace-no-wrap overflow-x-auto px-4 pr-8 py-3 lg:whitespace-normal md:px-0 md:py-0'>
          <button
            className='bg-white font-sans-bold text-grey-darkest uppercase text-sm py-1 px-2 hover:bg-grey-darkest hover:text-white md:py-3 md:px-6 md:text-base'
            onClick={() => filterByTag('')}
          >
            Tutti i progetti
          </button>
          {tags.map(tag => {
            return (
              <button
                key={tag}
                className='bg-white font-sans-bold text-grey-darkest uppercase text-sm py-1 px-2 ml-2 hover:bg-grey-darkest hover:text-white md:py-3 md:px-6 md:ml-3 md:text-base'
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

const mapDispatchToProps = dispatch => {
  return {
    filterByTag: tag => dispatch(filterByTagAction(tag)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TagList)
