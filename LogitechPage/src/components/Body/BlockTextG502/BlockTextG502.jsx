import { Button } from '../../Elements/Button/Button'
import ImgsBorderSection from './ImgsBorderSection/ImgsBorderSection'
import './BlockTextG502.css'
import mouseG502Img from '../../../resources/mouseG502.png'

export default function BlockTextG502 () {
  const mouseG502Data = [
    { text: 'G502 HERO WIRELESS', clas: 'title', id: crypto.randomUUID() },
    { text: "Logitech's High Performance Wireless Gaming Mouse", clas: 'sub-title', id: crypto.randomUUID() },
    { text: 'G502 HERO features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, from 200 up to 25,600 DPI, and repositionable weights.', clas: 'text', id: crypto.randomUUID() },
    { text: 'INR 4999', clas: 'price', id: crypto.randomUUID() }
  ]

  return (
    <section className='block-text-g502'>

      <div>
        {mouseG502Data.map(({ id, text, clas }) => (
          <p key={id} className={clas}>
            {text}
          </p>
        ))}

        <section className='buttons-block-text-g502'>
          <Button
            text='ADD TO CART'
            press='on'
            id='car-button'
          />
          <Button
            text='MORE INFORMATION'
            press='off'
            id='info-button'
          />
        </section>

        <ImgsBorderSection />
      </div>

      <img
        className='mouse-g502-img'
        src={mouseG502Img}
      />

    </section>
  )
}
