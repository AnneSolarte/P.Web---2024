import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { fetchGif } from '../services/fetch-gif'
import debounce from 'just-debounce-it'

export const ContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState('')
  const [errors, setErrors] = useState(null)
  const [searching, setSearching] = useState(false)
  const isFirstTime = useRef(true)

  useEffect(() => {
    console.log('isFirstTime?', isFirstTime)
    if (isFirstTime.current) {
      isFirstTime.current = query.length === ''
    } else {
      setGifs([])
      setSearching(true)
      DebounceFetchGif(query)

      console.log(query)
    }
  }, [query])

  console.log(isFirstTime)
  const DebounceFetchGif = useCallback(
    debounce((value) => getGifResponse(value), 500), [])

  const getGifResponse = (value) => {
    fetchGif(value)
      .then((response) => {
        setGifs(response)
        setSearching(false)
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
      errors,
      isFirstTime,
      searching

    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
