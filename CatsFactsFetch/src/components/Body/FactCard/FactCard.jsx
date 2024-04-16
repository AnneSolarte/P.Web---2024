import React from 'react'
import PropTypes from 'prop-types'
import './FactCard.css'

export const FactCard = ({ fact, imgCat, error }) => {
  return (
    <>
      {
        (fact && imgCat)
          ? (
            <section className='card'>
              <img className='img' src={imgCat} />
              <p className='text'>{fact}</p>
            </section>
            )
          : (
            <h3>{error}</h3>
            )
      }
    </>

  )
}

FactCard.propTypes = {
  fact: PropTypes.string,
  imgCat: PropTypes.string,
  error: PropTypes.string
}
