export const DRAWER_OPEN = 'DRAWER_OPEN'
export const SELECTED_TAG = 'SELECTED_TAG'
export const FILTERING_TAG = 'FILTERING_TAG'

export const toggleDrawer = open => ({
  type: DRAWER_OPEN,
  open,
})

export const setPortfolioTag = tag => ({
  type: SELECTED_TAG,
  tag,
})

export const filteringPortfolioTag = status => ({
  type: FILTERING_TAG,
  status,
})

export const filterByTag = (tag) => dispatch => {
  dispatch(filteringPortfolioTag(true))
  setTimeout(() => {
      dispatch(setPortfolioTag(tag))
      dispatch(filteringPortfolioTag(false))
  }, 400)
}
