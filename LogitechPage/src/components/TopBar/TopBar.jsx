
import { Button } from '../Button/Button';
import { SectionsList } from '../TopBarSectionsList/TopBarSectionsList';

export default function TopBar() {
  return (
    <section className='TopBar'>
          <SectionsList/>
          <Button text='SIGN IN' press='none'/>
    </section> 
  );
}