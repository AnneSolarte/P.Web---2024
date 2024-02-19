import PropTypes from 'prop-types'

export function Product (props) {
  const { text, img } = props
  return (
    <div className='product-section'>
      <img src={img} />
      <p>{text} </p>
    </div>
  )
}

Product.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
