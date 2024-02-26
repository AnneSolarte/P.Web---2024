import { Button } from '../../Elements/Button/Button'
import { SectionsList } from '../TopBarSectionsList/TopBarSectionsList'
import { LogoImg } from '../../Elements/LogoImg/LogoImg'
import menuIcon from '../../../resources/menuIcon.png'
import { useState } from 'react'
import './TopBar.css'

export function TopBar () {
  const [display, setDisplay] = useState(false)

  const handleDisplayMenu = (e) => {
    setDisplay(!display)
    console.log('Display menu', display)
  }

  return (
    <section className='top-bar'>
      <img
        src={menuIcon}
        width={25}
        id='menu-icon-mobile'
        onClick={handleDisplayMenu}
      />
      <LogoImg
        width={100}
        id='logo-mobile'
      />
      <LogoImg
        width={150}
        id='logo-web'
      />

      <section className='icons-top-bar'>

        <SectionsList display={display} />

        <Button
          text='SIGN IN'
          press='none'
          id='Button'
        />
      </section>

    </section>
  )
}
