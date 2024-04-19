import React, { useState, useEffect } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import getCustomers from '../services/getCustomers'

export const ContextProvider = ({ children }) => {
  const [customers, setCustomers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getResponse()
  }, [])

  const getResponse = () => {
    getCustomers()
      .then((data) => {
        setCustomers(data)
      })
      .catch((error) => {
        console.error('Error obtaining customers data:', error)
      })
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredCustomers = customers.filter(item =>
    item.name.includes(searchTerm.trim()) ||
    String(item.age).includes(searchTerm.trim()) ||
    item.location.includes(searchTerm.trim()) ||
    item.gender.includes(searchTerm.trim()) ||
    item.income.includes(searchTerm.trim())

  )

  return (
    <Context.Provider value={{
      customers,
      searchTerm,
      handleSearch,
      filteredCustomers

    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
