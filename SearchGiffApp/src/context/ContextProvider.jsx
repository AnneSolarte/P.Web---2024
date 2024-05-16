import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { fetchGif } from '../services/fetch-gif'
import debounce from 'just-debounce-it'
const savedFavorites = localStorage.getItem('favorites')
const initialFavorites = savedFavorites ? JSON.parse(savedFavorites) : []

export const ContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState('')
  const [errors, setErrors] = useState(null)
  const [searching, setSearching] = useState(false)
  const isFirstTime = useRef(true)
  const [favorites, setFavorites] = useState(initialFavorites)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

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

  const toggleFavorite = (gif) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(gif)) {
        return prevFavorites.filter((fav) => fav !== gif)
      } else {
        return [...prevFavorites, gif]
      }
    })
  }

  return (
    <Context.Provider value={{
      query,
      setQuery,
      gifs,
      errors,
      isFirstTime,
      searching,
      toggleFavorite,
      favorites

    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
