import './FavoriteGifItems.css'
import { useContextHook } from '../../hooks/contextHook'
import { ItemsList } from '../ItemsList/ItemsList'

export const FavoriteGifItems = () => {
  const { favorites } = useContextHook()

  return (
    <>
      <ul className='favorites-gifs-container'>
        <ItemsList items={favorites} screen='favorites' />
      </ul>

    </>

  )
}
