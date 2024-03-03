import PropTypes from 'prop-types'
import './Button.css'

export function Button ({ type, text, id }) {
  return (
    <button
      type={type}
      id={id}
      className='button'
    >{text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
