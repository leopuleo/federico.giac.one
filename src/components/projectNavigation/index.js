import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Icon from '../icon'
import BottomBar from '../bottomBar'

import './style.css'

const ProjectNavigation = ({ next, prev }) => (
  <BottomBar cssClasses='project-bottom-bar'>
    <div className='project-navigation flex whitespace-no-wrap overflow-x-auto px-4 py-2 lg:whitespace-normal md:px-0 md:py-0 md:mt-10'>
      <div className='project-prev w-1/3 flex flex-wrap justify-start text-left md:w-1/2'>
        {prev && (
          <Link
            to={prev.fields.slug}
            className='project-navigation-button text-grey-darkest bg-white no-underline text-xl inline-flex items-center md:pl-6 md:pr-8 md:py-3 md:rounded-full hover:no-underline md:hover:bg-grey-darkest md:hover:text-white'
          >
            <Icon
              icon='arrow-slim-left'
              cssClasses='mr-1 md:text-xl md:mr-3'
            />
            <span className='font-sans-bold text-lowercase hidden md:block'>
              <small className='font-sans text-grey text-xs block'>
                Progetto precedente:{' '}
              </small>
              {prev.data.title.text}
            </span>
            <span className='font-sans-regular text-lowercase text-sm md:hidden'>
              Prec.
            </span>
          </Link>
        )}
      </div>
      <div className='project-archive w-1/3 flex flex-wrap justify-center md:hidden'>
        <Link
          to='/portfolio/'
          className='text-grey-darkest no-underline hover:no-underline'
        >
          <Icon icon='grid-nav' cssClasses='text-3xl' />
        </Link>
      </div>
      <div className='project-navigation-button project-next w-1/3 flex flex-wrap justify-end text-right md:w-1/2'>
        {next && (
          <Link
            to={next.fields.slug}
            className='text-grey-darkest bg-white no-underline text-xl inline-flex items-center md:pr-6 md:pl-8 md:py-3 md:rounded-full hover:no-underline md:hover:bg-grey-darkest md:hover:text-white'
          >
            <span className='font-sans-bold text-lowercase hidden md:block'>
              <small className='font-sans text-grey text-xs block'>
                Progetto successivo:{' '}
              </small>
              {next.data.title.text}
            </span>
            <span className='font-sans-regular text-lowercase text-sm md:hidden'>
              Succ.
            </span>
            <Icon
              icon='arrow-slim-right'
              cssClasses='ml-1 md:text-xl md:ml-3'
            />
          </Link>
        )}
      </div>
    </div>
  </BottomBar>
)

ProjectNavigation.propTypes = {
  next: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  prev: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export default ProjectNavigation
