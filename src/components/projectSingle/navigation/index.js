import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Icon from '../../icon'
import BottomBar from '../../bottomBar'

const ProjectNavigation = ({ next, prev }) => (
  <BottomBar cssClasses='project-bottom-bar'>
    <div className='project-navigation flex whitespace-no-wrap overflow-x-auto px-4 py-2 lg:whitespace-normal md:px-0 md:py-0 md:mt-10'>
      <div className='project-prev w-1/3 flex flex-wrap justify-start md:w-1/2'>
        {prev && (
          <Link
            to={prev.uid}
            className='text-grey-darkest no-underline hover:no-underline text-xl inline-flex items-center'
          >
            <Icon icon='arrow-slim-left' cssClasses='mr-1 md:text-4xl md:mr-3' />
            <span className='font-sans-bold text-lowercase hidden md:block'>
              <small className='font-sans text-grey text-xs block'>
                Progetto precedente:{' '}
              </small>
              {prev.data.title.text}
            </span>
            <span className='font-sans-regular text-lowercase text-sm md:hidden'>Prec.</span>
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
      <div className='project-next w-1/3 flex flex-wrap justify-end md:w-1/2'>
        {next && (
          <Link
            to={next.uid}
            className='text-grey-darkest no-underline hover:no-underline text-xl inline-flex items-center'
          >
            <span className='font-sans-bold text-lowercase hidden md:block'>
              <small className='font-sans text-grey text-xs block'>
                Progetto successivo:{' '}
              </small>
              {next.data.title.text}
            </span>
            <span className='font-sans-regular text-lowercase text-sm md:hidden'>Succ.</span>
            <Icon icon='arrow-slim-right' cssClasses='ml-1 md:text-4xl md:ml-3' />
          </Link>
        )}
      </div>
    </div>
  </BottomBar>
)

ProjectNavigation.propTypes = {
  next: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  prev: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
}

export default ProjectNavigation
