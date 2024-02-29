import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Filters } from './components/Filters/Filters'
import { List } from './components/List/List'

function App () {
  return (
    <>
      <Header />
      <Form />
      <Filters />
      <List />
      <Footer />
    </>
  )
}

export default App
