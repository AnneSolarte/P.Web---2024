import React, { useEffect, useState } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { auth, getProjects } from '../services/firebase'

export const ContextProvider = ({ children }) => {
  const userState = localStorage.getItem('user')
  const [userIsLogged, setuserIsLogged] = useState(userState || false)
  const [hiddenBar, setHiddenBar] = useState(false)
  const [error, setError] = useState()
  const [formData, setFormData] = useState({})
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [projects, setProjects] = useState([])

  const logInUser = () => {
    setuserIsLogged(true)
    localStorage.setItem('user', true)
  }

  const logOutUser = () => {
    setuserIsLogged(false)
    localStorage.setItem('user', false)
  }

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

  const onAuthStateChanged = (auth, (user) => {
    if (user) {
      console.log('CHANGE TO DEV')
      setuserIsLogged(true)
    } else {
      console.log('user not login')
    }
  })

  const changeNavBar = (type) => {
    if (type === 'show') {
      setHiddenBar(false)
    } else if (type === 'hidden') {
      setHiddenBar(true)
    }
  }

  const changeState = (type) => {
    setuserIsLogged(type)
  }

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'all') {
      return true
    }
    console.log('filter', selectedFilter)
    console.log('filtered', project.categories[selectedFilter])
    console.log('projects in filter', projects)
    return project.categories[selectedFilter]
  })

  const changeSelectedFilter = (e) => {
    const filterValue = e.target.value
    setSelectedFilter(filterValue)
  }

  return (
    <Context.Provider value={{
      setuserIsLogged,
      userIsLogged,
      hiddenBar,
      changeNavBar,
      changeState,
      selectedFilter,
      filteredProjects,
      changeSelectedFilter,
      onAuthStateChanged,
      formData,
      setFormData,
      error,
      setError,
      projects,
      logInUser,
      logOutUser
    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
