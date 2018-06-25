import React, { Component } from 'react'
import { connect } from 'react-redux'

import { filterByTag as filterByTagAction } from '../../store/actions'

class TagList extends Component {
  render() {
    const { tags, activeTag, filterByTag } = this.props

    return (
      <div className="tag-list">
        <button
          className="bg-grey hover:bg-grey text-white py-2 px-4 mr-3 rounded"
          onClick={() => filterByTag('')}
        >
          Tutti i progetti
        </button>
        {tags.map(tag => {
          return (
            <button
              key={tag}
              className="bg-grey hover:bg-grey text-white py-2 px-4 mr-3 rounded"
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

const mapStateToProps = ({ activeTag, filterByTag }) => {
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
