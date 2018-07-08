import { injectGlobal } from 'styled-components'

import FeddyIconWoff from './font/feddy-icon.woff'
import FeddyIconEot from './font/feddy-icon.eot'
import FeddyIconSvg from './font/feddy-icon.svg'
import FeddyIconTtf from './font/feddy-icon.ttf'

export default injectGlobal`
  @font-face {
    font-family: 'feddy-icon';
    src:  url(${FeddyIconEot});
    src:  url(${FeddyIconEot}) format('embedded-opentype'),
      url(${FeddyIconTtf}) format('truetype'),
      url(${FeddyIconWoff}) format('woff'),
      url(${FeddyIconSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
`
