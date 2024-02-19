import PropTypes from 'prop-types'

export default function ImgBorder (props) {
  const { img, id } = props
  return (
    <div className='img-border-section'>
      <img
        src={img}
        id={id}
      />
    </div>
  )
}

ImgBorder.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
