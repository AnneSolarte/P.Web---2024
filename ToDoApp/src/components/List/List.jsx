import './List.css'
import PropTypes from 'prop-types'
import { Task } from './Task/Task'

export const List = ({ items, onToggleCompleted, deleteTask }) => {
  return (
    <section className='list'>

      {items.length !== 0
        ? (items.map(({ id, text, completed }) => (
          <Task
            key={id}
            text={text}
            id={id}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            deleteTask={deleteTask}
          />
          )))
        : 'No hay tareas para mostrar'}

    </section>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}
