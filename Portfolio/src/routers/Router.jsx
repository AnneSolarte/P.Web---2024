
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Home } from '../pages/Home/Home'
import { Projects } from '../pages/Projects/Projects'
import { DetailProject } from '../pages/DetailProject/DetailProject'
import { About } from '../pages/About/About'
import { Contact } from '../pages/Contact/Contact'
import { ManagementPanel } from '../pages/ManagementPanel/ManagementPanel'
import { Login } from '../pages/Login/Login'



export const Router = () => {
  return (
    <BrowserRouter>

        <Header>

        </Header>

        <section className='content'>
            <Routes>
              <Route path='/' element={<Navigate to="/home"></Navigate>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/projects/:name' element={<DetailProject/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/management-panel' element={<ManagementPanel/>} />

          </Routes>
        </section>
        
    </BrowserRouter>
  )
}