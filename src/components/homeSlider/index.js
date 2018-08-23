import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Img from 'gatsby-image'

import Link from '../link'
import Icon from '../icon'

import './style.css'
import 'slick-carousel/slick/slick.css'

const PrevArrow = props => {
  const { className, onClick } = props
  return (
    <div className={`${className} absolute md:p-2`} onClick={onClick}>
      <Icon icon='arrow-sm-left' cssClasses='text-2xl text-white block md:hidden' />
      <Icon icon='arrow-slim-left' cssClasses='text-4xl text-white hidden md:block' />
    </div>
  )
}

const NextArrow = props => {
  const { className, onClick } = props
  return (
    <div className={`${className} absolute md:p-2`} onClick={onClick}>
      <Icon icon='arrow-sm-right' cssClasses='text-2xl text-white block md:hidden' />
      <Icon icon='arrow-slim-right' cssClasses='text-4xl text-white hidden md:block' />
    </div>
  )
}

const HomeSlider = ({ slides, windowHeight }) => {
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
    prevArrow: <PrevArrow />,
  }

  const SliderLink = ({ children, link }) => {
    if (link) {
      if (link.raw.link_type === 'Document') {
        return (
          <Link to={link.url} className='no-underline'>
            {children}
          </Link>
        )
      } else {
        return (
          <Link href={link.url} className='no-underline'>
            {children}
          </Link>
        )
      }
    } else {
      return <div className='no-link'>{children}</div>
    }
  }

  return (
    <Slider className='home-slider relative' {...settings}>
      {slides.map(slide => {
        return (
          <div
            key={
              slide.slider_image.localFile.childImageSharp.horizontal.originalName
            }
            className='slide relative'
          >
            <SliderLink link={slide.slider_link}>
              <Img
                sizes={slide.slider_image.localFile.childImageSharp.horizontal}
                fadeIn
                style={{ height: windowHeight }}
                className='slide-image w-screen'
                outerWrapperClassName='slide-image-wrapper'
              />
              <div className='slide-content absolute px-6 py-8 md:px-10 md:py-10 text-white md:leading-none'>
                <div className='slide-content-inside pt-14 md:pt-16 md:px-10 xl:pt-16 xl:pl-16 xl:w-4/5 xxl:w-2/3 xxl:pt-16 xxl:pl-16'>
                  {slide.slider_title && (
                    <h2 className='slide-title text-lowercase font-accent-bold leading-none mb-4 md:mb-6 text-4xl md:text-6xl xl:text-7xl xxl:text-8xl'>
                      {slide.slider_title}
                    </h2>
                  )}
                  {slide.slider_excerpt && (
                    <p className='slide-excerpt leading-normal mb:leading-tight mb-6 md:mb-8 text-xl xxl:mb-10 xxl:text-2xl'>
                      {slide.slider_excerpt}
                    </p>
                  )}
                  {slide.slider_link && (
                    <button className='font-sans-bold uppercase text-sm bg-transparent border-2 border-white text-white rounded-full py-3 px-4 hover:bg-white hover:text-grey-darkest md:text-base xxl:py-3 xxl:px-6'>
                      Leggi di più
                    </button>
                  )}
                </div>
              </div>
            </SliderLink>
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
  windowHeight: PropTypes.string
}

const mapStateToProps = ({ windowHeight }) => {
  return {
    windowHeight,
  }
}

export default connect(
  mapStateToProps,
  null
)(HomeSlider)
