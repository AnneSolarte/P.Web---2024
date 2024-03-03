import './App.css'
import React, { useState } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Filters } from './components/Filters/Filters'
import { List } from './components/List/List'

function App () {
  const [taskslist, setTasksList] = useState([])
  const [text, setText] = useState('')

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

  return (
    <>
      <Header />
      <Form addTask={addTask} text={text} updateText={updateText} />
      <Filters />
      <List taskslist={taskslist} onToggleCompleted={handleToggleCompleted} />
      <Footer />
    </>
  )
}

export default App
