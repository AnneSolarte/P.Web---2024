import { LogoImg } from '../../../Elements/LogoImg/LogoImg'
import './Info.css'
import PropTypes from 'prop-types'

export function Info ({ data }) {
  const dataSocialMedia = data.media
  const dataChannels = data.channels
  return (
    <div className='info-section'>
      <LogoImg
        width={60}
        id='logo-info'
      />

      <div className='direct-channels-section'>
        <p
          className='text'
          id='info-title'
        >
          Direct Channel
        </p>

        {
        dataChannels.map(({ id, src, text }) => (
          <div key={id} className='chanel'>
            <img
              src={src}
              className='imgs-info'
            />
            <p className='text'>
              {text}
            </p>
          </div>
        ))
        }

      </div>

      <div className='social-media-section'>
        <p
          className='text'
          id='info-title'
        >
          Social media
        </p>
        <div className='imgs-section'>
          {
            dataSocialMedia.map(({ id, src }) => (
              <img
                key={id}
                src={src}
                className='imgs-info'
              />

            ))
            }
        </div>

      </div>
    </div>
  )
}

Info.propTypes = {
  data: PropTypes.object.isRequired
}
