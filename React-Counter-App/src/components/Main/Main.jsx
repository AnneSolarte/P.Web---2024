import { useState } from 'react'
import { Button } from '../Button/Button'
import './Main.css'
import dataPlanets from '../../data/dataPlanets'

export function Main () {
  const [counter, setCounter] = useState(0)
  const [planets, setPlanets] = useState([])
  const containerWidth = 1200
  const containerHeight = 750

  const generateRandomPlanet = () => {
    const randomIndex = Math.floor(Math.random() * dataPlanets.length)
    const randomImage = dataPlanets[randomIndex]
    const randomX = Math.floor(Math.random() * (containerWidth - 100))
    const randomY = Math.floor(Math.random() * (containerHeight - 100))
    const randomSize = Math.floor(Math.random() * 100) + 50

    return { image: randomImage, x: randomX, y: randomY, size: randomSize }
  }

  const handleClickCounter = (valor) => {
    if (valor === 'increase') {
      setCounter(counter + 1)
      const newPlanet = generateRandomPlanet()
      setPlanets([...planets, newPlanet])
    } else if (counter !== 0 && valor === 'decrease') {
      setCounter(counter - 1)
      setPlanets(planets.slice(0, -1))
    } else if (valor === 'reset') {
      setCounter(0)
      setPlanets([])
    }
  }

  return (
    <>
      <section className='container'>

        {planets.map((planet, index) => (
          <img
            key={index}
            src={planet.image}
            alt='Random Planet'
            style={{
              position: 'absolute',
              left: planet.x,
              top: planet.y,
              width: planet.size,
              height: planet.size
            }}
            className='planet'
          />
        ))}

        <section className='buttons'>
          <div className='horizontal-buttons'>
            <Button
              type='decrease'
              text='-'
              handleClickCounter={handleClickCounter}
            />
            <h1>{counter} </h1>
            <Button
              type='increase'
              text='+'
              handleClickCounter={handleClickCounter}
            />
          </div>

          <Button
            type='reset'
            text='Reset'
            handleClickCounter={handleClickCounter}
          />
        </section>
      </section>

    </>

  )
}
