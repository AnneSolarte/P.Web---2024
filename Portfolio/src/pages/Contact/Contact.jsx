import { Form } from '../../components/Form/Form'
import './Contact.css'
import { contactForm } from '../../data/forms'

export const Contact = () => {
  return (
    <div className='page-div'>
      <div>
        <h1>Get in Touch</h1>
        <p>Send me a message so we can talk</p>
      </div>
      <div>
        <Form dataForm={contactForm} submitText='SEND' />
      </div>

    </div>
  )
}
