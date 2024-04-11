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
      className={`button ${type}-button`}
      onClick={handleClickButton}
    > {
      text
    }
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}
