import { Button } from '../elements/Button/Button'
import './Footer.css'
import { useContextHook } from '../../hooks/contextHook'

export const Footer = () => {
  const { allTasks, completedTasks, clearAllCompletedTasks } = useContextHook()
  return (
    <section className='footer'>
      <p>{completedTasks} {completedTasks <= 1 & completedTasks !== 0 ? 'Tarea completada' : 'Tareas completadas'} de {allTasks} </p>
      <Button
        type='clear-completed'
        text='Clear All Completed'
        handleClick={clearAllCompletedTasks}
        id={Date.now()}
      />
    </section>
  )
}
