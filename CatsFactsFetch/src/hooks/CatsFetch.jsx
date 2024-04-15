import { useState } from 'react'
import { fetchFact } from '../services/fetch-fact'
import { fetchImg } from '../services/fetch-img'

export const UseCatsFetch = () => {
  const [fact, setFact] = useState(null)
  const [imgCat, setImgCat] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getFactResponse = () => {
    fetchFact()
      .then((fact) => {
        console.log('In FactFetch.then', fact)
        setFact(fact)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error obtaining fact:', error)
        setError(error.message || 'Error obtaining fact')
        setIsLoading(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const getImgResponse = (text) => {
    console.log('En getImgResponse')
    console.log(typeof text)
    fetchImg(text)
      .then((ImgResponse) => {
        console.log(ImgResponse)
        setImgCat(ImgResponse)
      })
      .catch((error) => {
        console.error('Error obtaining fact:', error)
        setError(error.message || 'Error obtaining fact')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleNewFact = () => {
    setFact(null)
    setImgCat(null)
    setError(null)
    getFactResponse()
  }

  return {
    fact,
    imgCat,
    isLoading,
    error,
    getFactResponse,
    getImgResponse,
    handleNewFact

  }
}
