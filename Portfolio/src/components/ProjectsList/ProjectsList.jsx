import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProjectsList.css'
import { useContextHook } from '../../hooks/contextHook'

export const ProjectsList = () => {
  const { filteredProjects, projects } = useContextHook()
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)

  const projectsPerPage = 4
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  const navigateToProjectDetail = (id) => {
    const projectData = projects.find((project) => project.id === id)
    if (projectData) {
      navigate(`/projects/${projectData.name}`)
    }
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className='projects-list-div'>
      {currentProjects.map(project => (
        <div key={project.id} className='project-image-div'>
          <img
            onClick={() => navigateToProjectDetail(project.id)}
            src={project.image1}
            alt={`Image for ${project.name}`}
          />
        </div>
      ))}
      <div className='pagination-buttons'>
        {currentPage > 1 &&
          <button
            className='prev-button'
            onClick={prevPage}
          >{'<'}
          </button>}
        {filteredProjects.length > indexOfLastProject &&
          <button
            className='next-button'
            onClick={nextPage}
          >{'>'}
          </button>}
      </div>
    </div>
  )
}
