import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { Button } from '../../elements/Button/Button'
import { useContextHook } from '../../../hooks/contextHook'
import deleteicon from '../../../assets/delete_icon.png'
import editicon from '../../../assets/edit_icon.png'

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
        <p className={completed ? 'line-through-text' : ''}>{text}</p>
      </div>

      <div className='buttons-task'>
        <Button
          type='edit'
          text=''
          id={id}
          handleClick={() => changeEditState(id)}
          img={editicon}
        />

        <Button
          type='delete'
          text=''
          id={id}
          handleClick={() => deleteTask(id)}
          img={deleteicon}
        />

      </div>

    </div>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired

}
