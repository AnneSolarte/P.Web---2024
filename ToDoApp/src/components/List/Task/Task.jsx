import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { Button } from '../../elements/Button/Button'
import { useContextHook } from '../../../hooks/contextHook'

export const Task = ({ text, id }) => {
  const { onToggleCompleted, deleteTask, editTask } = useContextHook()
  const handleToggleCompleted = (e) => {
    onToggleCompleted(id, e.target.checked)
  }

  return (
    <div className='task'>

      <div>
        <input
          type='checkbox'
          onChange={(e) => handleToggleCompleted(e)}
        />
        <p>{text}</p>
      </div>

      <Button
        type='delete'
        text='Delete'
        id={id}
        handleClick={() => deleteTask(id)}
      />

      <Button
        type='edit'
        text='Edit'
        id={id}
        handleClick={() => editTask(id)}
      >
        <img src='' />
      </Button>
    </div>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}
