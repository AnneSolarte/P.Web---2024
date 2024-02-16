import { useState } from 'react'
import { Button } from '../Button/Button'

export function Main () {
  const [counter, setCounter] = useState(0)

  const handleClickCounter = (valor) => {
    if (valor === 'increase') {
      setCounter(counter + 1)
    } else if (counter !== 0 && valor === 'decrease') {
      setCounter(counter - 1)
    } else if (valor === 'reset') {
      setCounter(0)
    }
  }
  return (
    <>
      <section className='buttons'>
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
      </section>

      <Button
        type='reset'
        text='reset'
        handleClickCounter={handleClickCounter}
      />
    </>

  )
}
