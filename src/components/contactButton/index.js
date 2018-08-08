import React from 'react'

import Icon from '../icon'

import './style.css'

const ContactButton = () => (
  <a
    href='mailto:federico@giac.one'
    className='contact-button hidden text-grey-darkest bg-white no-underline text-xl items-center pl-8 pr-6 py-3 rounded-full hover:no-underline hover:bg-grey-darkest hover:text-white md:inline-flex'
  >
    <span className='font-sans-bold text-lowercase text-right hidden md:block'>
      <small className='font-sans text-grey text-xs block'>
        Hai un'idea?
      </small>
      Parliamone!
    </span>
    <Icon
      icon='send'
      cssClasses='ml-1 md:text-3xl md:ml-3'
    />
  </a>
)

export default ContactButton
