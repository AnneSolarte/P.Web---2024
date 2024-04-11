import './Body.css'
import { Button } from './Button/Button'
import { FactCard } from './FactCard/FactCard'
import { fetchFact } from '../../services/fetch-fact'
import { useEffect, useState } from 'react'
import getImgCat from '../../services/fetch-img'
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
        console.error('Error al obtener el fact:', error)
        setError(error.message || 'Error al obtener el fact')
        setIsLoading(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const getImgResponse = async (text) => {
    console.log('En getImgResponse')
    console.log(typeof text)
    const ImgResponse = await getImgCat(text)
    console.log(ImgResponse)
    setImgCat(ImgResponse)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  const getTextImg = () => {
    const factDivided = fact.split(' ')
    const firstWords = factDivided.slice(0, 4).join(' ')
    console.log(firstWords)
    return firstWords
  }

  useEffect(() => {
    getFactResponse()
  }, [])

  useEffect(() => {
    if (!fact) {
      return
    }
    const text = getTextImg()
    console.log(text)
    setImgCat(null)
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
