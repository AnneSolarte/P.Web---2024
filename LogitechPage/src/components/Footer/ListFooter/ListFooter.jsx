import './ListFooter.css'
import PropTypes from 'prop-types'

export function ListFooter ({ title, items }) {
  return (
    <>
      <div className='list-footer'>
        <p className='footer-title'>{title} </p>
        <ul>
          {
            items.map(({ id, text }) => (
              <li
                key={id}
                className='footer-text'
              >
                {text}
              </li>
            ))
          }
        </ul>

      </div>
    </>
  )
}

ListFooter.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}
