import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const NavItem = ({text, url}) => {
  return (
    <div>
        <NavLink to={url} className={({isActive}) => isActive ? "activated" : "nonActivated"}>{text}</NavLink>
    </div>
  )
}

NavItem.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string
  }