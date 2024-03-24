import './Header.css'
import img from '../../assets/logo_icon.png'

export const Header = () => {
  return (
    <section className='header-section'>
      <img id='logo-header-img' src={img} />
      <h1>To Do App</h1>
    </section>

  )
}
