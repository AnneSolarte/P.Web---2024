import './List.css'
import PropTypes from 'prop-types'
import { Task } from './Task/Task'

export const List = ({ showedTasks, onToggleCompleted }) => {
  return (
    <section className='list'>

      {showedTasks.length !== 0
        ? (showedTasks.map(({ id, text, completed }) => (
          <Task
            key={id}
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
          />
          )))
        : 'No hay tareas para mostrar'}

    </section>
  )
}

List.propTypes = {
  showedTasks: PropTypes.array.isRequired,
  onToggleCompleted: PropTypes.func.isRequired
}
