import { Button } from '../elements/Button/Button'
import './Footer.css'
import { useContextHook } from '../../hooks/contextHook'

export const Footer = () => {
  const { allTasks, completedTasks, clearAllCompletedTasks } = useContextHook()
  return (
    <section className='footer'>
      <h4>{completedTasks} {completedTasks <= 1 & completedTasks !== 0 ? ' Task completed' : 'Tasks completed'} out of {allTasks}
      </h4>

      <Button
        type='clear-completed'
        text='Clear All Completed'
        handleClick={clearAllCompletedTasks}
        id={Date.now()}
      />
    </section>
  )
}
