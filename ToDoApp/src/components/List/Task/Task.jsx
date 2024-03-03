import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'

export const Task = ({ text, completed, onToggleCompleted }) => {
  const handleToggleCompleted = () => {
    onToggleCompleted()
  }

  return (
    <div className='task'>
      <input
        type='checkbox'
        checked={completed}
        onChange={handleToggleCompleted}
      />
      <p>{text}</p>
    </div>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleCompleted: PropTypes.func.isRequired
}
