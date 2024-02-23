import PropTypes from 'prop-types'
import { TitleSections } from '../TitleSections/TitleSections'
import { Item } from '../Item/Item'

export function ItemsSection ({ dataType, text, type }) {
  return (
    <div className='section'>
      <TitleSections
        title={type}
        text={text}
      />

      <section className={`${type}-section`}>
        {dataType.map(({ title, id, src, text }) => (
          <Item
            key={id}
            type={type}
            title={title}
            img={src}
            text={text}
          />
        ))}
      </section>
    </div>
  )
}

ItemsSection.propTypes = {
  text: PropTypes.string.isRequired,
  dataType: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}
