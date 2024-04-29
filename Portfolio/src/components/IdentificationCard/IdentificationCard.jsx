import React from 'react'
import './IdentificationCard.css'
import characterImg from '../../assets/character.png'
import { dataIdentification, socialNetworks } from '../../data/about'

export const IdentificationCard = () => {
  return (
    <div className='identification-card-div'>
      <div>
        <img src={characterImg} alt='Character' />
      </div>
      <div>
        <h3>Anne Solarte</h3>

        <div className='data-identification-div'>
          {dataIdentification.map((data, index) => (
            <div key={index} className='data-identification-item'>
              <p>{data.key}</p>
              <p>{data.value}</p>
            </div>
          ))}
        </div>

        <div className='social-networks-div'>
          {socialNetworks.map((network, index) => (
            <div key={index} className='social-networks-item'>
              <img src={network.icon} />
              <p>{network.value}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
