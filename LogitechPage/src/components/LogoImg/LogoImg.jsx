import logo from '../../resources/logo.png'
import PropTypes from 'prop-types'

export function LogoImg (props) {
  const { width, id } = props
  return (
    <img
      src={logo}
      width={width}
      id={id}
    />
  )
}

LogoImg.propTypes = {
  width: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}
