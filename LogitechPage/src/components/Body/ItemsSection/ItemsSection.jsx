import PropTypes from 'prop-types'
import { TitleSections } from '../TitleSections/TitleSections'
import { Slider } from './Slider/Slider'
import './ItemsSections.css'

export function ItemsSection ({ dataType, text, type, title }) {
  return (
    <div className='section'>
      <TitleSections
        title={title}
        text={text}
      />

      <Slider
        dataType={dataType}
        type={type}
      />

    </div>
  )
}

ItemsSection.propTypes = {
  text: PropTypes.string.isRequired,
  dataType: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
