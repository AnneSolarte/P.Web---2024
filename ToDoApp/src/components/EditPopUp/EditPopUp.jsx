import React, { useState } from 'react'
import { useContextHook } from '../../hooks/contextHook'
import './EditPopUp.css'
import { Button } from '../elements/Button/Button'
import closeicon from '../../assets/close_icon.png'

export const EditPopUp = () => {
  const { setEditing, idEditing, editTask, closePopUp, prevText } = useContextHook()
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
    <>
      <div className='opacity-div' />

      <form onSubmit={onSubmmit} className='pop-up-form'>

        <div className='header-pop-up'>
          <h2> Edit Task </h2>
          <Button
            type='close-pop-up'
            text=''
            id={idEditing}
            handleClick={closePopUp}
            img={closeicon}
          />
        </div>

        <input
          type='text'
          placeholder={prevText}
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
    </>

  )
}
