import React from 'react'
import PropTypes from 'prop-types'

const Experiences = ({ title, items }) => (
  <div className='experiences-group mb-10 xl:w-2/3'>
    <h2 className='experiences-group-title font-accent-bold text-grey-darkest text-3xl text-lowercase leading-none mb-6 lg:leading-tight lg:text-5xl lg:mb-8'>{title}</h2>
    {items.map((item) => {
      return (
        <div className='experience-item pb-6 mb-6 border-b border-grey-lighter'>
          <h3 className='experience-item-title font-sans-bold text-grey-darkest text-lg mb-2 md:text-xl xl:text-2xl'>{item.position_experience}</h3>
          <div
            className='experience-item-content text-base leading-normal md:text-lg'
            dangerouslySetInnerHTML={{ __html: item.content_experience.html }}
          />
        </div>
      )
    })}
  </div>
)

Experiences.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Experiences
