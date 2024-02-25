import PropTypes from 'prop-types'
import './ProductItem.css'

export function ProductItem ({ title, img }) {
  return (
    <div className='product-item'>
      <img src={img} />
      <p>{title} </p>
    </div>
  )
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
