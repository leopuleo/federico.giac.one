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
`
