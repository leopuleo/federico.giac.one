import React from 'react'
import PropTypes from 'prop-types'

const Experiences = ({ title, items }) => (
  <div className='experiences-group'>
    <h2 className='experiences-group-title'>{title}</h2>
    {items.map((item) => {
      return (
        <div className='experience-item'>
          <h3 className='experience-item-title'>{item.position_experience}</h3>
          <div
            className='experience-item-content'
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
