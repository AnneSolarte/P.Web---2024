import './GifItem.css'
import { Loader } from '../Loader/Loader'
import { useContextHook } from '../../hooks/contextHook'
import { ItemsList } from '../ItemsList/ItemsList'

export const GifItems = () => {
  const { gifs, errors, isFirstTime, searching, query } = useContextHook()

  return (
    <>
      <ul className='gifs-container'>
        <ItemsList items={gifs} screen='home' query={query} />
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
