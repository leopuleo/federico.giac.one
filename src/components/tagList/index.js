import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { filterByTag as filterByTagAction } from '../../store/actions'

class TagList extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    tags: PropTypes.array.isRequired,
    filterByTag: PropTypes.func.isRequired
  }

  render () {
    const { tags, filterByTag } = this.props

    return (
      <div className='tag-list'>
        <button
          className='bg-grey hover:bg-grey text-white uppercase py-2 px-4 mr-3'
          onClick={() => filterByTag('')}
        >
          Tutti i progetti
        </button>
        {tags.map(tag => {
          return (
            <button
              key={tag}
              className='bg-grey hover:bg-grey text-white uppercase py-2 px-4 mr-3'
              onClick={() => filterByTag(tag)}
            >
              {tag}
            </button>
          )
        })}
      </div>
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
