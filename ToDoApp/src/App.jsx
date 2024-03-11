import './App.css'
import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Filters } from './components/Filters/Filters'
import { List } from './components/List/List'
import { saveStorage } from './helpers/saveStorage'

function App () {
  const [tasks, setTasks] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (savedTasks) {
      setTasks(savedTasks)
    } else {
      console.log('No tasks stored in local storage')
    }
  }, [])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
    saveStorage('tasks', newTask)
  }

  const deleteTask = (idTask) => {
    const newTasks = tasks.filter(task => task.id !== idTask)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const handleToggleCompleted = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
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

  const changeFilterList = (e) => {
    const filterValue = e.target.value
    setSelectedFilter(filterValue)
  }

  const clearAllCompletedTasks = () => {
    const newTasks = tasks.filter(task => task.completed !== true)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <>
      <Header />
      <Form
        addTask={addTask}
      />
      <Filters
        selectedFilter={selectedFilter}
        changeFilterList={changeFilterList}
      />

      <List
        items={filteredTasks}
        onToggleCompleted={handleToggleCompleted}
        deleteTask={deleteTask}
      />
      <Footer
        tasks={tasks}
        handleClick={clearAllCompletedTasks}
      />
    </>
  )
}

export default App
