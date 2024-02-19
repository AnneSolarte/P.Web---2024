import PropTypes from 'prop-types'
import './Button.css'

export function Button (props) {
  const { text, press, id } = props
  return (
    <button
      className={`button ${press}`}
      id={id}
    >{text}
    </button>
  )
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  press: PropTypes.string.isRequired
}
