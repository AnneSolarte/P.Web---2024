import PropTypes from 'prop-types'

export function TopBarSection (props) {
  const { text, press } = props
  return (
    <li className={press}>
      {text}
    </li>
  )
}

TopBarSection.propTypes = {
  text: PropTypes.string.isRequired,
  press: PropTypes.string.isRequired
}
