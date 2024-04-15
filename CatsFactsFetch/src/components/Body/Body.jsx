import './Body.css'
import { Button } from './Button/Button'
import { FactCard } from './FactCard/FactCard'
// import { useEffect } from 'react'
// import { getTextImg } from '../../utils/getImgText'
import { Loader } from './Loader/Loader'
import { UseCatsFetch } from '../../hooks/UseCatsFetch'
import imageCat1 from '../../assets/cat1.png'

export const Body = () => {
  const {
    fact,
    imgCat,
    isLoading,
    error,
    handleNewFact
  } = UseCatsFetch()

  return (
    <section className='body-section'>

      <img id='sticker-cat' src={imageCat1} />

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
    </section>
  )
}
