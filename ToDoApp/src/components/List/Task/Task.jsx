import PropTypes from 'prop-types'
import './Task.css'

export const Task = ({ text }) => {
  return (
    <div className='task'>
      <input type='checkbox' />
      <p>{text} </p>
    </div>

  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired
}
