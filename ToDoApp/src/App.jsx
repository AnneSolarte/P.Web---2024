import './App.css'
import React, { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Filters } from './components/Filters/Filters'
import { List } from './components/List/List'
import { saveStorage } from './helpers/saveStorage'
import { useContextHook } from './hooks/contextHook'

function App () {
  const {
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
  } = useContextHook()

  useEffect(() => {
    saveStorage('tasks', tasks)
  }, [tasks])

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
