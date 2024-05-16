import { NavLink } from 'react-router-dom'
import { navClient } from '../../data/navlinks'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className='nav'>

      <h1>Search Giff App</h1>

      <ul>
        {navClient.map(link => (
          <li
            key={link.id}
            id={'li-' + link.text}
          >
            <NavLink
              to={link.url}
              activeclassname='active'
            >
              <img
                className='icon-nav-img'
                id={'icon-' + link.text}
                src={link.icon}
              />
              <label>
                {link.text}
              </label>
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  )
}
