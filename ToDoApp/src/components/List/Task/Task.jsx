import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { Button } from '../../elements/Button/Button'
import { useContextHook } from '../../../hooks/contextHook'

export const Task = ({ text, id, completed }) => {
  const { onToggleCompleted, deleteTask, changeEditState } = useContextHook()
  const handleToggleCompleted = (e) => {
    console.log('checked:', e.target.checked)
    onToggleCompleted(id, e.target.checked)
  }

  return (
    <div className='task'>

      <div>
        <input
          type='checkbox'
          checked={completed}
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
        handleClick={() => changeEditState(id)}
      >
        <img src='' />
      </Button>

    </div>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired

}
