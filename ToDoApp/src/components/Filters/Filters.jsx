import { useContextHook } from '../../hooks/contextHook'
import './Filters.css'

export const Filters = () => {
  const { selectedFilter, changeSelectedFilter } = useContextHook()
  const checkedInput = (value) => selectedFilter === value

  const handleFilterChange = (e) => {
    changeSelectedFilter(e)
  }

  return (
    <section className='filters-section'>

      <div>
        <input
          type='radio'
          name='filter'
          value='all'
          checked={checkedInput('all')}
          onChange={changeSelectedFilter}
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
