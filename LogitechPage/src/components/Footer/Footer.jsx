import { ListFooter } from './ListFooter/ListFooter'
import dataFooter from '../../data/dataFooter'
import './Footer.css'

export function Footer () {
  return (
    <>
      <section className='footer'>

        <div className='list'>
          {Object.keys(dataFooter).map((key) => (

            <ListFooter
              key={dataFooter[key].id}
              items={dataFooter[key].items}
              title={dataFooter[key].title}
            />

          ))}
        </div>

        <hr />

        <p
          className='footer-text'
          id='text-end'
        >©2024 Logitech. Reservados todos los derechos
        </p>

      </section>
    </>
  )
}
