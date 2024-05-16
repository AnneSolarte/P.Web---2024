import React from 'react'
import { useContextHook } from '../../../hooks/contextHook'
import './GifItem.css'
import { Loader } from '../Loader/Loader'

export const GifItems = () => {
  const { gifs, errors, isFirstTime, searching, query } = useContextHook()
  return (
    <>
      <ul className='gifs-container'>

        {gifs.length !== 0
          ? (
            <>
              {gifs.map((gif, index) => (
                <li key={index} className='gif-item'>
                  <img src={gif.images.downsized.url} alt={gif.title} />
                  <h3>{gif.title}</h3>
                </li>
              ))}
              <h3>{gifs.length} results for "{query}"</h3>
            </>
            )
          : null}

      </ul>

      {
        isFirstTime
          ? null
          : (
            <h2>No GIFs to show</h2>
            )
      }
      {
        searching
          ? (
            <div className='searching-div'>
              <Loader />
              <h3>{gifs.length} results for "{query}"</h3>
            </div>
            )
          : null
      }

      {
        errors
          ? <h2>{errors} </h2>
          : null
      }
    </>

  )
}
