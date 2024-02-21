import { Section } from '../TopBarSection/TopBarSection'
import PropTypes from 'prop-types'

export function SectionsList ({ display }) {
  const sectionsData = [
    { text: 'HOME', press: 'none', id: crypto.randomUUID() },
    { text: 'PRODUCTS', press: 'none', id: crypto.randomUUID() },
    { text: 'SERVICES', press: 'none', id: crypto.randomUUID() },
    { text: 'MEMBERS', press: 'none', id: crypto.randomUUID() },
    { text: 'CONTACTS', press: 'none', id: crypto.randomUUID() }
  ]

  return (
    <nav className={!display ? 'hidden' : ''}>
      <ul>
        {
        sectionsData.map(({ id, text, press }) => (
          <Section key={id} text={text} press={press} />
        ))
        }
      </ul>
    </nav>

  )
}

SectionsList.propTypes = {
  display: PropTypes.bool.isRequired
}
