import './Filters.css'
import filters from '../../data/filters'

export const Filters = () => {
//   const checkedInput = (value) => selectedFilter === value
//   const handleFilterChange = (e) => {
//     changeSelectedFilter(e)
//   }
  return (
    <section className='filters-section'>
      {filters.map(filter => (
        <div key={filter.value}>
          <input
            type='radio'
            name='filter'
            value={filter.value}
            // checked={selectedFilter === filter.value}
            // onChange={handleFilterChange}
          />
          {filter.label} <br />
        </div>
      ))}
    </section>
  )
}
