import { injectGlobal } from 'styled-components'
import fontFiles from '../fonts'

export default injectGlobal`

  @font-face {
    font-family: 'titilliumregular';
    src: url(${fontFiles.TitilliumRegularWoff2}) format("woff2"),
         url(${fontFiles.TitilliumRegularWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'titilliumitalic';
    src: url(${fontFiles.TitilliumRegularItalicWoff2}) format("woff2"),
         url(${fontFiles.TitilliumRegularItalicWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'titilliumbold';
    src: url(${fontFiles.TitilliumSemiBoldWoff2}) format("woff2"),
         url(${fontFiles.TitilliumSemiBoldWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroyextrabold';
    src: url(${fontFiles.GilroyExtraBoldWoff2}) format('woff2'),
         url(${fontFiles.GilroyExtraBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'feddy-icon';
    src:  url(${fontFiles.FeddyIconEot}?94yalr);
    src:  url(${fontFiles.FeddyIconEot}?94yalr#iefix') format('embedded-opentype'),
      url('${fontFiles.FeddyIconTtf}?94yalr') format('truetype'),
      url('${fontFiles.FeddyIconWoff}?94yalr') format('woff'),
      url('${fontFiles.FeddyIconSvg}?94yalr#feddy-icon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`
