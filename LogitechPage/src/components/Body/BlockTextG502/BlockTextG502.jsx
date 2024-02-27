import { Button } from '../../Elements/Button/Button'
import ImgsBorderSection from './ImgsBorderSection/ImgsBorderSection'
import './BlockTextG502.css'
import mouseG502Img from '../../../resources/mouseG502.png'
import dataBlockg502 from '../../../data/dataBlockg502'

export default function BlockTextG502 () {
  return (
    <section className='block-text-g502'>
      <div>
        {dataBlockg502.map(({ id, text, clas }) => (
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
