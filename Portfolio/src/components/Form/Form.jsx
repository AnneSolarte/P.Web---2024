import './Form.css'
import PropTypes from 'prop-types'
import { useContextHook } from '../../hooks/contextHook'

export const Form = ({ dataForm, submitText, submitImg, type, checkboxData }) => {
  const { user, setUser, setState } = useContextHook()

  const onSubmmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const dataUser = Object.fromEntries(formData.entries())

    // Construir el objeto de categorías con todos los valores en false si no están presentes en el estado del usuario
    const categoriesObject = checkboxData.reduce((acc, checkbox) => {
      acc[checkbox.name] = user.categories[checkbox.name] || false // Aquí se produce el error
      return acc
    }, {})

    const updatedDataUser = {
      ...dataUser,
      categories: categoriesObject
    }

    console.log(updatedDataUser)
    setUser(updatedDataUser)

    if (type === 'login') {
      console.log('CHANGE TO DEV')
      setState('developer')
    }
  }

  const onChangeText = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setUser(prevState => ({
        ...prevState,
        categories: {
          ...prevState.categories,
          [name]: checked
        }
      }))
    } else {
      setUser(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }
  return (
    <div className={'form-' + type + '-card'}>
      <form onSubmit={onSubmmit}>
        <div className={'form-' + type + '-div'}>
          {dataForm.map((field, index) => (
            field.type === 'image'
              ? (
                <input
                  key={index}
                  type='file'
                  id={'input-' + field.name}
                  name={field.name}
                  accept='image/*'
                  onChange={onChangeText}
                />
                )
              : (
                <input
                  key={index}
                  type='text'
                  placeholder={field.placeholder}
                  name={field.name}
                  value={user[field.name] || ''}
                  onChange={onChangeText}
                  id={'input-' + field.name}
                />
                )

          ))}
        </div>

        {
         type === 'add-project'
           ? (
               checkboxData.map(checkbox => (
                 <label key={checkbox.id}>
                   <input
                     type='checkbox'
                     name={checkbox.name}
                     checked={(user.categories && user.categories[checkbox.name]) || false}
                     onChange={onChangeText}
                   />
                   {checkbox.label}
                 </label>
               ))
             )
           : null
        }
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
  type: PropTypes.string.isRequired,
  checkboxData: PropTypes.array
}
