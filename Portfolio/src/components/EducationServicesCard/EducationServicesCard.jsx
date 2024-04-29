import React from 'react'
import { education, services } from '../../data/about'

export const EducationServicesCard = () => {
  return (
    <div className='Education-services-card'>

      <div className='education-div'>
        <h2>Education</h2>
        {education.map((item, index) => (
          <div key={index} className='education-item'>
            <h3>{item.major}</h3>
            <h4>{item.date}</h4>
            <p>{item.place}</p>
          </div>
        ))}
      </div>

      <div className='services-div'>
        <h2>Services</h2>
        {services.map((item, index) => (
          <div key={index} className='services-item'>
            <p>{item}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
