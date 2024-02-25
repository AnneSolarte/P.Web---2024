import PropTypes from 'prop-types'
import './ServiceItem.css'

export function ServiceItem ({ title, text, img }) {
  return (
    <div className='service-item'>
      <img src={img} />

      <div className='service-text'>
        <p className='sub-title'>
          {title}
        </p>

        <p className='text'>
          {text}
        </p>
      </div>

    </div>
  )
}

ServiceItem.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
