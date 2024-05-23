import './FormAddProject.css'
import PropTypes from 'prop-types'
import { useContextHook } from '../../hooks/contextHook'
import { useState, useEffect } from 'react'
import { addProject } from '../../services/firebase'

export const FormAddProject = ({ submitText, checkboxData, dataForm }) => {
  const { formData, setFormData } = useContextHook()
  const [categories, setCategories] = useState({})

  useEffect(() => {
    if (formData.categories) {
      setCategories(formData.categories)
    }
  }, [formData.categories])

  const onSubmit = (e) => {
    e.preventDefault()

    // Crea el objeto categoriesObject desde el estado de categories
    const categoriesObject = checkboxData.reduce((acc, checkbox) => {
      acc[checkbox.name] = categories[checkbox.name] || false
      return acc
    }, {})

    // Actualiza formData con categories
    const updatedDataUser = {
      ...formData,
      categories: categoriesObject
    }

    // Añade el nombre formateado a los datos del proyecto
    const title = updatedDataUser.title
    if (title) {
      const name = title.toLowerCase().replace(/\s+/g, '')
      const dataWithName = { ...updatedDataUser, name }
      console.log(dataWithName)
      setFormData(dataWithName)
      addProject(dataWithName)
    } else {
      console.log('Error: No se proporcionó un título en el formulario')
    }
  }

  const onChangeText = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setCategories(prevState => ({
        ...prevState,
        [name]: checked
      }))
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  return (
    <div className='form-add-project-card'>
      <form onSubmit={onSubmit}>
        <div className='form-add-project-div'>
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
                  value={formData[field.name] || ''}
                  onChange={onChangeText}
                  id={'input-' + field.name}
                />
                )
          ))}
        </div>

        <div>
          {checkboxData.map(checkbox => (
            <label key={checkbox.id}>
              <input
                type='checkbox'
                name={checkbox.name}
                checked={categories[checkbox.name] || false} // Usar el estado de categorías
                onChange={onChangeText}
              />
              {checkbox.label}
            </label>
          ))}
        </div>

        <input
          className='submit-input-add-project'
          type='submit'
          value={submitText}
        />
      </form>
    </div>
  )
}

FormAddProject.propTypes = {
  dataForm: PropTypes.array,
  checkboxData: PropTypes.array,
  submitText: PropTypes.string
}
