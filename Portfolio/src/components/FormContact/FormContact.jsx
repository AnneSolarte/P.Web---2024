import PropTypes from 'prop-types'
import './FormContact.css'
import { useContextHook } from '../../hooks/contextHook'

export const FormContact = ({ dataForm, submitText }) => {
  const { formData, setFormData } = useContextHook()

  const onSubmmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const dataUser = Object.fromEntries(formData.entries())
    console.log(dataUser)
    setFormData(dataUser)
  }

  const onChangeText = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='form-contact-card'>
      <form onSubmit={onSubmmit}>
        <div className='form-contact-div'>
          {dataForm.map((field, index) => (
            <input
              key={index}
              type='text'
              placeholder={field.placeholder}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={onChangeText}
              id={'input-' + field.name}
            />
          ))}

        </div>

        <input
          className='submit-input-contact'
          type='submit'
          value={submitText}
        />

      </form>
    </div>
  )
}

FormContact.propTypes = {
  dataForm: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired
    })
  ).isRequired,
  submitText: PropTypes.string

}
