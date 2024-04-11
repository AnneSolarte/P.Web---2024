import React from 'react'
import PropTypes from 'prop-types'

export const FactCard = ({ fact, imgCat }) => {
  return (
    <section className='Card'>
      <img src={imgCat} />
      <h3>{fact} </h3>
    </section>
  )
}

FactCard.propTypes = {
  fact: PropTypes.string,
  imgCat: PropTypes.string
}
