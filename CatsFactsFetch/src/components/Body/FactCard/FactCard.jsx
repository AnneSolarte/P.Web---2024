import React from 'react'
import PropTypes from 'prop-types'

export const FactCard = ({ fact }) => {
  return (
    <section className='Card'>
      <img src='' />
      <h3>{fact} </h3>
    </section>
  )
}

FactCard.propTypes = {
  fact: PropTypes.string
}
