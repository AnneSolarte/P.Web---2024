import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { Button } from '../../elements/Button/Button'

export const Task = ({ text, completed, id, onToggleCompleted, deleteTask }) => {
  const handleToggleCompleted = () => {
    onToggleCompleted()
  }

  return (
    <div className='task'>

      <div>
        <input
          type='checkbox'
          checked={completed}
          onChange={handleToggleCompleted}
        />
        <p>{text}</p>
      </div>

      <Button
        type='delete'
        text='Delete'
        id={id}
        handleClick={() => deleteTask(id)}
      />
    </div>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}
