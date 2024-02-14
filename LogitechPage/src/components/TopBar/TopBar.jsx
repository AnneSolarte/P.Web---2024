
import { Button } from '../Button/Button';
import { SectionsList } from '../TopBarSectionsList/TopBarSectionsList';
import { LogoImg } from '../LogoImg/LogoImg'
import menuIcon from '../../resources/menuIcon.png'
import React, {useState} from 'react'

export default function TopBar() {
  const [display, setDisplay] = useState(false);

  const handleDisplayMenu = (e) => {
    setDisplay(!display)
    console.log('Display menu', display)
  }

  return (
    <section className='TopBar'>
        <img src={menuIcon} width={25} id='menuIconMobile' onClick={ e => handleDisplayMenu()}/>
        <LogoImg width={100} id='logoMobile'/>
        <LogoImg width={100} id='logoWeb'/>

            <section className='iconsTopBar'>

              {
                display 
                ? (
                  <SectionsList/>
                )
                : null
                
              }
              
              <Button text='SIGN IN' press='none' id='Button'/>
            </section>

    </section> 
  );
}