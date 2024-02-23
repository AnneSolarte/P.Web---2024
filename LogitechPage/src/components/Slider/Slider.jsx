import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Slider.css'

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % React.Children.count(children))
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + React.Children.count(children)) % React.Children.count(children))
  }

  return (
    <div className='slider'>
      <div className='slide-wrapper' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {React.Children.map(children, (child, index) => (
          <div className='slide' key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className='prev-button' onClick={prevSlide}>{'<'}</button>
      <button className='next-button' onClick={nextSlide}>{'>'}</button>
    </div>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Slider
