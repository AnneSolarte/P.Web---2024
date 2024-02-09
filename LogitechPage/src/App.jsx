import TopBar  from './components/TopBar/TopBar'
import BlockTextG512 from './components/BlockTextG512/BlockTextG512';
import './App.css'
import mouseG502Img from './resources/mouseG502.PNG'
import ImgsBorder from './components/ImgsBorderSection/ImgsBorderSection';

export default function App() {
  return (
    <>
          <TopBar/>
          <section className='container'  >
              <BlockTextG512/>
              <ImgsBorder/>
              <img className='mouseG02Img' src={mouseG502Img} />
              
          </section>
          
          
    </> 
  );
}