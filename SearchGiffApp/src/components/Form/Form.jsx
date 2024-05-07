import React from 'react'
import { useContextHook } from '../../hooks/contextHook'

export const Form = () => {
  const { query, setQuery } = useContextHook()

  const isSubmitDisabled = query.length < 1

  const updateText = (e) => {
    setQuery(e.target.value)
    console.log('textUpdate', query)
  }

  const onChangeText = (e) => {
    updateText(e)
  }

  const onSubmmit = (e) => {
    e.preventDefault()
    setQuery('')
  }

  return (
    <form onSubmit={onSubmmit} className='form'>
      <input
        type='text'
        placeholder='Task'
        value={query}
        className='task-input'
        onChange={onChangeText}
      />

      <input
        className='button submit-input'
        type='submit'
        value='Add task'
        disabled={isSubmitDisabled}
      />
    </form>
  )
}
