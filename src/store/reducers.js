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

function loadingFonts(state = 'loading', action) {
  const { type, status } = action
  switch (type) {
    case actions.FONTS_STATUS :
      return status
    default :
      return state
  }
}

export default combineReducers({
  drawerOpen,
  loadingFonts
})
