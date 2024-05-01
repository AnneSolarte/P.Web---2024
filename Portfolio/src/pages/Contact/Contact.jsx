import { Form } from '../../components/Form/Form'
import './Contact.css'
import { contactForm } from '../../data/forms'

export const Contact = () => {
  return (
    <div className='page-div'>
      <div className='contact-page-div'>
        <div className='contact-card'>
          <div className='black-line' />
          <h1>Get</h1>
          <h1>in Touch</h1>
          <p>Send me a message so we can talk</p>
        </div>
        <div>
          <Form
            dataForm={contactForm}
            submitText='SEND'
            type='contact'
          />
        </div>
      </div>

    </div>
  )
}
