import { Filters } from '../../components/Filters/Filters'
import { ProjectsList } from '../../components/ProjectsList/ProjectsList'
import './Projects.css'
export const Projects = () => {
  return (
    <div className='page-div'>
      <div>
        <h1>Projects</h1>
        <Filters />
        <ProjectsList />
      </div>

    </div>
  )
}
