import { Text } from '../Text/Text'
import { Button } from '../Button/Button'

export default function BlockTextG512 () {
  return (
    <section className='block-text-g502'>
      <Text
        clas='title'
        text='G502 HERO WIRELESS'
      />
      <Text
        clas='sub-title'
        text="Logitech's High Performance Wireless Gaming Mouse"
      />
      <Text
        clas='text'
        text='G502 HERO features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, from 200 up to 25,600 DPI, and repositionable weights.'
      />
      <Text
        clas='price'
        text='INR 4999'
      />

      <section className='buttons-block-text-g502'>
        <Button
          text='ADD TO CART'
          press='on'
          id='carButton'
        />
        <Button
          text='MORE INFORMATION'
          press='off'
          id='InfoButton'
        />
      </section>

    </section>
  )
}
