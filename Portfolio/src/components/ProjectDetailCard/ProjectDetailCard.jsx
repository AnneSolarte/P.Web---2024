import React from 'react'
import backIcon from '../../assets/back-icon.png'
import behanceIcon from '../../assets/behance-icon.png'
import PropTypes from 'prop-types'

export const ProjectDetailCard = ({ title, description, behanceLink, image1, image2, image3, image4, OnClick }) => {
  const HandleGoBackPage = () => {
    OnClick()
  }

  return (
    <div className='project-detail-card-div'>
      <div>
        <img src={backIcon} onClick={HandleGoBackPage} />
        <h1>{title} </h1>
        <h3>{description} </h3>
        <a href={behanceLink}> <img src={behanceIcon} /></a>

      </div>

      <img src={image1} />
      <img src={image2} />
      <img src={image3} />
      <img src={image4} />

      <div className='category-div'>
        <h1>{} </h1>
      </div>

    </div>

  )
}

ProjectDetailCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  behanceLink: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  OnClick: PropTypes.func
}
