import React from 'react'

import './style.css'

const ContactButton = () => (
  <a
    href='mailto:federico@giac.one'
    className='contact-button text-grey-darkest bg-transparent no-underline text-xl inline-flex items-center md:pl-6 md:pr-8 md:py-3 md:border-2 md:border-grey-lighter md:rounded-full hover:no-underline'
  >
    <span className='font-sans-bold text-lowercase text-right hidden md:block'>
      <small className='font-sans text-grey text-xs block'>
        Hai un'idea?
      </small>
      Parliamone!
    </span>
    <span className='font-sans-regular text-lowercase text-sm md:hidden'>
      Prec.
    </span>
  </a>
)

export default ContactButton
