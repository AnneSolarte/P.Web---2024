import './Filters.css'
import PropTypes from 'prop-types'

export const Filters = ({ selectedFilter, changeFilterList }) => {
  const handleFilterChange = (e) => {
    changeFilterList(e)
  }

  return (
    <section className='filters-section'>

      <div>
        <input
          type='radio'
          name='filter'
          value='all'
          checked={selectedFilter === 'all'}
          onChange={handleFilterChange}
        />All <br />
      </div>

      <div>
        <input
          type='radio'
          name='filter'
          value='completed'
          checked={selectedFilter === 'completed'}
          onChange={handleFilterChange}
        />Completed <br />
      </div>

      <div>
        <input
          type='radio'
          name='filter'
          value='pending'
          checked={selectedFilter === 'pending'}
          onChange={handleFilterChange}
        />Pending <br />
      </div>

    </section>
  )
}

Filters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  changeFilterList: PropTypes.func.isRequired
}
