import { Button } from '../elements/Button/Button'
import PropTypes from 'prop-types'
import './Footer.css'

export const Footer = ({ allTasks, completedTasks, onClick }) => {
  return (
    <section className='footer'>
      <p>{completedTasks} {completedTasks <= 1 & completedTasks !== 0 ? 'Tarea completada' : 'Tareas completadas'} de {allTasks} </p>
      <Button
        type='clear-completed'
        text='Clear All Completed'
        handleClick={onClick}
        id={Date.now()}
      />
    </section>
  )
}

Footer.propTypes = {
  allTasks: PropTypes.number.isRequired,
  completedTasks: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
