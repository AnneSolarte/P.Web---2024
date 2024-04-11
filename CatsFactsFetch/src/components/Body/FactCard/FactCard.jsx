import React from 'react'
import PropTypes from 'prop-types'
import './FactCard.css'

export const FactCard = ({ fact, imgCat }) => {
  return (
    <section className='card'>
      <img src={imgCat} />
      <h3>{fact} </h3>
    </section>
  )
}

FactCard.propTypes = {
  fact: PropTypes.string,
  imgCat: PropTypes.string
}
