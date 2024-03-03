import './List.css'
import PropTypes from 'prop-types'
import { Task } from './Task/Task'

export const List = ({ tasksList }) => {
  return (
    <section className='list'>

      {tasksList && tasksList.length > 0
        ? (
            tasksList.map(({ id, text }) => (
              <Task
                key={id}
                text={text}
              />
            ))
          )
        : (
          <p>No hay tareas</p>
          )}

    </section>
  )
}

List.propTypes = {
  tasksList: PropTypes.array.isRequired
}
