import { useEffect, useState } from 'react'
import { fetchFact } from '../services/fetch-fact'
import { fetchImg } from '../services/fetch-img'
import { getTextImg } from '../utils/getImgText'

export const UseCatsFetch = () => {
  const [fact, setFact] = useState(null)
  const [imgCat, setImgCat] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    console.log('UseEffect', isLoading)
    getFactResponse()
  }, [])

  useEffect(() => {
    if (fact) {
      const text = getTextImg(fact)
      getImgResponse(text)
    }
  }, [fact])

  const getFactResponse = () => {
    console.log('inFact', isLoading)
    fetchFact()
      .then((fact) => {
        setFact(fact)
      })
      .catch((error) => {
        console.error('Error obtaining fact:', error)
        setError(error.message || 'Error obtaining fact')
      })
  }

  const getImgResponse = (text) => {
    console.log('inImage', isLoading)
    fetchImg(text)
      .then((ImgResponse) => {
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
    setIsLoading(true)
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
