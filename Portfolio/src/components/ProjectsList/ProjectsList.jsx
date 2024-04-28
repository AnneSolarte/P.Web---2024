import React from 'react'
import projects from '../../data/projects'
import { useNavigate } from 'react-router-dom'
import './ProjectsList.css'

export const ProjectsList = () => {
  const navigate = useNavigate()

  const navigateToProjectDetail = (id) => {
    const projectData = projects.find((project) => project.id === id)
    if (projectData) {
      navigate(`/projects/${projectData.name}`)
    }
  }

  return (
    <div className='projects-list-div'>
      {projects.map(project => (
        <div key={project.id} className='project-image-div'>
          <img
            onClick={() => navigateToProjectDetail(project.id)}
            src={project.image1}
            alt={`Image for ${project.name}`}
          />
        </div>
      ))}
    </div>
  )
}
