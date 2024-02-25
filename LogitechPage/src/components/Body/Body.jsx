import BlockTextG502 from './BlockTextG502/BlockTextG502'
import { ItemsSection } from './ItemsSection/ItemsSection'
import dataSections from '../../data/dataSections' // Importar el objeto con todos los datos
import { ContactSection } from './ContactSection/ContactSection'

export function Body () {
  return (
    <>
      <section className='container'>
        <BlockTextG502 />

        {/* Utilizar los datos de products */}
        <ItemsSection
          type={dataSections.product.type}
          dataType={dataSections.product.items}
          title={dataSections.product.title}
          text={dataSections.product.text}
        />

        {/* Utilizar los datos de services */}
        <ItemsSection
          type={dataSections.service.type}
          dataType={dataSections.service.items}
          title={dataSections.service.title}
          text={dataSections.service.text}
        />

        {/* Utilizar los datos de members */}
        <ItemsSection
          type={dataSections.member.type}
          dataType={dataSections.member.items}
          title={dataSections.member.title}
          text={dataSections.member.text}
        />

        <ContactSection
          type={dataSections.contact.type}
          text={dataSections.contact.text}
          title={dataSections.contact.title}
        />

      </section>
    </>
  )
}
