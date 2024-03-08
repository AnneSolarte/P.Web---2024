import './Filters.css'
import PropTypes from 'prop-types'

export const Filters = ({ selectedFilter, changeFilterList }) => {
  const checkedInput = (value) => selectedFilter === value

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
          checked={checkedInput('all')}
          onChange={handleFilterChange}
        />All <br />
      </div>

      <div>
        <input
          type='radio'
          name='filter'
          value='completed'
          checked={checkedInput('completed')}
          onChange={handleFilterChange}
        />Completed <br />
      </div>

      <div>
        <input
          type='radio'
          name='filter'
          value='pending'
          checked={checkedInput('pending')}
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
