import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectDetailCard } from '../../components/ProjectDetailCard/ProjectDetailCard'
import projects from '../../data/projects'

export const DetailProject = () => {
  const { projectName } = useParams()

  const projectData = projects.find(project => project.name === projectName)
  console.log('params', projectName, 'data', projectData)

  const navigate = useNavigate()

  const OnClick = () => {
    navigate('/projects')
  }

  return (
    <div className='page-div'>

      {projectData && (
        <ProjectDetailCard
          title={projectData.title}
          description={projectData.description}
          behanceLink={projectData.behanceLink}
          image1={projectData.image1}
          image2={projectData.image2}
          image3={projectData.image3}
          image4={projectData.image4}
          project={projectData.project}
          categories={projectData.categories}
          OnClick={OnClick}
        />
      )}
    </div>
  )
}
