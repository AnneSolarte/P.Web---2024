import TopBar from './components/TopBar/TopBar'
import './App.css'
import mouseG502Img from './resources/mouseG502.PNG'
import ImgsBorder from './components/ImgsBorderSection/ImgsBorderSection'
import BlockTextG502 from './components/BlockTextG502/BlockTextG502'
import dataSections from './data/dataSections' // Importar el objeto con todos los datos

import { ItemsSection } from './components/ItemsSection/ItemsSection'

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

        {/* Utilizar los datos de products */}
        <ItemsSection
          type={dataSections.product.name}
          dataType={dataSections.product.items}
          text={dataSections.product.text}
        />

        {/* Utilizar los datos de services */}
        <ItemsSection
          type={dataSections.service.name}
          dataType={dataSections.service.items}
          text={dataSections.service.text}
        />

        {/* Utilizar los datos de members */}
        <ItemsSection
          type={dataSections.member.name}
          dataType={dataSections.member.items}
          text={dataSections.member.text}
        />

      </section>
    </>
  )
}
