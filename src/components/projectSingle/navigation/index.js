import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Icon from '../../icon'

import './style.css'

const ProjectNavigation = ({ next, prev }) => (
  <div className='project-navigation fixed w-screen bg-white overflow-x-scroll md:relative md:w-full md:bg-transparent md:mt-10 md:overflow-x-auto'>
    <div className='project-navigation-inside whitespace-no-wrap overflow-x-auto px-4 pr-8 py-3 lg:whitespace-normal md:px-0 md:py-0 flex'>
      <div className='project-prev w-1/3 text-left lg:w-1/2'>
        {prev && (
          <Link
            to={prev.uid}
            className='text-grey-darkest no-underline hover:no-underline text-xl inline-flex'
          >
            <Icon icon='arrow-slim-left' cssClasses='text-4xl mr-3' />
            <span className='font-sans-bold text-lowercase hidden sm:block mt-1'>
              <small className='font-sans text-grey text-xs block'>Progetto precedente: </small>
              {prev.data.title.text}
            </span>
          </Link>
        )}
      </div>
      <div className='project-archive w-1/3 text-center lg:hidden'>
        <Link
          to='/portfolio/'
          className='text-grey-darkest no-underline hover:no-underline'
        >
          <Icon icon='grid-nav' cssClasses='text-5xl' />
        </Link>
      </div>
      <div className='project-next w-1/3 text-right lg:w-1/2'>
        {next && (
          <Link
            to={next.uid}
            className='text-grey-darkest no-underline hover:no-underline text-xl inline-flex'
          >
            <span className='font-sans-bold text-lowercase hidden sm:block mt-1'>
              <small className='font-sans text-grey text-xs block'>Progetto successivo: </small>
              {next.data.title.text}
            </span>
            <Icon icon='arrow-slim-right' cssClasses='text-4xl ml-3' />
          </Link>
        )}
      </div>
    </div>
  </div>
)

ProjectNavigation.propTypes = {
  next: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  prev: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired
}

export default ProjectNavigation
