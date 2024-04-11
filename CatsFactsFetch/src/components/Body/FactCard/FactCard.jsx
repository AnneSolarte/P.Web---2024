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
              <img src={imgCat} />
              <h3>{fact}</h3>
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
