import { Button } from '../elements/Button/Button'
import './Footer.css'

export const Footer = () => {
  return (
    <section className='footer'>
      <p>Tareas completadas de </p>
      <Button
        type='clear-all-completed'
        text='Clear All Completed'
        id={crypto.randomUUID()}
      />
    </section>
  )
}
