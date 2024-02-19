import PropTypes from 'prop-types'
import './Text.css'

export function Text ({ clas, text }) {
  return (
    <p className={clas}>
      {text}
    </p>
  )
}

Text.propTypes = {
  clas: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
