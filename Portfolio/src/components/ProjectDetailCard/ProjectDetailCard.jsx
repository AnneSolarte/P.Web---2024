import React from 'react'
import backIcon from '../../assets/back-icon.png'
import behanceIcon from '../../assets/behance-icon.png'
import PropTypes from 'prop-types'
import './ProjectDetailCard.css'

export const ProjectDetailCard = ({ title, description, behanceLink, images, OnClick, project, categories }) => {
  const HandleGoBackPage = () => {
    OnClick()
  }

  return (
    <div className='project-detail-card-div'>

      <div className='data-project-detail'>
        <img
          src={backIcon}
          onClick={HandleGoBackPage}
          className='back-icon'
        />
        <h1>{title} </h1>
        <p>{description} </p>
        <a
          href={behanceLink}
        >
          <img
            src={behanceIcon}
            className='behance-icon'
          />
        </a>

      </div>
      <div className='container'>

        <div className='item-0' />

        <div className='item-1'>
          <img src={images[0]} className='img-1' />
        </div>

        <div className='item-2'>
          <img src={images[1]} className='img-2' />
        </div>

        <div className='item-3'>
          <img src={images[2]} className='img-3' />
        </div>

        <div className='item-4'>
          <img src={images[3]} className='img-4' />
        </div>

        <div className='item-5'>
          <h2>{Object.keys(categories).filter((category) => categories[category]).join(', ').toLocaleUpperCase()}</h2>
          <p>{project} </p>
        </div>

      </div>

    </div>

  )
}

ProjectDetailCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  behanceLink: PropTypes.string,
  images: PropTypes.array,
  OnClick: PropTypes.func,
  project: PropTypes.string,
  categories: PropTypes.object
}
