import PropTypes from 'prop-types'
import './MemberItem.css'

export function MemberItem (props) {
  const { title, img } = props
  return (
    <div className='member-item'>
      <img src={img} />
      <p className='text'>
        {title}
      </p>

    </div>
  )
}

MemberItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
