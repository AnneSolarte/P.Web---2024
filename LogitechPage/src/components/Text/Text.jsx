import PropTypes from 'prop-types'
export function Text (props) {
  const { clas, text } = props
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
