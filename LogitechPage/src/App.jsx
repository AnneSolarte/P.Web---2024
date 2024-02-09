import TopBar  from './components/TopBar/TopBar'
import BlockTextG512 from './components/BlockTextG512/BlockTextG512';
import './App.css'

export default function App() {
  return (
    <>
          <TopBar/>
          <section className='container'  >
              <BlockTextG512/>
          </section>
          
    </> 
  );
}