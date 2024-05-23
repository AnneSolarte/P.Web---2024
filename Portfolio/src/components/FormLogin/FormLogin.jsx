import './FormLogin.css'
import PropTypes from 'prop-types'
import { useContextHook } from '../../hooks/contextHook'
import { logIn } from '../../services/firebase'

export const FormLogin = ({ dataForm, submitImg }) => {
  const { formData, setFormData, setState } = useContextHook()

  const onSubmmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const dataUser = Object.fromEntries(formData.entries())
    console.log(dataUser)
    setFormData(dataUser)
    logIn(dataUser)
    console.log('CHANGE TO DEV')
    setState('developer')
  }

  const onChangeText = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='form-login-card'>
      <form onSubmit={onSubmmit}>
        <div className='form-login-div'>
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
          className='submit-input-login'
          type='image'
          src={submitImg}
          alt='Submit'
        />

      </form>
    </div>
  )
}

FormLogin.propTypes = {
  dataForm: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired
    })
  ).isRequired,
  submitText: PropTypes.string,
  submitImg: PropTypes.string,
  type: PropTypes.string
}
