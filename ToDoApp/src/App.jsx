import './App.css'
import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Filters } from './components/Filters/Filters'
import { List } from './components/List/List'

function App () {
  const [tasks, setTasks] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    console.log('Task List', tasks)
  }, [tasks])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (idTask) => {
    setTasks(tasks.filter(task => task.id !== idTask))
  }

  const handleToggleCompleted = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    }))
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
    setTasks(tasks.filter(task => task.completed !== true))
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
