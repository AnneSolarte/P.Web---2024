import './Body.css'
import { Button } from './Button/Button'
import { FactCard } from './FactCard/FactCard'
import { fetchFact } from '../../services/fetch-fact'
import { useEffect, useState } from 'react'
import { fetchImg } from '../../services/fetch-img'
import { getTextImg } from '../../utils/getImgText'
import { Loader } from './Loader/Loader'

export const Body = () => {
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

  useEffect(() => {
    getFactResponse()
  }, [])

  useEffect(() => {
    if (!fact) {
      return
    }
    setImgCat(null)
    const text = getTextImg(fact)
    console.log(text)
    getImgResponse(text)
    setIsLoading(true)
  }, [fact])

  return (
    <>
      {
        isLoading
          ? <Loader />
          : (
            <FactCard fact={fact} imgCat={imgCat} error={error} />
            )
    }

      <Button type='new-fact' text='New Fact' id={1} handleClick={getFactResponse} />
    </>
  )
}
