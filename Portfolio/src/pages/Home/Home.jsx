import './Home.css'
import characterImg from '../../assets/character.png'

export const Home = () => {
  return (
    <div className='page-div'>
      <div className='text-home-div'>
        <h1>Hi,</h1>
        <h1>I’m Anne </h1>
        <h3>A Ux and UI Designer and front ed developer from Cali, Colombia</h3>
      </div>

      <img src={characterImg} />
    </div>
  )
}
