
import { NavLink } from 'react-router-dom'
import links from '../../data/links'

export const NavBar = () => {
    
  return (
    <nav className='nav'>
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <NavLink to={link.url} activeclassname="active">{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}