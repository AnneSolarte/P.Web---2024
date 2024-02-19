import TopBar from './components/TopBar/TopBar'
import './App.css'
import mouseG502Img from './resources/mouseG502.PNG'
import ImgsBorder from './components/ImgsBorderSection/ImgsBorderSection'
import ServicesSections from './components/ServicesSection/ServicesSection'
import MembersSections from './components/MembersSection/MembersSection'
import BlockTextG502 from './components/BlockTextG502/BlockTextG502'
import ProductsSection from './components/ProductsSection/ProductsSection'

export default function App () {
  return (
    <>
      <TopBar />
      <section className='container'>
        <BlockTextG502 />
        <ImgsBorder />
        <img className='mouse-g502-img' src={mouseG502Img} />
        <ProductsSection />
        <ServicesSections />
        <MembersSections />

      </section>

    </>
  )
}
