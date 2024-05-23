import { FormAddProject } from '../../components/FormProject/FormAddProject'
import { addProjectFormData, checkboxData } from '../../data/forms'
import './ManagementPanel.css'

export const ManagementPanel = () => {
  return (
    <div className='page-div'>
      <div className='magement-panel-page-div'>
        <h1>Management Panel</h1>
        <FormAddProject
          dataForm={addProjectFormData}
          submitText='ADD'
          checkboxData={checkboxData}
        />
      </div>

    </div>
  )
}
