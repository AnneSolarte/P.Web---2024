import './App.css'
import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    console.log('list', taskslist)
  }, [taskslist])

  const updateText = (e) => {
    setText(e.target.value)
    console.log('textUpdate', text)
  }

  return (
    <>
      <Header />
      <Form addTask={addTask} text={text} updateText={updateText} />
      <Filters />
      <List taskslist={taskslist} />
      <Footer />
    </>
  )
}

export default App
