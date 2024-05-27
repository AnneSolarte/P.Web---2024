import React, { useEffect, useState } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { getProjects } from '../services/firebase'

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState('client')
  const [hiddenBar, setHiddenBar] = useState(false)
  const [error, setError] = useState()
  const [formData, setFormData] = useState({})
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const savedProjects = await getProjects()
      const initialProjects = savedProjects || []
      setProjects(initialProjects)
    } catch (error) {
      console.error('Error fetching projects:', error)
      setError(error)
    }
  }

  console.log(projects)

  const changeNavBar = (type) => {
    if (type === 'show') {
      setHiddenBar(false)
    } else if (type === 'hidden') {
      setHiddenBar(true)
    }
  }

  const changeState = (type) => {
    setState(type)
  }

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
    <Context.Provider value={{
      setState,
      state,
      hiddenBar,
      changeNavBar,
      changeState,
      selectedFilter,
      filteredProjects,
      changeSelectedFilter,
      formData,
      setFormData,
      error,
      setError
    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
