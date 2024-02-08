
import { Button } from '../Button/Button';
import { SectionsList } from '../TopBarSectionsList/TopBarSectionsList';
import { LogoImg } from '../LogoImg/LogoImg'

export default function TopBar() {
  return (
    <section className='TopBar'>
          <LogoImg width={300} id='logo'/>
          <SectionsList/>
          <Button text='SIGN IN' press='none' id='SigInButton'/>
    </section> 
  );
}