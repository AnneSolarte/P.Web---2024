import './App.css'
import React, { useState, useEffect, useReducer } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Filters } from './components/Filters/Filters'
import { List } from './components/List/List'
import { saveStorage } from './helpers/saveStorage'
import { ToDoReducer } from './reducers/ToDoReducer'

const initialState = JSON.parse(localStorage.getItem('tasks')) ?? []

function App () {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [tasks, dispatch] = useReducer(ToDoReducer, initialState)

  useEffect(() => {
    saveStorage('tasks', tasks)
  }, [tasks])

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

  const handleToggleCompleted = (taskId) => {
    // setTasks(tasks.map(task => {
    //   if (task.id === taskId) {
    //     return { ...task, completed: !task.completed }
    //   }
    //   return task
    // }))
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
    <>
      <Header />
      <Form
        addTask={addTask}
      />
      <Filters
        selectedFilter={selectedFilter}
        onChange={changeSelectedFilter}
      />

      <List
        items={filteredTasks}
        onToggleCompleted={handleToggleCompleted}
        deleteTask={deleteTask}
      />
      <Footer
        allTasks={allTasks}
        completedTasks={completedTasks}
        onClick={clearAllCompletedTasks}
      />
    </>
  )
}

export default App
