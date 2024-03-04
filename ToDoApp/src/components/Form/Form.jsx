import PropTypes from 'prop-types'
import './Form.css'

export const Form = ({ addTask, text, updateText }) => {
  const addTaskSubmmit = (e) => {
    addTask(e, text)
  }

  return (
    <form onSubmit={addTaskSubmmit} className='form'>
      <input
        type='text'
        placeholder='Task'
        value={text}
        className='task-input'
        onChange={(e) => updateText(e)}
      />

      <input
        className='submit-input'
        type='submit'
        value='Add task'
        disabled={text.length === 0}
      />
    </form>
  )
}

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  updateText: PropTypes.func.isRequired
}
