import { NavLink } from 'react-router-dom'
import { navClient, navDevelop } from '../../data/links'
import './NavBar.css'
import iconCloseBar from '../../assets/iconCloseBar.png'
import iconMenuBar from '../../assets/iconMenuBar.png'
import { useState } from 'react'

export const NavBar = () => {
  const [state, setState] = useState('client')
  const [hiddenBar, setHiddenBar] = useState(false)

  const changeNavBar = (type) => {
    if (type === 'show') {
      setHiddenBar(false)
    } else if (type === 'hidden') {
      setHiddenBar(true)
    }
  }

  return (
    <nav className='nav'>
      {
        hiddenBar
          ? (
            <li id='li-menu-nav'>
              <img
                className='icon-nav-img'
                id='icon-menu-bar'
                src={iconMenuBar}
                onClick={() => changeNavBar('show')}
              />
            </li>
            )
          : state === 'client'
            ? (
              <ul>
                <li id='li-close-nav'>
                  <img
                    className='icon-nav-img'
                    id='icon-close-bar'
                    src={iconCloseBar}
                    onClick={() => changeNavBar('hidden')}
                  />
                </li>
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
                    </NavLink>
                  </li>
                ))}
              </ul>
              )
            : state === 'developer'
              ? (
                <ul>
                  <li id='li-close-nav'>
                    <img
                      className='icon-nav-img'
                      id='icon-close-bar'
                      src={iconCloseBar}
                    />
                  </li>
                  {navDevelop.map(link => (
                    <li key={link.id}>
                      <NavLink
                        to={link.url}
                        activeclassname='active'
                      >
                        <img
                          className='icon-nav-img'
                          id={'icon-' + link.text}
                          src={link.icon}
                        />
                      </NavLink>
                    </li>
                  ))}
                </ul>
                )
              : null
      }

    </nav>
  )
}
