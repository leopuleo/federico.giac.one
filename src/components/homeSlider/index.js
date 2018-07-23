import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import Icon from '../icon'

import './style.css'
import 'slick-carousel/slick/slick.css'

const PrevArrow = props => {
  const { className, onClick } = props
  return (
    <div className={`${className} absolute p-2`} onClick={onClick}>
      <Icon icon='arrow-slim-left' cssClasses='text-3xl text-grey-lightest' />
    </div>
  )
}

const NextArrow = props => {
  const { className, onClick } = props
  return (
    <div className={`${className} absolute p-2`} onClick={onClick}>
      <Icon icon='arrow-slim-right' cssClasses='text-3xl text-grey-lightest' />
    </div>
  )
}

const HomeSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: false,
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
    <Slider className='home-slider relative' {...settings}>
      {slides.map(slide => {
        return (
          <div
            key={slide.slider_image.localFile.childImageSharp.horizontal.originalName}
            className='slide relative'
          >
            <Link to={slide.slider_link.url} className='no-underline'>
              <Img
                sizes={slide.slider_image.localFile.childImageSharp.horizontal}
                fadeIn
                className='slide-image w-screen h-screen'
                outerWrapperClassName='slide-image-wrapper'
              />
              <div className='slide-content absolute px-8 pr-4 py-4 text-lowercase font-sans text-white text-xl leading-none'>
                <h2 className='slide-title'>
                  {slide.slider_title}
                  <Icon icon='arrow-slim-right' cssClasses='text-xl pl-2' />
                </h2>
              </div>
            </Link>
          </div>
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
