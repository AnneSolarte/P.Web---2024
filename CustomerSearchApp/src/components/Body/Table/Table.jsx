import { useContextHook } from '../../../hooks/contextHook'
import './Table.css'

export function Table () {
  const { filteredCustomers, searchTerm } = useContextHook()
  const columns = ['Name', 'Age', 'Location', 'Gender', 'Income']

  return (
    <div className='layout-column align-items-center justify-content-start'>
      <div className='card p-20 mt-20'>
        {
          filteredCustomers.length === 0
            ? (
              <p>No results for this search: "{searchTerm}" </p>
              )
            : (
              <table>
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.location}</td>
                      <td>{item.gender}</td>
                      <td>{item.income}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              )
        }

      </div>
    </div>
  )
}
