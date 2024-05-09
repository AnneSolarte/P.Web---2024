import React, { useCallback, useEffect, useState } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { fetchGif } from '../services/fetch-gif'
import debounce from 'just-debounce-it'

export const ContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState('')
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    setGifs([])
    DebounceFetchGif(query)
    console.log(query)
  }, [query])

  const DebounceFetchGif = useCallback(
    debounce((query) => getGifResponse(query), 1000)
    , [query])

  const getGifResponse = (value) => {
    fetchGif(value)
      .then((response) => {
        setGifs(response)
      })
      .catch((error) => {
        const errorString = error.toString()
        setErrors(errorString)
        console.log(error)
        console.error('Error obtaining gif:', error)
      })
  }

  return (
    <Context.Provider value={{
      query,
      setQuery,
      gifs,
      errors

    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
