import './Filters.css'

export const Filters = () => {
  return (
    <section className='filters-section'>

      <div>
        <input
          type='radio'
          name='filter'
          value='all'
        />All <br />
      </div>

      <div>
        <input
          type='radio'
          name='filter'
          value='All'
        />Completed <br />
      </div>

      <div>
        <input
          type='radio'
          name='filter'
          value='All'
        />Pending <br />
      </div>

    </section>
  )
}
