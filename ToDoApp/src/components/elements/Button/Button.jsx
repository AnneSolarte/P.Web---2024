import PropTypes from 'prop-types'
import './Button.css'

export function Button ({ type, text, id, img, handleClick }) {
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
      text || <img className='img-btn' id={`${type}-img`} src={img} />
    }
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}
