import React, { useState, useReducer } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { ToDoReducer } from '../reducers/ToDoReducer'
const initialState = JSON.parse(localStorage.getItem('tasks')) ?? []

export const ContextProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [editing, setEditing] = useState(false)
  const [idEditing, setIdEditing] = useState('')
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

  const editTask = (id, newTitle) => {
    const editedTask = {
      id,
      text: newTitle
    }

    const deleteAction = {
      type: 'edit',
      payload: editedTask
    }

    dispatch(deleteAction)
  }

  const changeEditState = (id) => {
    setEditing(!editing)
    setIdEditing(id)
  }

  const onToggleCompleted = (id, checked) => {
    console.log('changing toggle')
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
      onToggleCompleted,
      changeSelectedFilter,
      filteredTasks,
      allTasks,
      completedTasks,
      editing,
      setEditing,
      editTask,
      changeEditState,
      idEditing,
      setIdEditing
    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
