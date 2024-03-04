import PropTypes from 'prop-types'
import './Button.css'

export function Button ({ type, text, id, handleClick }) {
  const handleClickButton = () => {
    handleClick()
  }

  return (
    <button
      type={type}
      id={id}
      className='button'
      onClick={handleClickButton}
    >{text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
