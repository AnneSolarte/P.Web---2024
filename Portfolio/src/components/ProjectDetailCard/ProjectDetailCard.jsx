import React from 'react'
import backIcon from '../../assets/back-icon.png'
import behanceIcon from '../../assets/behance-icon.png'

export const ProjectDetailCard = ({ name, description, behanceLink, image }) => {
  return (
    <div>
      <button><img src={backIcon} /> </button>
      <h1>{name} </h1>
      <h3>{description} </h3>
      <a href={behanceLink}> <img src={behanceIcon} /></a>
      <img src={image} />
    </div>
  )
}
