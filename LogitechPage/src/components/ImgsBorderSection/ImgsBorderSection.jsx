import ImgBorder from '../ImgBorder/ImgBorder'
import side1 from '../../resources/side1G502.png'
import side2 from '../../resources/side2G502.png'

export default function ImgsBorder(props) {
    const { img, id} = props
    return (
        <section className='sectionImgsBorder'>
              <ImgBorder img={side1} id='imgG502Side1'/>
              <ImgBorder img={side2} id='imgG502Side2'/>
        </section>
        
    )
}
