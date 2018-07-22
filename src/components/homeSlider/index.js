import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Img from 'gatsby-image'

import Icon from '../icon'

import './style.css'
import 'slick-carousel/slick/slick.css'

const PrevArrow = props => {
  const { className, onClick } = props
  return (
    <div className={`${className} absolute`} onClick={onClick}>
      <Icon icon='arrow-slim-left' cssClasses='text-5xl text-grey-lightest' />
    </div>
  )
}

const NextArrow = props => {
  const { className, onClick } = props
  return (
    <div className={`${className} absolute`} onClick={onClick}>
      <Icon icon='arrow-slim-right' cssClasses='text-5xl text-grey-lightest' />
    </div>
  )
}

const HomeSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    fade: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  return (
    <Slider className='home-slider' {...settings}>
      {slides.map(slide => {
        return (
          <Img
            key={slide.slider_image.localFile.childImageSharp.horizontal.originalName}
            sizes={slide.slider_image.localFile.childImageSharp.horizontal}
            fadeIn
            className='slide w-screen h-screen'
            outerWrapperClassName='slide-wrapper'
          />
        )
      })}
    </Slider>
  )
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

HomeSlider.propTypes = {
  slides: PropTypes.array,
}

export default HomeSlider
