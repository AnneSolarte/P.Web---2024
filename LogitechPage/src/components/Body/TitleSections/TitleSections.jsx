import PropTypes from 'prop-types'
import './TitleSections.css'

export function TitleSections ({ title, text }) {
  return (
    <section className='title-section'>
      <p className='section-title'>{title} </p>
      <p className='section-sub-title'>{text} </p>
      <a href='' className='section-link'>{'View more ->'}</a>
    </section>
  )
}

TitleSections.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
