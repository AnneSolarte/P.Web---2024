import './Form.css'
import PropTypes from 'prop-types'
import { useContextHook } from '../../hooks/contextHook'

export const Form = ({ dataForm, submitText, submitImg, type }) => {
  const { user, setUser, setState } = useContextHook()

  const onSubmmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const dataUser = Object.fromEntries(formData.entries())
    console.log(dataUser)
    setUser(dataUser)
    if (type === 'login') {
      console.log('CHANGE TO DEV')
      setState('developer')
    }
  }

  const onChangeText = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={'form-' + type + '-card'}>
      <form onSubmit={onSubmmit}>
        <div className={'form-' + type + '-div'}>
          {dataForm.map((field, index) => (
            <input
              key={index}
              type='text'
              placeholder={field.placeholder}
              name={field.name}
              value={user[field.name] || ''}
              onChange={onChangeText}
              id={'input-' + field.name}
            />
          ))}
        </div>

        {
            submitText
              ? (
                <input
                  className={'submit-input-' + type}
                  type='submit'
                  value={submitText}
                />
                )
              : submitImg
                ? (
                  <input
                    className={'submit-input-' + type}
                    type='image'
                    src={submitImg}
                    alt='Submit'
                  />
                  )
                : null
        }

      </form>
    </div>
  )
}

Form.propTypes = {
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
