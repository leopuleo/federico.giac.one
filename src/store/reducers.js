import * as actions from './actions'
import { combineReducers } from 'redux'

function drawerOpen (state = false, action) {
  const { type, open } = action
  switch (type) {
    case actions.DRAWER_OPEN:
      return open
    default:
      return state
  }
}

function activeTag (state = '', action) {
  const { type, tag } = action
  switch (type) {
    case actions.SELECTED_TAG:
      return tag
    default:
      return state
  }
}

export default combineReducers({
  drawerOpen,
  activeTag,
})
