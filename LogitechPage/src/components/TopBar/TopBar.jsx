
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
        <img src={menuIcon} width={25} id='menuIconMobile' onClick={ e => displayMenu(e, "flex")}/>
        <LogoImg width={100} id='logoMobile'/>
        <LogoImg width={100} id='logoWeb'/>

            <section className='iconsTopBar'>
              <SectionsList display={display} />
              <Button text='SIGN IN' press='none' id='Button'/>
            </section>

    </section> 
  );
}