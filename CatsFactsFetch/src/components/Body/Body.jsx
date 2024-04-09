import './Body.css'
import { Button } from './Button/Button'
import { FactCard } from './FactCard/FactCard'
import getFact from '../../services/fetch-fact'
import { useEffect, useState } from 'react'

export const Body = () => {
  const [fact, setFact] = useState('')

  const getFactResponse = async () => {
    const factResponse = await getFact()
    setFact(factResponse)
  }
  useEffect(() => {
    getFactResponse()
  }, [])

  return (
    <>
      {
        fact
          ? (
            <FactCard fact={fact} />
            )
          : null
    }

      <Button />
    </>
  )
}
