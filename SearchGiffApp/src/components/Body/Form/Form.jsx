import React from 'react'
import { useContextHook } from '../../../hooks/contextHook'
import './Form.css'

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
      <div className='query-input-box'>
        <label>Gif query word</label>
        <input
          type='text'
          placeholder='Gatos, pedro...'
          value={query}
          className='query-input'
          onChange={onChangeText}
        />
      </div>

      <input
        className='submit-input'
        type='submit'
        value='Add task'
        disabled={isSubmitDisabled}
      />
    </form>
  )
}
