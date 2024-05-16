import './ItemsList.css'
import { useContextHook } from '../../hooks/contextHook'
import PropTypes from 'prop-types'
import React from 'react'
import heartFill from '../../assets/fav-full-icon.png'
import heartEmpty from '../../assets/fav-empty-icon.png'

export const ItemsList = ({ items, screen, query }) => {
  const { toggleFavorite, favorites } = useContextHook()

  const isFavorite = (item) => favorites.includes(item)
  return (
    <div className='items-list-div'>
      {items.length !== 0
        ? (
          <>
            <ul className='gifs-container'>
              {items.map((gif, index) => (
                <React.Fragment key={index}>
                  <li className='gif-item'>
                    <button
                      onClick={() => toggleFavorite(gif)}
                      className='favorite-button'
                    >
                      <img
                        src={isFavorite(gif) ? heartFill : heartEmpty}
                        className='img-button'
                      />
                    </button>
                    <img
                      src={gif.images.downsized.url}
                      alt={gif.title}
                      className='img-gif'
                    />
                    <h3>{gif.title}</h3>
                  </li>
                </React.Fragment>
              ))}
            </ul>

            {screen === 'home'
              ? (
                <div>
                  <h3>{items.length} results for "{query}"</h3>
                </div>
                )
              : screen === 'favorites'
                ? (
                  <div>
                    <h3>{items.length} favorite items</h3>
                  </div>
                  )
                : null}
          </>
          )
        : null}
    </div>
  )
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  screen: PropTypes.oneOf(['home', 'favorites']).isRequired,
  query: PropTypes.string
}
