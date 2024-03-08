import { Button } from '../elements/Button/Button'
import PropTypes from 'prop-types'
import './Footer.css'

export const Footer = ({ tasks, handleClick }) => {
  const allTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed === true).length

  return (
    <section className='footer'>
      <p>{completedTasks} {completedTasks <= 1 & completedTasks !== 0 ? 'Tarea completada' : 'Tareas completadas'} de {allTasks} </p>
      <Button
        type='clear-completed'
        text='Clear All Completed'
        handleClick={handleClick}
        id={Date.now()}
      />
    </section>
  )
}

Footer.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}
