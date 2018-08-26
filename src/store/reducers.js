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

function windowHeight (state = '100vh', action) {
  const { type, height } = action
  switch (type) {
    case actions.WINDOW_HEIGHT:
      return height
    default:
      return state
  }
}

function cookieConsent (state = false, action) {
  const { type, value } = action
  switch (type) {
    case actions.COOKIE_CONSENT:
      return value
    default:
      return state
  }
}

export default combineReducers({
  drawerOpen,
  activeTag,
  windowHeight,
  cookieConsent
})
