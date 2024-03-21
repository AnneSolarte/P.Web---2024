import './List.css'
import PropTypes from 'prop-types'
import { Task } from './Task/Task'
import { useContextHook } from '../../hooks/contextHook'

export const List = () => {
  const { filteredTasks } = useContextHook()
  return (
    <section className='list'>

      {filteredTasks.length !== 0
        ? (filteredTasks.map(({ id, text, completed }) => (
          <Task
            key={id}
            text={text}
            id={id}
            completed={completed}
          />
          )))
        : 'No tasks to show'}

    </section>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}
