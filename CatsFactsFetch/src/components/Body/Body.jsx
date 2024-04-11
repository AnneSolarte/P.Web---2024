import './Body.css'
import { Button } from './Button/Button'
import { FactCard } from './FactCard/FactCard'
import getFact from '../../services/fetch-fact'
import { useEffect, useState } from 'react'
import getImgCat from '../../services/fetch-img'
import { Loader } from './Loader/Loader'

export const Body = () => {
  const [fact, setFact] = useState(null)
  const [imgCat, setImgCat] = useState(null)

  const getFactResponse = async () => {
    const factResponse = await getFact()
    setFact(factResponse)
  }

  const getImgResponse = async (text) => {
    console.log('En getImgResponse')
    console.log(typeof text)
    const ImgResponse = await getImgCat(text)
    console.log(ImgResponse)
    setImgCat(ImgResponse)
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
    getImgResponse(text)
  }, [fact])

  return (
    <>
      {
        (fact && imgCat)
          ? (
            <FactCard fact={fact} imgCat={imgCat} />
            )
          : <Loader />
    }

      <Button />
    </>
  )
}
