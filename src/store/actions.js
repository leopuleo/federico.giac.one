export const DRAWER_OPEN = 'DRAWER_OPEN'
export const FILTER_TAG = 'FILTER_TAG'

export const toggleDrawer = open => ({
  type: DRAWER_OPEN,
  open,
})

export const filterByTag = tag => ({
  type: FILTER_TAG,
  tag,
})
