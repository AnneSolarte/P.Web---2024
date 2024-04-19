import { useContextHook } from '../../../hooks/contextHook'
import { Table } from '../Table/Table'

function SearchCustomer () {
  const { searchTerm, handleSearch } = useContextHook()
  return (
    <>
      <div className='layout-row align-items-center justify-content-center mt-30'>

        <input
          className='large mx-20 w-20'
          type='text'
          placeholder='Enter search term (Eg: Phil)'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table />
    </>
  )
}

export default SearchCustomer
