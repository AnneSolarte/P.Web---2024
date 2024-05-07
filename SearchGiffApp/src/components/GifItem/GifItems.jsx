import React from 'react'
import { useContextHook } from '../../hooks/contextHook'

export const GifItems = () => {
  const { gifs } = useContextHook()
  return (
    <ul>
      {
        gifs.length !== 0
          ? (
              gifs.map((gif, index) => {
                return (
                  <li key={index}>
                    <img src={gif.images.downsized.url} />
                    <h2>{gif.title} </h2>
                  </li>

                )
              })
            )
          : null

      }
    </ul>
  )
}
