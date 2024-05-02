import React, { useState } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import projects from '../data/projects'

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState('client')
  const [hiddenBar, setHiddenBar] = useState(false)
  const [user, setUser] = useState({})
  const [selectedFilter, setSelectedFilter] = useState('all')

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
      user,
      setUser
    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
