import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Home } from '../screens/Home/Home'
import { Favorites } from '../screens/Favorites/Favorites'

export const Router = () => {
  return (
    <BrowserRouter>

      <Header />

      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />

        </Routes>
      </section>

    </BrowserRouter>
  )
}
