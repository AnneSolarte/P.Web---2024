import './FormAddProject.css'
import PropTypes from 'prop-types'
import { useContextHook } from '../../hooks/contextHook'
import { uploadImage, addProject } from '../../services/firebase'

export const FormAddProject = ({ submitText, dataForm }) => {
  const { formData, setFormData } = useContextHook()
  const onSubmit = async (e) => {
    e.preventDefault()
    const data = e.target
    const urlImages = await uploadImages(e)

    const dataUser = {
      id: '',
      title: data.title.value,
      name: data.title.value.toLowerCase(),
      description: data.description.value,
      project: data.project.value,
      behanceLink: data.project.value,
      images: urlImages,
      categories: {
        uxdesign: data.uxdesign.checked,
        uidesign: data.uidesign.checked,
        frontend: data.frontend.checked
      }
    }
    console.log(dataUser)
    setFormData(dataUser)
    addProject(dataUser)
  }

  const uploadImages = async (e) => {
    const data = e.target
    const imageNames = ['image1', 'image2', 'image3', 'image4']
    const uploadPromises = imageNames.map(imageName =>
      uploadImage(data[imageName].files[0], data.title.value)
    )
    const urlImages = await Promise.all(uploadPromises)
    console.log('Saved Images URL:', urlImages)
    return urlImages
  }

  const onChangeText = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const onChangeCheckbox = (e) => {
    const { name, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      categories: {
        ...prevState.categories,
        [name]: checked
      }
    }))
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
                />
                )
              : field.type === 'checkbox'
                ? (
                  <label key={index}>
                    <input
                      type='checkbox'
                      name={field.name}
                      onChange={onChangeCheckbox}
                    />
                    {field.label}
                  </label>
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
