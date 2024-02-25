import PropTypes from 'prop-types'
import { ProductItem } from './ProductItem/ProductItem'
import { ServiceItem } from './ServiceItem/ServiceItem'
import { MemberItem } from './MemberItem/MemberItem'

export function Item ({ type, title, text, img }) {
  switch (type) {
    case 'product':
      return <ProductItem title={title} img={img} />
    case 'service':
      return <ServiceItem text={text} img={img} title={title} />
    case 'member':
      return <MemberItem title={title} img={img} />
    default:
      throw new Error(`Tipo de item desconocido: ${type}`)
  }
}

Item.propTypes = {
  type: PropTypes.oneOf(['product', 'service', 'member']).isRequired,
  text: PropTypes.string || undefined,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
