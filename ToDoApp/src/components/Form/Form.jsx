import PropTypes from 'prop-types'
import { useState } from 'react'
import './Form.css'

export const Form = ({ addTask }) => {
  const [text, setText] = useState('')
  const isSubmitDisabled = text.length < 1

  const updateText = (e) => {
    setText(e.target.value)
    console.log('textUpdate', text)
  }

  const onSubmmit = (e) => {
    e.preventDefault()
    addTask(text)
    setText('')
  }

  const onChangeText = (e) => {
    updateText(e)
  }

  return (
    <form onSubmit={onSubmmit} className='form'>
      <input
        type='text'
        placeholder='Task'
        value={text}
        className='task-input'
        onChange={onChangeText}
      />

      <input
        className='submit-input'
        type='submit'
        value='Add task'
        disabled={isSubmitDisabled}
      />
    </form>
  )
}

Form.propTypes = {
  addTask: PropTypes.func.isRequired

}
