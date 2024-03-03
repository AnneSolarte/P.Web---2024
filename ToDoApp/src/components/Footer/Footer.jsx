import { Button } from '../elements/Button/Button'
import PropTypes from 'prop-types'
import './Footer.css'

export const Footer = ({ allTasks, completedTasks }) => {
  return (
    <section className='footer'>
      <p>{completedTasks} {completedTasks <= 1 ? 'Tarea completada' : 'Tareas completadas'} de {allTasks} </p>
      <Button
        type='clear-all-completed'
        text='Clear All Completed'
        id={crypto.randomUUID()}
      />
    </section>
  )
}

Footer.propTypes = {
  allTasks: PropTypes.array.isRequired,
  completedTasks: PropTypes.array.isRequired
}
