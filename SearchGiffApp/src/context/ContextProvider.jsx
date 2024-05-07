import React, { useEffect, useState } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { fetchGif } from '../services/fetch-gif'

export const ContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    getGifResponse()
  }, [query])

  const getGifResponse = () => {
    fetchGif(query)
      .then((response) => {
        setGifs(response)
      })
      .catch((error) => {
        console.error('Error obtaining gif:', error)
      })
  }
  return (
    <Context.Provider value={{
      query,
      setQuery,
      gifs

    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
