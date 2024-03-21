import './App.css'
import React, { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Filters } from './components/Filters/Filters'
import { List } from './components/List/List'
import { saveStorage } from './helpers/saveStorage'
import { useContextHook } from './hooks/contextHook'
import { EditPopUp } from './components/EditPopUp/EditPopUp'

function App () {
  const { tasks, editing } = useContextHook()

  useEffect(() => {
    saveStorage('tasks', tasks)
  }, [tasks])

  return (
    <>
      <Header />
      <Form />
      <Filters />
      <List />
      {
        editing
          ? (
            <EditPopUp />
            )
          : null
      }
      <Footer />

    </>
  )
}

export default App
