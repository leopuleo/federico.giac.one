export const DRAWER_OPEN = 'DRAWER_OPEN'
export const SELECTED_TAG = 'SELECTED_TAG'
export const WINDOW_HEIGHT = 'WINDOW_HEIGHT'
export const COOKIE_CONSENT = 'COOKIE_CONSENT'
export const HAS_PHOTOSWIPE = 'HAS_PHOTOSWIPE'

export const toggleDrawer = open => ({
  type: DRAWER_OPEN,
  open
})

export const setPortfolioTag = tag => ({
  type: SELECTED_TAG,
  tag
})

export const filterByTag = tag => dispatch => {
  dispatch(setPortfolioTag(tag))
}

export const setWindowHeight = height => ({
  type: WINDOW_HEIGHT,
  height
})

export const setCookieConsent = value => ({
  type: COOKIE_CONSENT,
  value
})

export const setPhotoswipe = value => ({
  type: HAS_PHOTOSWIPE,
  value
})
