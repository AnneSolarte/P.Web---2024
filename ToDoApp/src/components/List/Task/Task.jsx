import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { Button } from '../../elements/Button/Button'

export const Task = ({ text, id, onToggleCompleted, deleteTask }) => {
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
    </div>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}
