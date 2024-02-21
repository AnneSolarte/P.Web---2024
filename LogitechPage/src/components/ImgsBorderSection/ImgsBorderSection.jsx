import side1 from '../../resources/side1G502.png'
import side2 from '../../resources/side2G502.png'
import ImgBorder from '../imgBorder/ImgBorder'
import './ImgsBorderSection.css'

export default function ImgsBorderSection () {
  return (
    <section className='imgs-border-section'>
      <ImgBorder
        img={side1}
        id='img-g502-side1'
      />
      <ImgBorder
        img={side2}
        id='img-g502-side2'
      />
    </section>

  )
}
