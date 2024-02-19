import TopBar from './components/TopBar/TopBar'
import BlockTextG512 from './components/BlockTextG512/BlockTextG512'
import './App.css'
import mouseG502Img from './resources/mouseG502.PNG'
import ImgsBorder from './components/ImgsBorderSection/ImgsBorderSection'
import SectionProducts from './components/SectionProducts/SectionProducts'
import ServicesSections from './components/ServicesSection/ServicesSection'
import MembersSections from './components/MembersSection/MembersSection'

export default function App () {
  return (
    <>
      <TopBar />
      <section className='container'>
        <BlockTextG512 />
        <ImgsBorder />
        <img className='mouse-g502-img' src={mouseG502Img} />
        <SectionProducts />
        <ServicesSections />
        <MembersSections />

      </section>

    </>
  )
}
