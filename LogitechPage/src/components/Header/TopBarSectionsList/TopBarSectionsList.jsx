import { TopBarSection } from '../TopBarSection/TopBarSection'
import PropTypes from 'prop-types'
import dataMenubar from '../../../data/dataMenuBar'

export function SectionsList ({ display }) {
  return (
    <nav className={!display ? 'hidden' : ''}>
      <ul>
        {
        dataMenubar.map(({ id, text, press }) => (
          <TopBarSection key={id} text={text} press={press} />
        ))
        }
      </ul>
    </nav>

  )
}

SectionsList.propTypes = {
  display: PropTypes.bool.isRequired
}
