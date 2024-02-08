
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import carIcon from '../../resources/carIcon.jpg'
import infoIcon from '../../resources/infoIcon.png'

export default function BlockTextG512() {
  return (
    <section className='BlockTextG512'>
          <Text clas='title' text='G502 HERO WIRELESS'/>
          <Text clas='subTitle' text="Logitech's High Performance Wireless Gaming Mouse"/>
          <Text clas='text' text='G502 HERO features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, from 200 up to 25,600 DPI, and repositionable weights.'/>
          <Text clas='price' text='INR 4999'/>
          <Button icon={carIcon} text='ADD TO CART' press='on' id='carButton'/>
          <Button icon={infoIcon} text='MORE INFORMATION' id='InfoButton' />
    </section> 
  );    
}
