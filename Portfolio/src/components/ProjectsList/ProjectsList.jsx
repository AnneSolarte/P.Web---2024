import React from 'react'
import projects from '../../data/projects'
import './ProjectsList.css'

export const ProjectsList = () => {
  return (
    <div className='projects-list-div'>
      {projects.map(project => (
        <div key={project.id} className='project-image-div'>
          <img src={project.image1} alt={`Image for ${project.name}`} />
        </div>
      ))}
    </div>
  )
}
