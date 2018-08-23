import React from 'react'

import CookieConsent from 'react-cookie-consent'

import Link from '../link'

import './style.css'

const CookieBar = () => (
  <CookieConsent
    location='bottom'
    disableStyles
    acceptOnScroll
    acceptOnScrollPercentage={25}
    buttonText='Accetto'
    cookieName='CookieConsent'
    containerClasses='cookie-bar w-full bg-black px-5 py-8 text-white font-sans text-antialiased text-sm leading-normal text-center lg:w-1/3 lg:rounded lg:text-base'
    contentClasses='cookie-bar__content'
    buttonClasses='cookie-bar__button w-2/3 bg-white py-3 px-4 mx-auto text-black font-sans-bold uppercase text-sm rounded-full block sm:w-2/5 md:w-4/5 xl:w-3/5 xxl:w-2/3 lg:text-base'
    expires={365}
  >
  Questo sito o gli strumenti terzi da questo utilizzati si avvalgono di cookie necessari al funzionamento ed utili alle finalità illustrate nella cookie policy.
  Chiudendo il banner, cliccando su “Accetto” o scorrendo la presente pagina acconsenti all’uso dei cookie.
    <Link
      to='/cookie-policy/'
      className='w-2/3 py-3 px-4 mx-auto my-4 bg-black text-white font-sans-bold uppercase leading-none text-sm no-underline rounded-full border-white border-2 block sm:w-2/5 md:w-4/5 xl:w-3/5 xxl:w-2/3 lg:text-base'
    >
      Maggiori informazioni
    </Link>
  </CookieConsent>
)

export default CookieBar
