import React, { useState } from 'react'
import { useContextHook } from '../../hooks/contextHook'

export const EditPopUp = () => {
  const { setEditing, idEditing, editTask } = useContextHook()
  const [text, setText] = useState('')
  const isSubmitDisabled = text.length < 1

  const updateText = (e) => {
    setText(e.target.value)
    console.log('textUpdate', text)
  }

  const onSubmmit = (e) => {
    console.log('En onSubmit popup')
    e.preventDefault()
    setEditing(false)
    editTask(idEditing, text)
    setText('')
  }

  const onChangeText = (e) => {
    updateText(e)
  }

  return (
    <form onSubmit={onSubmmit} className='form'>
      <input
        type='text'
        placeholder='New title'
        value={text}
        className='task-input'
        onChange={onChangeText}
      />

      <input
        className='submit-input'
        type='submit'
        value='Edit task'
        disabled={isSubmitDisabled}

      />
    </form>
  )
}
