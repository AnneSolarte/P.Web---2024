import { Form } from '../../components/Form/Form'
import './ManagementPanel.css'
import { addProject, checkboxData } from '../../data/forms'

export const ManagementPanel = () => {
  return (
    <div className='page-div'>
      <div className='management-panel-page'>
        <h1>Add project</h1>
        <Form
          dataForm={addProject}
          submitText='ADD'
          type='add-project'
          checkboxData={checkboxData}
        />
      </div>

    </div>
  )
}
