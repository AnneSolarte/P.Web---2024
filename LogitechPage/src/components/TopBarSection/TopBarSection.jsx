import PropTypes from 'prop-types'

export function Section (props) {
  const { text, press } = props
  return (
    <li className={press}>
      {text}
    </li>
  )
}

Section.propTypes = {
  text: PropTypes.string.isRequired,
  press: PropTypes.string.isRequired
}
