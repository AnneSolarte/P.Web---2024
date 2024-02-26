import { useState } from 'react'
import './Form.css'

export function Form () {
  const [user, setUser] = useState({})

  const getDataUser = e => {
    e.preventDefault()

    const datos = e.target

    const dataUser = {
      name: datos.name.placeholder,
      email: datos.email.placeholder,
      subject: datos.subject.placeholder,
      message: datos.message.placeholder
    }

    setUser(dataUser)
    console.log(user)
  }

  const changeDataUser = e => {
    const inputName = e.target.name
    console.log('input name', inputName)

    setUser(prevState => ({ ...prevState, [inputName]: e.target.value }))
  }

  return (
    <section className='form-section'>
      <p className='text'>Feel free to send your message</p>

      <form onSubmit={getDataUser} className='form'>

        <div className='horizontal-inputs'>
          <input
            type='text'
            placeholder='Your name'
            name='name'
            className='input'
            onChange={changeDataUser}
          />
          <input
            type='email'
            placeholder='Your email'
            name='email'
            className='input'
            onChange={changeDataUser}
          />
        </div>

        <input
          type='text'
          placeholder='Subject'
          name='subject'
          className='input'
          onChange={changeDataUser}
        />
        <input
          type='text'
          placeholder='Message'
          name='message'
          className='input'
          id='input-message'
          onChange={changeDataUser}
        />

        <input className='button' type='submit' value='SUBMIT' />

      </form>
    </section>

  )
}
