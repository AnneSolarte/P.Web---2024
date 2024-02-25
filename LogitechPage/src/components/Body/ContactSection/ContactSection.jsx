import PropTypes from 'prop-types'
import { TitleSections } from '../TitleSections/TitleSections'
import './ContactSection.css'
import { Form } from './Form/Form'
import { Info } from './Info/Info'
import dataSections from '../../../data/dataSections'

export function ContactSection ({ text, type, title }) {
  return (
    <div className='section'>
      <TitleSections
        title={title}
        text={text}
      />

      <div className='info-form'>
        <Info data={dataSections.contact} />
        <Form />

      </div>

    </div>
  )
}

ContactSection.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
