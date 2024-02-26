import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'
import './Slider.css'
import { Item } from '../../Item/Item'

export function Slider ({ dataType, type }) {
  const clas = `section-${type}`
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % dataType.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + dataType.length) % dataType.length)
  }

  const isMobile = useMediaQuery({ maxWidth: 768 }) // Definir el breakpoint para móvil

  if (!isMobile) {
    return (
      <div className={clas}>
        {dataType.map(({ title, id, src, text }) => (
          <div className='item' key={id}>
            <Item type={type} title={title} img={src} text={text} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='slider'>
      <div className='slide-wrapper' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {dataType.map(({ title, id, src, text }) => (
          <div className='slide' key={id}>
            <Item type={type} title={title} img={src} text={text} />
          </div>
        ))}
      </div>
      <button className='prev-button' onClick={prevSlide}>{'<'}</button>
      <button className='next-button' onClick={nextSlide}>{'>'}</button>
    </div>
  )
}

Slider.propTypes = {
  dataType: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired
}
