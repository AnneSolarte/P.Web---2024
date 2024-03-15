import React, { useState, useReducer } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { ToDoReducer } from '../reducers/ToDoReducer'
const initialState = JSON.parse(localStorage.getItem('tasks')) ?? []

export const ContextProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [tasks, dispatch] = useReducer(ToDoReducer, initialState)

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }

    const addAction = {
      type: 'add',
      payload: newTask
    }

    dispatch(addAction)
  }

  const deleteTask = (id) => {
    const deleteAction = {
      type: 'delete',
      payload: id
    }

    dispatch(deleteAction)
  }

  const handleToggleCompleted = (id, checked) => {
    const toggleAction = {
      type: 'change-toggle',
      payload: {
        id, checked
      }
    }

    dispatch(toggleAction)
  }

  const filteredTasks = tasks.filter(task => {
    if (selectedFilter === 'completed') {
      return task.completed
    }
    if (selectedFilter === 'pending') {
      return !task.completed
    }
    return task
  })

  const changeSelectedFilter = (e) => {
    const filterValue = e.target.value
    setSelectedFilter(filterValue)
  }

  const clearAllCompletedTasks = () => {
    const deleteAllCompletedAction = {
      type: 'delete-all-completed'
    }

    dispatch(deleteAllCompletedAction)
  }

  const allTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed === true).length

  return (
    <Context.Provider value={{
      tasks,
      selectedFilter,
      addTask,
      deleteTask,
      clearAllCompletedTasks,
      handleToggleCompleted,
      changeSelectedFilter,
      filteredTasks,
      allTasks,
      completedTasks
    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
