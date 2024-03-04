import { Button } from '../elements/Button/Button'
import PropTypes from 'prop-types'
import './Footer.css'

export const Footer = ({ allTasks, completedTasks, handleClick }) => {
  return (
    <section className='footer'>
      <p>{completedTasks} {completedTasks <= 1 ? 'Tarea completada' : 'Tareas completadas'} de {allTasks} </p>
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
  allTasks: PropTypes.number.isRequired,
  completedTasks: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}
