import React from 'react'
import { softwareSkills } from '../../data/about'

export const SoftwareSkills = () => {
  const DesignSoftwareData = softwareSkills.DesignSoftware
  const DeveloperSoftwareData = softwareSkills.DeveloperSoftware

  return (
    <div className='softaware-skills-div'>
      <div className='design-software-div'>
        <h2>Design Software</h2>
        {DesignSoftwareData.icons.map((item, index) => (
          <div key={index} className='design-software-item'>
            <img src={item} alt='Design Software Icon' />
          </div>
        ))}
      </div>

      <div className='developer-software-div'>
        <h2>Developer Software</h2>
        {DeveloperSoftwareData.icons.map((item, index) => (
          <div key={index} className='developer-software-item'>
            <img src={item} alt='Developer Software Icon' />
          </div>
        ))}
      </div>
    </div>
  )
}
