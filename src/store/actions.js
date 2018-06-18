export const DRAWER_OPEN = 'DRAWER_OPEN'
export const FONTS_STATUS = 'FONTS_STATUS'

export const toggleDrawer = open => ({
  type: DRAWER_OPEN,
  open
})

export const loadingFonts = status => ({
  type: FONTS_STATUS,
  status
})
