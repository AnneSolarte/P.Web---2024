import './List.css'
import PropTypes from 'prop-types'
import { Task } from './Task/Task'

export const List = ({ taskslist, onToggleCompleted }) => {
  return (
    <section className='list'>

      {
        taskslist.map(({ id, text, completed }) => (
          <Task
            key={id}
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
          />
        ))
      }

    </section>
  )
}

List.propTypes = {
  taskslist: PropTypes.array.isRequired,
  onToggleCompleted: PropTypes.func.isRequired
}
