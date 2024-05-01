import './Filters.css'
import filters from '../../data/filters'
import PropTypes from 'prop-types'

export const Filters = ({ selectedFilter, changeSelectedFilter }) => {
  const checkedInput = (value) => selectedFilter === value

  const handleFilterChange = (e) => {
    changeSelectedFilter(e)
  }

  return (
    <section className='filters-section'>
      {filters.map(filter => (
        <label key={filter.value} className='filter-label'>
          <input
            type='radio'
            name='filter'
            value={filter.value}
            checked={checkedInput(filter.value)}
            onChange={handleFilterChange}
          />
          {filter.label}
        </label>
      ))}
    </section>
  )
}

Filters.propTypes = {
  selectedFilter: PropTypes.string,
  changeSelectedFilter: PropTypes.func
}
