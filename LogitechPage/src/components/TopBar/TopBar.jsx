
import { Button } from '../Button/Button';
import { SectionsList } from '../TopBarSectionsList/TopBarSectionsList';
import { LogoImg } from '../LogoImg/LogoImg'
import menuIcon from '../../resources/menuIcon.png'
import React, {useState} from 'react'

export default function TopBar() {
  const [display, setDisplay] = useState('none');

  const displayMenu = (e, newDisplay) => {
    console.log('entro a display')
    console.log('display es', display)
    setDisplay(newDisplay)
  }

  return (
    <section className='TopBar'>
          <LogoImg width={150} id='logo'/>
          <Button text='SIGN IN' press='none' id='Button'/>
          <img src={menuIcon} width={30} id='menuIcon' onClick={ e => displayMenu(e, "flex")}/>
          <SectionsList display={display} />
          
    </section> 
  );
}