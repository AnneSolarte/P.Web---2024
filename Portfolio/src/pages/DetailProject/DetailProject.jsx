import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectDetailCard } from '../../components/ProjectDetailCard/ProjectDetailCard'
import { getProjects } from '../../services/firebase'

export const DetailProject = () => {
  const { projectName, projects, setProjects } = useParams()

  useEffect(() => {
    getProjectsFB()
  }, [])

  const getProjectsFB = async () => {
    const savedProjects = await getProjects()
    setProjects(savedProjects)
  }

  console.log('projects in detail card', projects)
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
          image1={projectData.images.image1}
          image2={projectData.images.image2}
          image3={projectData.images.image3}
          image4={projectData.images.image4}
          project={projectData.project}
          categories={projectData.categories}
          OnClick={OnClick}
        />
      )}
    </div>
  )
}
