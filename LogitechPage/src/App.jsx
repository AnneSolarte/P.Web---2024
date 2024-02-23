import TopBar from './components/TopBar/TopBar'
import './App.css'
import mouseG502Img from './resources/mouseG502.PNG'
import ImgsBorder from './components/ImgsBorderSection/ImgsBorderSection'
import BlockTextG502 from './components/BlockTextG502/BlockTextG502'

import { ItemsSection } from './components/ItemsSection/ItemsSection'
import { productsData } from './data/products'
import { servicesData } from './data/services'
import { membersData } from './data/members'

export default function App () {
  return (
    <>
      <TopBar />
      <section className='container'>
        <BlockTextG502 />
        <ImgsBorder />
        <img
          className='mouse-g502-img'
          src={mouseG502Img}
        />
        <ItemsSection
          type='product'
          dataType={productsData}
          text='Wich type are you looking for?'
        />
        <ItemsSection
          type='service'
          dataType={servicesData}
          text='Wich type are you looking for?'
        />
        <ItemsSection
          type='member'
          dataType={membersData}
          text='Wich type are you looking for?'
        />

      </section>

    </>
  )
}
