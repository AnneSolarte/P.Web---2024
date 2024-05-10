import React from 'react'
import { useContextHook } from '../../hooks/contextHook'
import './GifItem.css'

export const GifItems = () => {
  const { gifs, errors, isFirstTime } = useContextHook()
  return (
    <ul className='gifs-container'>
      {
        gifs.length !== 0
          ? (
              gifs.map((gif, index) => {
                return (
                  <li key={index} className='gif-item'>
                    <img src={gif.images.downsized.url} />
                    <h3>{gif.title} </h3>
                  </li>

                )
              })
            )
          : isFirstTime ? null : <h2>No GIFs to show</h2>

      }

      {
        errors
          ? <h2>{errors} </h2>
          : null
      }

    </ul>
  )
}
