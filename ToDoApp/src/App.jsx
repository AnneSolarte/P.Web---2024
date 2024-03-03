import './App.css'
import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Filters } from './components/Filters/Filters'
import { List } from './components/List/List'

function App () {
  const [taskslist, setTasksList] = useState([])
  const [showedTasks, setshowedTasks] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('Task List', taskslist)
    console.log('Task showed', showedTasks)
    console.log('selected Filter', selectedFilter)
    switch (selectedFilter) {
      case 'all':
        setshowedTasks(taskslist)
        break
      case 'completed':
        setshowedTasks(taskslist.filter(task => task.completed === true))
        break
      case 'pending':
        setshowedTasks(taskslist.filter(task => task.completed !== true))
        break
      default:
        break
    }
  }, [taskslist, selectedFilter, showedTasks])

  const allTasks = taskslist.length
  const completedTasks = taskslist.filter(task => task.completed === true).length

  const addTask = (e, text) => {
    e.preventDefault()
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasksList([...taskslist, newTask])
    setText('')
  }

  const updateText = (e) => {
    setText(e.target.value)
    console.log('textUpdate', text)
  }

  const handleToggleCompleted = (taskId) => {
    setTasksList(taskslist.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    }))
  }

  const changeFilterList = (e) => {
    setSelectedFilter(e.target.value)
  }

  return (
    <>
      <Header />
      <Form addTask={addTask} text={text} updateText={updateText} />
      <Filters selectedFilter={selectedFilter} changeFilterList={changeFilterList} />
      <List showedTasks={showedTasks} onToggleCompleted={handleToggleCompleted} />
      <Footer completedTasks={completedTasks} allTasks={allTasks} />
    </>
  )
}

export default App
