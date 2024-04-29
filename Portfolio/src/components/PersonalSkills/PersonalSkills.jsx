import React from 'react'
import { personalSkills } from '../../data/about'

export const PersonalSkills = () => {
  return (
    <div className='personal-skills-div'>
      <h2>Personal Skills</h2>
      {personalSkills.map((item, index) => (
        <div key={index} className='personal-skills-item'>
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}
