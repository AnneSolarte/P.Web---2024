import './Body.css'
import { Button } from './Button/Button'
import { FactCard } from './FactCard/FactCard'
import { useEffect } from 'react'
import { getTextImg } from '../../utils/getImgText'
import { Loader } from './Loader/Loader'
import { UseCatsFetch } from '../../hooks/CatsFetch'

export const Body = () => {
  const {
    fact,
    imgCat,
    isLoading,
    error,
    getFactResponse,
    getImgResponse,
    handleNewFact
  } = UseCatsFetch()

  useEffect(() => {
    getFactResponse()
  }, [])

  useEffect(() => {
    if (fact) {
      const text = getTextImg(fact)
      getImgResponse(text)
    }
  }, [fact])

  return (
    <>
      {
        isLoading
          ? <Loader />
          : (
            <FactCard
              fact={fact}
              imgCat={imgCat}
              error={error}
            />
            )
    }

      <Button
        type='new-fact'
        text='New Fact'
        id={1}
        handleClick={handleNewFact}
      />
    </>
  )
}
