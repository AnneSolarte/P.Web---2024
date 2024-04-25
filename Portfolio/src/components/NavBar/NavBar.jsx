
import { NavLink } from 'react-router-dom'
import {navClient} from '../../data/links'
import './NavBar.css'
import iconCloseBar from '../../assets/iconCloseBar.png'

export const NavBar = () => {
    
  return (
    <nav className='nav'>
      <ul>
        <li  id='li-close-nav'>
          <img className='icon-nav-img' id='icon-close-bar' src={iconCloseBar}></img> 
        </li>
        {navClient.map(link => (
          <li key={link.id} >
            <NavLink to={link.url} activeclassname="active" ><img className='icon-nav-img' id={'icon-' + link.text} src={link.icon}></img> </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}