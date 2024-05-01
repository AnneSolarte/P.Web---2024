import { useState } from 'react'
import { Filters } from '../../components/Filters/Filters'
import { ProjectsList } from '../../components/ProjectsList/ProjectsList'
import './Projects.css'
import projects from '../../data/projects'

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'all') {
      return true
    }
    console.log(project.categories[selectedFilter])
    return project.categories[selectedFilter]
  })

  const changeSelectedFilter = (e) => {
    const filterValue = e.target.value
    setSelectedFilter(filterValue)
  }

  return (
    <div className='page-div'>
      <div className='projects-page-div'>
        <div className='projects-header'>
          <h1>Projects</h1>
          <Filters selectedFilter={selectedFilter} changeSelectedFilter={changeSelectedFilter} />
        </div>
        <ProjectsList filteredProjects={filteredProjects} />
      </div>

    </div>
  )
}
