import * as actions from './actions'
import { combineReducers } from 'redux'

function drawerOpen(state = false, action) {
  const { type, open } = action
  switch (type) {
    case actions.DRAWER_OPEN :
      return open
    default :
      return state
  }
}

export default combineReducers({
  drawerOpen,
})
